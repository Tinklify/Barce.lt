
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { 
      name, email, phone, namoPlotas, voniuSkaicius, kambariuSkaicius, 
      selectedServices, lowEstimate, highEstimate 
    } = await req.json();

    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error('GHL environment variables missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Upsert contact to GHL
    const response = await fetch(`https://services.leadconnectorhq.com/contacts/upsert`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        firstName: name,
        email: email,
        phone: phone,
        customFields: [
          { key: 'small_trees', value: namoPlotas.toString() },
          { key: 'large_trees', value: voniuSkaicius.toString() },
          { key: 'build_a_flower_bed_sq_ft', value: kambariuSkaicius.toString() },
          { key: 'samatos_paslaugos', value: selectedServices },
          { key: 'quote_amount', value: lowEstimate.toString() },
          { key: 'size_of_wall_sq_ft', value: highEstimate.toString() },
        ],
        tags: ["Samata Uzklausa"],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GHL API error:', errorText);
      // Don't block user if GHL fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API submit-samata error:', error);
    return NextResponse.json({ success: true }); // Still return success to allow UI to proceed
  }
}
