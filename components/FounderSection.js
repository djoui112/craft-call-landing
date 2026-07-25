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
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&auto=format"
              alt="Contractor on a service call"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy leading-tight mb-8">
              Built by someone who got tired of watching contractors lose jobs to voicemail
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I&apos;m Achref. I&apos;m an AI automation engineer, and I built CraftCall
                after seeing how many home service businesses lose jobs simply because
                nobody could pick up the phone while they were on a call.
              </p>
              <p>
                CraftCall isn&apos;t a venture-funded startup with a 50-person team.
                It&apos;s a focused product built by someone who actually picks up the
                phone and talks to business owners.
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
