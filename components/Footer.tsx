import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold">Norwood Atlas</h3>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          &copy; {currentYear} Norwood Atlas. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
