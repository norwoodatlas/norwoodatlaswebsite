import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Norwood Atlas. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> January 2026
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Introduction</h2>
          <p className="text-gray-700">
            Norwood Atlas ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Information We Collect</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Personal Information</h3>
          <p className="text-gray-700">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="text-gray-700">
            <li>Fill out contact forms on our website</li>
            <li>Subscribe to our newsletter or communications</li>
            <li>Request information about our services</li>
            <li>Engage with us for business purposes</li>
          </ul>
          <p className="text-gray-700">
            This information may include your name, email address, company name, phone number, and any other information you choose to provide.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Automatically Collected Information</h3>
          <p className="text-gray-700">
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul className="text-gray-700">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referral source</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700">
            We use the information we collect to:
          </p>
          <ul className="text-gray-700">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you information about our services</li>
            <li>Improve our website and services</li>
            <li>Analyze website usage and trends</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraudulent or illegal activity</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Information Sharing</h2>
          <p className="text-gray-700">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="text-gray-700">
            <li><strong>Service Providers:</strong> Third-party vendors who help us operate our website and business</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Cookies and Tracking</h2>
          <p className="text-gray-700">
            We may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Your Rights</h2>
          <p className="text-gray-700">
            Depending on your location, you may have the right to:
          </p>
          <ul className="text-gray-700">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Children's Privacy</h2>
          <p className="text-gray-700">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:privacy@norwoodatlas.com" className="text-primary-600 hover:text-primary-700">privacy@norwoodatlas.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
