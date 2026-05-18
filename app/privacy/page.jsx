import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "How Affnaai collects, uses, and protects your data.",
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE_DATE = "19 May 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-ink-dim">Effective date: {EFFECTIVE_DATE}</p>
            <h1 className="mt-4 font-display text-balance text-5xl text-ink lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              Affnaai is committed to protecting the privacy of clients and
              their customers. This policy explains what data we collect, how we
              use it, and your rights.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Legal>

              <Section n="1" title="Who We Are">
                <p>
                  Affnaai operates the AI receptionist platform at affnaai.com
                  (the "Service"). We act as a data processor on behalf of our
                  clients (businesses using our Service) and as a data controller
                  for data we collect directly from website visitors and clients.
                </p>
              </Section>

              <Section n="2" title="Data We Collect">
                <p><strong>From clients (businesses using Affnaai):</strong></p>
                <ul>
                  <li>Contact information: name, email address, phone number, business name, and website.</li>
                  <li>Payment information: processed entirely by third-party payment processors. Affnaai does not store payment card details.</li>
                  <li>Business configuration data: FAQs, services offered, pricing, scheduling rules, tone guidelines, and other information used to train your AI receptionist.</li>
                  <li>Account usage data: login activity, feature usage, and support communications.</li>
                </ul>
                <p><strong>From end users (your customers interacting with the AI):</strong></p>
                <ul>
                  <li>Conversation transcripts: messages exchanged with the AI receptionist across all configured channels.</li>
                  <li>Contact details voluntarily provided: name, phone number, email address, business website, appointment details, and other information shared during conversations.</li>
                  <li>Channel metadata: timestamps, message delivery status, and channel source (web chat, messaging platform, etc.).</li>
                </ul>
                <p><strong>Automatically collected:</strong></p>
                <ul>
                  <li>Website usage data: pages visited, time on site, browser type, device type, and IP address.</li>
                  <li>Cookies and tracking: described in Section 9.</li>
                </ul>
              </Section>

              <Section n="3" title="How We Use Data">
                <p>We use collected data to:</p>
                <ul>
                  <li>Provide, operate, and maintain the Service.</li>
                  <li>Configure and train your specific AI receptionist.</li>
                  <li>Route conversations and deliver automated responses.</li>
                  <li>Process payments and manage billing.</li>
                  <li>Send service communications: onboarding, updates, and support.</li>
                  <li>Monitor and improve Service performance and reliability.</li>
                  <li>Detect fraud, abuse, and security incidents.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
                <p>
                  <strong>We do not sell your data or your customers' data to any third party.</strong>{" "}
                  We do not use conversation data to train AI models that are shared across multiple
                  clients. Your business data and your customers' conversations remain specific to your account.
                </p>
              </Section>

              <Section n="4" title="Data Sharing with Third Parties">
                <p>
                  We share data only as necessary to deliver the Service. Categories of third parties with whom data may be shared include:
                </p>
                <ul>
                  <li><strong>AI language model providers:</strong> Conversation content is processed by AI providers to generate responses. These providers may include any current or future AI technology providers. We do not disclose your data to these providers for purposes other than generating AI responses.</li>
                  <li><strong>Cloud hosting and infrastructure providers:</strong> Data is stored and processed on cloud infrastructure. These providers are contractually obligated to maintain appropriate security.</li>
                  <li><strong>Calendar and scheduling platforms:</strong> Appointment data is shared with scheduling services to create and manage calendar events.</li>
                  <li><strong>Telecommunications and messaging providers:</strong> Message content is passed through messaging infrastructure providers to deliver communications across channels including SMS and messaging apps.</li>
                  <li><strong>Payment processors:</strong> Payment information is handled directly by payment processors. Affnaai does not receive or store full card details.</li>
                  <li><strong>Analytics providers:</strong> Anonymised or aggregated website usage data may be shared with analytics tools.</li>
                </ul>
                <p>
                  All third-party providers are selected for their commitment to data security and are required to use data only for the purposes for which it was shared. We are not responsible for the independent data practices of third parties.
                </p>
              </Section>

              <Section n="5" title="Client Responsibility for End-User Data">
                <p>
                  When Affnaai processes data on behalf of our clients (e.g.
                  conversation data from your customers), the client acts as the
                  data controller and Affnaai acts as the data processor. Clients
                  are responsible for:
                </p>
                <ul>
                  <li>Ensuring they have a valid legal basis for collecting and processing their customers' data.</li>
                  <li>Obtaining all required consents for automated messaging before deploying the Service.</li>
                  <li>Responding to their customers' data rights requests.</li>
                  <li>Complying with applicable data protection laws in their jurisdiction.</li>
                </ul>
              </Section>

              <Section n="6" title="Data Retention">
                <ul>
                  <li><strong>Conversation transcripts:</strong> Retained for 90 days from the date of each conversation, then automatically deleted.</li>
                  <li><strong>Account and configuration data:</strong> Retained for the duration of your subscription plus 30 days after cancellation.</li>
                  <li><strong>Booking and appointment data:</strong> Subject to the retention policies of the scheduling platforms used.</li>
                  <li><strong>Payment records:</strong> Retained as required by applicable financial and tax regulations.</li>
                  <li><strong>On request:</strong> We will delete your data within 30 days of a verified deletion request, except where retention is required by law.</li>
                </ul>
              </Section>

              <Section n="7" title="Security">
                <p>
                  We implement industry-standard security measures including
                  encryption of data in transit (TLS/HTTPS) and at rest. Access
                  to customer data is restricted to personnel who need it to
                  deliver the Service.
                </p>
                <p>
                  No data transmission or storage system is guaranteed to be
                  100% secure. In the event of a data breach that affects your
                  data, we will notify affected parties as required by applicable
                  law and as promptly as reasonably practicable.
                </p>
                <p>
                  <strong>
                    Affnaai is not liable for data breaches, unauthorized access,
                    or data loss caused by third-party infrastructure providers,
                    your own security practices, or circumstances beyond our
                    reasonable control.
                  </strong>
                </p>
              </Section>

              <Section n="8" title="Your Rights">
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention requirements).</li>
                  <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
                  <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
                </ul>
                <p>
                  To exercise any right, contact us using the details in Section
                  12. We will respond within 30 days. We may need to verify your
                  identity before processing requests.
                </p>
              </Section>

              <Section n="9" title="Cookies">
                <p>
                  Our website uses strictly necessary cookies to operate. We do
                  not use advertising or tracking cookies.
                </p>
                <p>
                  Third-party services embedded in our platform — such as
                  scheduling widgets — may set their own cookies governed by
                  their respective privacy policies. You can control cookie
                  settings through your browser, though disabling certain cookies
                  may affect Service functionality.
                </p>
              </Section>

              <Section n="10" title="International Data Transfers">
                <p>
                  Data may be transferred to and processed in countries other
                  than your country of residence, including countries that may
                  not provide the same level of data protection as your
                  jurisdiction. Where required, we take appropriate safeguards
                  for such transfers, including contractual protections with
                  third-party providers.
                </p>
                <p>
                  If you are located in the European Economic Area (EEA),
                  United Kingdom, or another jurisdiction with data transfer
                  restrictions, by using the Service you consent to your data
                  being transferred internationally as described in this policy.
                </p>
              </Section>

              <Section n="11" title="Children's Privacy">
                <p>
                  The Service is intended for businesses and adults. We do not
                  knowingly collect personal data from individuals under the age
                  of 16. If we become aware that we have collected data from a
                  minor, we will delete it promptly.
                </p>
              </Section>

              <Section n="12" title="Contact and Data Requests">
                <p>
                  For privacy-related questions, data requests, or to exercise
                  your rights:
                </p>
                <ul>
                  <li>
                    Contact form:{" "}
                    <Link href="/contact" className="text-cyan-glow underline-offset-4 hover:underline">
                      affnaai.com/contact
                    </Link>
                  </li>
                  <li>
                    WhatsApp:{" "}
                    <a href="https://wa.me/923334985948" className="text-cyan-glow underline-offset-4 hover:underline">
                      +92 333 498 5948
                    </a>
                  </li>
                </ul>
              </Section>

              <Section n="13" title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of material changes via email or a prominent notice
                  on our website at least 14 days before the changes take effect.
                  Your continued use of the Service after the effective date
                  constitutes acceptance of the updated policy.
                </p>
              </Section>

            </Legal>
          </div>
        </div>
      </section>
    </>
  );
}

function Legal({ children }) {
  return (
    <div className="space-y-10 pt-4">
      {children}
      <style>{`
        .legal-section p { color: #B8BCC4; font-size: 15px; line-height: 1.75; margin-bottom: 1rem; }
        .legal-section ul { color: #B8BCC4; font-size: 15px; line-height: 1.75; padding-left: 1.25rem; margin-bottom: 1rem; }
        .legal-section ul li { list-style: disc; margin-bottom: 0.4rem; }
        .legal-section strong { color: #F4F4F5; }
        .legal-section a { color: #22D3EE; }
      `}</style>
    </div>
  );
}

function Section({ n, title, children }) {
  return (
    <div className="legal-section border-b border-bg-border pb-10">
      <h2 className="font-display text-2xl text-ink mb-4">
        {n}. {title}
      </h2>
      {children}
    </div>
  );
}
