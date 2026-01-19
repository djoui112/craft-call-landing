export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <div className="text-2xl font-bold text-white mb-2">Craft Call</div>
            <p className="text-sm">Never miss a call again</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Contact */}
          <div>
            <a
              href="mailto:hello@craft-call.com"
              className="hover:text-white transition-colors"
            >
              hello@craft-call.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 Craft Call. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
