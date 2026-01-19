'use client'
import { useForm, ValidationError } from '@formspree/react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { CheckCircle } from 'lucide-react'

export default function EmailCapture({ formId = "maqqjyej", buttonText = "Join the Waitlist", className = "" }) {
  const [state, handleSubmit] = useForm(formId)

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 flex items-center gap-3">
        <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
        <div>
          <p className="font-semibold text-green-900">Thanks for joining!</p>
          <p className="text-sm text-green-700">We'll be in touch soon.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          error={state.errors && state.errors.length > 0 ? 'Please enter a valid email' : ''}
          className="flex-1"
          required
        />
        <Button
          type="submit"
          variant="primary"
          size="large"
          disabled={state.submitting}
          className="w-full sm:w-auto"
        >
          {state.submitting ? 'Submitting...' : buttonText}
        </Button>
      </div>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-sm text-red-600"
      />
    </form>
  )
}
