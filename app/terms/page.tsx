import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Norwood Atlas. Review the terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> January 2026
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700">
            By accessing or using the Norwood Atlas website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Description of Services</h2>
          <p className="text-gray-700">
            Norwood Atlas provides software design, engineering, and marketing services to businesses and individuals. The specific scope of services will be defined in separate written agreements with clients.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Use of Website</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Permitted Use</h3>
          <p className="text-gray-700">
            You may use our website for lawful purposes only. You agree not to:
          </p>
          <ul className="text-gray-700">
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Interfere with or disrupt the website's operation</li>
            <li>Upload or transmit viruses, malware, or other harmful code</li>
            <li>Impersonate any person or entity</li>
            <li>Collect or harvest information about other users</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Content Submission</h3>
          <p className="text-gray-700">
            When you submit content to us through contact forms or other means, you grant us a non-exclusive, royalty-free license to use, reproduce, and process that content for the purpose of providing our services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Intellectual Property</h2>
          <p className="text-gray-700">
            All content on this website, including text, graphics, logos, and software, is the property of Norwood Atlas or its licensors and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="text-gray-700">
            You may not reproduce, distribute, modify, or create derivative works from our website content without our express written permission.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Client Agreements</h2>
          <p className="text-gray-700">
            For clients engaging our professional services, separate written agreements will govern the specific terms of engagement, including:
          </p>
          <ul className="text-gray-700">
            <li>Scope of work</li>
            <li>Payment terms</li>
            <li>Intellectual property rights</li>
            <li>Confidentiality obligations</li>
            <li>Project timelines and deliverables</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Disclaimers</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Website Availability</h3>
          <p className="text-gray-700">
            We strive to maintain website availability but do not guarantee uninterrupted access. We may suspend or restrict access for maintenance or other reasons without notice.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Information Accuracy</h3>
          <p className="text-gray-700">
            While we make reasonable efforts to ensure information accuracy, we do not warrant that website content is complete, accurate, or current. Information is provided "as is" without warranties of any kind.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700">
            To the fullest extent permitted by law, Norwood Atlas shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
          </p>
          <p className="text-gray-700">
            Our total liability for any claims related to the website shall not exceed the amount you paid to us, if any, for accessing the website.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Indemnification</h2>
          <p className="text-gray-700">
            You agree to indemnify and hold harmless Norwood Atlas, its officers, employees, and agents from any claims, damages, losses, or expenses arising from your use of the website or violation of these terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Access to third-party sites is at your own risk.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Termination</h2>
          <p className="text-gray-700">
            We reserve the right to terminate or suspend your access to our website at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Governing Law</h2>
          <p className="text-gray-700">
            These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Changes to Terms</h2>
          <p className="text-gray-700">
            We may revise these Terms of Service at any time by updating this page. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Severability</h2>
          <p className="text-gray-700">
            If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:legal@norwoodatlas.com" className="text-primary-600 hover:text-primary-700">legal@norwoodatlas.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
