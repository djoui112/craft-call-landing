const stats = [
  {
    number: 'Most',
    text: 'calls come in while your techs are on a job and can\'t pick up',
  },
  {
    number: '$500-5k',
    text: 'typical value of a single HVAC repair or install job',
  },
  {
    number: '0',
    text: 'callers who leave a voicemail and still book with you instead of the next name on Google',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy text-center mb-14">
          The silent leak in your business
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
