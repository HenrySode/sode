import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const data = await req.json();
    // TODO: Integrate email (Nodemailer/SMTP) or external service
    console.log('Contact form submission:', data);
    return NextResponse.json({ok: true});
}
