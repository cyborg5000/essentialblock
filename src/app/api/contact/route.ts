import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!service || !service.trim()) {
      return NextResponse.json(
        { error: 'Service selection is required' },
        { status: 400 }
      );
    }

    // TODO: Connect to Resend/SendGrid to send notification email
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@essentialblock.com',
    //   to: 'team@essentialblock.com',
    //   subject: `New inquiry from ${name} - ${service}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company || 'N/A'}</p><p>Service: ${service}</p><p>Message: ${message || 'N/A'}</p>`,
    // });

    console.log('Contact form submission:', {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || '',
      service: service.trim(),
      message: message?.trim() || '',
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch {
    console.error('Contact form error:', 'Failed to process submission');
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
