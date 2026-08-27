
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { lowEstimate, highEstimate, contact_id } = await req.json();

    if (!contact_id) {
      return NextResponse.json({ error: 'Missing contact_id' }, { status: 400 });
    }

    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error('GHL environment variables missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Update GHL contact custom fields
    // Note: The specific custom field IDs or keys depend on your GHL setup.
    // Assuming custom fields have keys "quote_amount" and "size_of_wall_sq_ft"
    const response = await fetch(`https://services.leadconnectorhq.com/contacts/${contact_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customFields: [
          { key: 'quote_amount', value: lowEstimate },
          { key: 'size_of_wall_sq_ft', value: highEstimate },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL API error:', errorText);
      return NextResponse.json({ error: 'Failed to update contact' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API update-estimate error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
