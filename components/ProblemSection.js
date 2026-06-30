const stats = [
  {
    number: '35%',
    text: 'of patient calls go unanswered during busy hours',
  },
  {
    number: '$2,000+',
    text: 'average lifetime value of one new dental patient',
  },
  {
    number: '0',
    text: 'patients who leave a voicemail and still book elsewhere',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
          The silent leak in your practice
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="border border-navy/20 rounded-lg p-8 text-center bg-white"
            >
              <p className="text-4xl sm:text-5xl font-bold text-teal mb-4">
                {stat.number}
              </p>
              <p className="text-gray-600 leading-relaxed">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
