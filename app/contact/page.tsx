import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Norwood Atlas. Contact us for project inquiries, questions, or to discuss how we can help you build and launch your product.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Ready to start a project or have questions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Main Contact Card */}
            <div className="p-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-200 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Email Us</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Send us an email and we'll get back to you within 24-48 hours.
                </p>
                <a
                  href="mailto:NorwoodAtlas@gmail.com"
                  className="inline-flex items-center gap-2 text-2xl font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  NorwoodAtlas@gmail.com
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* What to Include */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to include in your message:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your name and company (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>A brief description of your project or question</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your timeline and any relevant details</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Best way to reach you (if different from sender address)</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 text-center">
              <p className="text-gray-700">
                <strong>Response Time:</strong> We typically respond within 24-48 hours during business days. For urgent matters, please include "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
            <p className="text-lg text-gray-600 mb-8">
              Looking for support or general information?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/support" className="btn-secondary inline-block">
                Visit Support
              </a>
              <a href="/about" className="btn-secondary inline-block">
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
