
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { 
      name, email, phone, namoPlotas, voniuSkaicius, kambariuSkaicius, 
      selectedServices, lowEstimate, highEstimate 
    } = await req.json();

    console.log('--- GHL Submission Request Start ---');
    console.log('Incoming request body:', { name, email, phone, namoPlotas, voniuSkaicius, kambariuSkaicius, selectedServices, lowEstimate, highEstimate });

    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

    console.log('GHL Config Check:', { 
      GHL_API_KEY_present: !!GHL_API_KEY, 
      GHL_LOCATION_ID_present: !!GHL_LOCATION_ID 
    });

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error('GHL environment variables missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const payload = {
      locationId: GHL_LOCATION_ID,
      firstName: name,
      email: email,
      phone: phone,
      customFields: [
        { key: 'small_trees', value: namoPlotas.toString() },
        { key: 'large_trees', value: voniuSkaicius.toString() },
        { key: 'build_a_flower_bed_sq_ft', value: kambariuSkaicius.toString() },
        { key: 'samatos_paslaugos', value: selectedServices.join(', ') }, // Make sure to join array if it's an array
        { key: 'quote_amount', value: lowEstimate.toString() },
        { key: 'size_of_wall_sq_ft', value: highEstimate.toString() },
      ],
      tags: ["Samata Uzklausa"],
    };

    console.log('Sending payload to GHL:', JSON.stringify(payload, null, 2));

    // Upsert contact to GHL
    const response = await fetch(`https://services.leadconnectorhq.com/contacts/upsert`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseBody = await response.text();
    console.log('GHL API Response Status:', response.status);
    console.log('GHL API Response Body:', responseBody);

    if (!response.ok) {
      console.error('GHL API call failed');
      // Don't block user if GHL fails
    } else {
      console.log('--- GHL Submission Success ---');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API submit-samata critical error:', error);
    return NextResponse.json({ success: true }); // Still return success to allow UI to proceed
  }
}
