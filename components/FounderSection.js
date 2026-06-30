import Image from 'next/image'
import { Button } from './ui/Button'
import { DEMO_PHONE, DEMO_PHONE_DISPLAY } from '@/lib/constants'

export default function FounderSection() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop&auto=format"
              alt="Dental clinic reception area"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy leading-tight mb-8">
              Built by someone who got tired of watching clinics lose patients to voicemail
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m Achref. I&apos;m an AI automation engineer and I&apos;ve spent the
                last year building and stress-testing AI receptionist systems for dental
                and medical clinics.
              </p>
              <p>
                CraftCall isn&apos;t a venture-funded startup with a 50-person team.
                It&apos;s a focused product built by someone who actually picks up the
                phone and talks to clinic owners.
              </p>
              <p>
                If you want to see it work live — call our demo line right now:{' '}
                <a
                  href={DEMO_PHONE}
                  className="text-navy font-semibold hover:text-teal transition-colors"
                >
                  {DEMO_PHONE_DISPLAY}
                </a>
                . That&apos;s the actual CraftCall AI answering.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="outline" size="large" href={DEMO_PHONE}>
                Call demo now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
