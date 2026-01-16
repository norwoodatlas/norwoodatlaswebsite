import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Norwood Atlas is a software design, engineering, and marketing company that helps startups and teams build products that ship. Learn about our approach and values.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Norwood Atlas</h1>
            <p className="text-xl text-gray-600">
              We're a team of designers, engineers, and marketers who believe software should ship—not stall.
            </p>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Stand For</h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clarity over complexity</h3>
                <p className="text-lg text-gray-600">
                  We believe the best products are simple to use and simple to build. We strip away unnecessary features, focus on what matters, and communicate in plain language. No jargon. No fluff.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Execution over planning</h3>
                <p className="text-lg text-gray-600">
                  Planning is important, but shipping is everything. We move fast, iterate based on real feedback, and prioritize getting working software into users' hands. Perfect is the enemy of done.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership over transactions</h3>
                <p className="text-lg text-gray-600">
                  We're not a typical agency. We invest in understanding your business, users, and goals. We ask hard questions, challenge assumptions, and care about your success as much as you do.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality over shortcuts</h3>
                <p className="text-lg text-gray-600">
                  Shipping fast doesn't mean shipping broken software. We write maintainable code, design thoughtful experiences, and build systems that scale. Quality work compounds over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How We're Different</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-stack capabilities</h3>
                <p className="text-gray-600">
                  Design, engineering, and marketing under one roof. No hand-offs between agencies. No miscommunication. Just a cohesive team working toward the same goal.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Startup mindset</h3>
                <p className="text-gray-600">
                  We think like founders because many of us have been founders. We understand constraints, urgency, and the need to validate quickly before investing heavily.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent process</h3>
                <p className="text-gray-600">
                  You'll always know what we're working on, why we're doing it, and what's next. Regular updates, clear milestones, and honest conversations.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term thinking</h3>
                <p className="text-gray-600">
                  We're not just here for the launch. We build relationships and systems that grow with you—whether that's ongoing support, new features, or strategic guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg">
                We start by asking questions. What problem are you solving? Who are you solving it for? What does success look like? Once we understand the fundamentals, we map out a clear path forward.
              </p>
              <p className="text-lg">
                From there, we move into action. We design with intention, build with precision, and market with purpose. Every decision is rooted in user needs and business goals—not personal preference or trends.
              </p>
              <p className="text-lg">
                Throughout the process, we communicate openly. If something isn't working, we say so. If there's a better approach, we propose it. We believe honest feedback builds better products and stronger partnerships.
              </p>
              <p className="text-lg">
                And when we ship, we don't disappear. We monitor, iterate, and improve based on real-world usage. Launching is just the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Want to work with us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's talk about your project and see if we're a good fit.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
