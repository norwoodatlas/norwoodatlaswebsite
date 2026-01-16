import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help and support from Norwood Atlas. Contact us for technical assistance, project inquiries, or general questions.',
}

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Support</h1>
            <p className="text-xl text-gray-600">
              We're here to help. Whether you're a client or exploring working with us, we're happy to answer your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Support */}
              <div className="p-8 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Email Support</h2>
                <p className="text-gray-600 mb-4">
                  For general support inquiries, technical questions, or assistance with existing projects.
                </p>
                <a
                  href="mailto:support@norwoodatlas.com"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
                >
                  support@norwoodatlas.com
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Business Inquiries */}
              <div className="p-8 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Business Inquiries</h2>
                <p className="text-gray-600 mb-4">
                  Ready to start a project? Want to discuss partnership opportunities? Let's talk.
                </p>
                <a
                  href="mailto:hello@norwoodatlas.com"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
                >
                  hello@norwoodatlas.com
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* General Contact */}
              <div className="p-8 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">General Inquiries</h2>
                <p className="text-gray-600 mb-4">
                  For all other questions, feedback, or just to say hello.
                </p>
                <a
                  href="mailto:info@norwoodatlas.com"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
                >
                  info@norwoodatlas.com
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Contact Form */}
              <div className="p-8 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Form</h2>
                <p className="text-gray-600 mb-4">
                  Prefer to use a form? Fill out our contact form and we'll get back to you.
                </p>
                <Link
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-2"
                >
                  Go to contact form
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What's your typical response time?</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters from existing clients, we typically respond much faster.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer ongoing support after launch?</h3>
                <p className="text-gray-600">
                  Yes! We offer maintenance and support packages for all projects we build. We can discuss ongoing support options during our initial consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can you help with emergency issues?</h3>
                <p className="text-gray-600">
                  Current clients with active support agreements have access to priority support channels for urgent issues. Contact us at support@norwoodatlas.com with "URGENT" in the subject line.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">How do I get started on a new project?</h3>
                <p className="text-gray-600">
                  The best way to start is by reaching out via our contact form or emailing hello@norwoodatlas.com. We'll schedule a call to discuss your project and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Still have questions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't hesitate to reach out. We're here to help.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
