import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email } = await request.json()
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // TODO: Add to database or email service (Mailchimp, ConvertKit, etc.)
    // For now, just log it
    console.log('New waitlist signup:', email)
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    return NextResponse.json(
      { message: 'Successfully joined waitlist!', email },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
