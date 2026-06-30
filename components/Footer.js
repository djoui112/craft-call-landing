export default function Footer() {
  return (
    <footer className="py-12 bg-navy text-white/60">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
          <div>
            <p className="text-xl font-serif font-bold text-white mb-1">CraftCall</p>
            <p className="text-sm">AI Receptionist for Dental &amp; Medical Clinics</p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:hello@craft-call.com"
              className="hover:text-white transition-colors"
            >
              hello@craft-call.com
            </a>
            <a
              href="https://www.linkedin.com/in/achref-merzougui"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-center sm:text-left">
          <p>© {new Date().getFullYear()} CraftCall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
