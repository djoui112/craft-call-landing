const channels = [
  { emoji: '📞', title: 'Phone calls', description: 'Every call answered, every time' },
  { emoji: '💬', title: 'WhatsApp', description: 'Instant replies, day or night' },
  { emoji: '📱', title: 'SMS', description: 'Confirmations and reminders, automated' },
  { emoji: '🌐', title: 'Website chat', description: 'Convert visitors into bookings' },
  { emoji: '📘', title: 'Messenger', description: 'Facebook DMs handled automatically' },
  { emoji: '🔔', title: 'After hours', description: '11pm on a Sunday? Covered.' },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
          One AI. Every channel.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {channels.map((channel) => (
            <div key={channel.title} className="flex gap-4 items-start">
              <span className="text-2xl shrink-0" aria-hidden="true">
                {channel.emoji}
              </span>
              <div>
                <p className="font-semibold text-navy">{channel.title}</p>
                <p className="text-gray-600 mt-1">{channel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
