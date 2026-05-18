import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
  description: "Affnaai terms of service — governing your use of the AI receptionist platform.",
  alternates: { canonical: "/terms" },
};

const EFFECTIVE_DATE = "19 May 2026";

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-ink-dim">Effective date: {EFFECTIVE_DATE}</p>
            <h1 className="mt-4 font-display text-balance text-5xl text-ink lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              Please read these terms carefully before using Affnaai. By
              accessing or using the Service, you agree to be bound by them.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Legal>

              <Section n="1" title="The Service">
                <p>
                  Affnaai provides AI-powered receptionist and communication
                  automation software for service businesses (the "Service"). The
                  Service may include web chat automation, messaging automation,
                  booking management, lead capture, missed-call text-back, and
                  related features.
                </p>
                <p>
                  <strong>The Service is a software tool only.</strong> It does
                  not constitute a regulated communications service,
                  telecommunications carrier, healthcare provider, legal advisor,
                  financial advisor, or emergency service of any kind.
                </p>
              </Section>

              <Section n="2" title="No Emergency Services">
                <Warning>
                  AFFNAAI IS NOT AN EMERGENCY SERVICE. THE AI RECEPTIONIST MAY
                  FAIL TO RECOGNIZE, ESCALATE, OR RESPOND APPROPRIATELY TO
                  EMERGENCY SITUATIONS. DO NOT RELY ON THE SERVICE FOR ANY
                  TIME-CRITICAL OR LIFE-SAFETY MATTERS. IF YOU OR YOUR CUSTOMERS
                  HAVE A GENUINE EMERGENCY, CONTACT EMERGENCY SERVICES
                  IMMEDIATELY. AFFNAAI ACCEPTS NO LIABILITY WHATSOEVER FOR HARM
                  ARISING FROM FAILURE TO ESCALATE AN EMERGENCY.
                </Warning>
              </Section>

              <Section n="3" title="AI Limitations and Client Responsibility">
                <p>
                  The Service uses artificial intelligence language models
                  provided by third-party technology providers. You acknowledge
                  and accept that:
                </p>
                <ul>
                  <li>AI-generated responses may be inaccurate, incomplete, misleading, or inappropriate.</li>
                  <li>The AI may misunderstand context, tone, urgency, or intent.</li>
                  <li>The AI may fail to handle certain queries correctly or at all.</li>
                  <li>AI behaviour may change as underlying models are updated by their providers.</li>
                  <li>No AI system is infallible, and the Service carries no guarantee of accuracy.</li>
                </ul>
                <p>
                  <strong>You are solely responsible</strong> for reviewing,
                  configuring, testing, and monitoring all AI responses delivered
                  to your customers. Affnaai provides tools to configure the AI
                  but is not responsible for the content of any AI-generated
                  message sent under your account.
                </p>
              </Section>

              <Section n="4" title="Subscriptions, Billing, and Fees">
                <p>
                  Services are billed in advance on a monthly basis. By
                  subscribing, you authorise Affnaai to charge the fees specified
                  at the time of purchase.
                </p>
                <ul>
                  <li>All fees are stated in US Dollars unless otherwise indicated.</li>
                  <li>Prices may change with 30 days written notice.</li>
                  <li>Usage overage charges apply as described on the pricing page.</li>
                  <li>Failure to pay may result in service suspension or termination.</li>
                </ul>
                <p>
                  Refunds are governed by the Refund Policy at{" "}
                  <Link href="/refunds" className="text-cyan-glow underline-offset-4 hover:underline">
                    affnaai.com/refunds
                  </Link>
                  .
                </p>
              </Section>

              <Section n="5" title="Client Obligations">
                <p>By using the Service, you agree to:</p>
                <ul>
                  <li>Provide accurate information during setup and onboarding.</li>
                  <li>Comply with all applicable laws in your jurisdiction, including laws governing automated messaging, data protection, and consumer communications.</li>
                  <li>Obtain all necessary consents from your customers before sending automated messages on your behalf.</li>
                  <li>Not use the Service for spam, harassment, deception, illegal activity, or any purpose that violates applicable law.</li>
                  <li>Maintain the security of your account credentials and promptly notify Affnaai of any unauthorised access.</li>
                  <li>Not attempt to reverse-engineer, copy, or replicate any part of the Service.</li>
                </ul>
                <p>
                  <strong>Regulatory compliance is your responsibility.</strong>{" "}
                  Affnaai is not responsible for ensuring your use of the Service
                  complies with any specific industry regulations,
                  telecommunications laws, data protection laws, or messaging
                  regulations applicable to your business or jurisdiction.
                </p>
              </Section>

              <Section n="6" title="Third-Party Services">
                <p>
                  The Service integrates with and relies upon third-party
                  services, including but not limited to AI language model
                  providers, cloud hosting providers, database providers,
                  calendar and scheduling platforms, telecommunications and
                  messaging platforms, and payment processors.
                </p>
                <p>Affnaai is not responsible for:</p>
                <ul>
                  <li>The availability, accuracy, reliability, or performance of any third-party service.</li>
                  <li>Changes, disruptions, or discontinuation of any third-party API or platform.</li>
                  <li>Data handling, privacy practices, or security of third-party providers.</li>
                  <li>Any harm, loss, or damage arising from third-party service failures, errors, or outages.</li>
                </ul>
                <p>
                  Use of third-party services is subject to their respective
                  terms of service and privacy policies. Affnaai makes no
                  representations or warranties regarding any third-party service.
                </p>
              </Section>

              <Section n="7" title="Data and Privacy">
                <p>
                  Your use of the Service involves processing data through Affnaai's
                  platform and third-party infrastructure. By using the Service,
                  you consent to data processing as described in our{" "}
                  <Link href="/privacy" className="text-cyan-glow underline-offset-4 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  You represent that you have obtained all necessary consents and
                  legal bases required to share your customers' data with the
                  Service for processing.
                </p>
              </Section>

              <Section n="8" title="Intellectual Property">
                <p>
                  Affnaai retains all rights, title, and interest in and to the
                  Service, software, platform, branding, and related materials.
                  Nothing in these Terms transfers any intellectual property
                  rights to you.
                </p>
                <p>
                  You retain ownership of your business data and your customers'
                  conversation data. You grant Affnaai a limited licence to process
                  this data solely to deliver the Service.
                </p>
              </Section>

              <Section n="9" title="Disclaimer of Warranties">
                <Warning>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, OR
                  NON-INFRINGEMENT.
                </Warning>
                <Warning>
                  AFFNAAI DOES NOT WARRANT THAT: (A) THE SERVICE WILL BE
                  UNINTERRUPTED, ERROR-FREE, OR SECURE; (B) AI-GENERATED
                  RESPONSES WILL BE ACCURATE, APPROPRIATE, OR SUITABLE FOR YOUR
                  PURPOSES; (C) THE SERVICE WILL CAPTURE ALL LEADS, PREVENT
                  MISSED BOOKINGS, OR GENERATE ANY PARTICULAR BUSINESS RESULT;
                  (D) THE SERVICE WILL MEET ANY SPECIFIC REGULATORY REQUIREMENTS
                  APPLICABLE TO YOUR BUSINESS; OR (E) INTEGRATIONS WITH
                  THIRD-PARTY SERVICES WILL FUNCTION WITHOUT INTERRUPTION OR
                  ERROR.
                </Warning>
              </Section>

              <Section n="10" title="Limitation of Liability">
                <Warning>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AFFNAAI'S
                  TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM
                  OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE
                  TOTAL FEES ACTUALLY PAID BY YOU TO AFFNAAI IN THE THREE (3)
                  CALENDAR MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO
                  THE CLAIM.
                </Warning>
                <Warning>
                  IN NO EVENT WILL AFFNAAI BE LIABLE FOR ANY: (A) INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES; (B)
                  LOSS OF PROFITS, REVENUE, BUSINESS, CUSTOMERS, LEADS, OR
                  BOOKINGS; (C) LOSS OF DATA OR GOODWILL; (D) HARM CAUSED BY
                  AI-GENERATED CONTENT OR AI ERRORS; (E) FAILURE OF THE AI TO
                  ESCALATE EMERGENCIES; (F) THIRD-PARTY SERVICE FAILURES,
                  OUTAGES, OR CHANGES; (G) REGULATORY FINES OR PENALTIES IMPOSED
                  ON YOU; OR (H) ANY OTHER INDIRECT OR INCIDENTAL LOSS — EVEN IF
                  AFFNAAI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </Warning>
                <p>
                  Some jurisdictions do not allow the exclusion or limitation of
                  certain damages. In such jurisdictions, the above limitations
                  apply to the fullest extent permitted by law.
                </p>
              </Section>

              <Section n="11" title="Indemnification">
                <p>
                  You agree to defend, indemnify, and hold harmless Affnaai and
                  its directors, officers, employees, and agents from and against
                  any and all claims, damages, liabilities, costs, and expenses
                  (including reasonable legal fees) arising from or related to:
                </p>
                <ul>
                  <li>Your use of the Service or your account.</li>
                  <li>AI-generated responses delivered to your customers.</li>
                  <li>Your violation of these Terms.</li>
                  <li>Your violation of any applicable law or regulation.</li>
                  <li>Any claim by your customers arising from your use of the Service.</li>
                  <li>Your failure to obtain required consents for automated messaging.</li>
                </ul>
              </Section>

              <Section n="12" title="Termination">
                <p>
                  Either party may terminate the Service at any time. Upon
                  termination:
                </p>
                <ul>
                  <li>Your access to the Service will end at the close of your current billing period.</li>
                  <li>Affnaai will delete your data within 30 days of termination.</li>
                  <li>No refunds are provided for the remaining period of a subscription.</li>
                </ul>
                <p>
                  Affnaai may suspend or terminate your account immediately and
                  without notice if you breach these Terms, engage in fraudulent
                  activity, or cause harm to the Service or other users.
                </p>
              </Section>

              <Section n="13" title="Force Majeure">
                <p>
                  Affnaai is not liable for any delay or failure in performance
                  arising from circumstances beyond its reasonable control,
                  including natural disasters, internet infrastructure failures,
                  third-party platform outages, government actions, pandemics,
                  cyberattacks, or any other force majeure event.
                </p>
              </Section>

              <Section n="14" title="Changes to Terms">
                <p>
                  Affnaai may update these Terms at any time. We will provide 30
                  days notice of material changes via email or prominent notice
                  on the website. Your continued use of the Service after the
                  effective date of updated Terms constitutes acceptance.
                </p>
              </Section>

              <Section n="15" title="Governing Law and Disputes">
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of Pakistan. Any dispute arising from these Terms or
                  the Service shall be subject to the exclusive jurisdiction of
                  the courts of Pakistan, or resolved by binding arbitration at
                  Affnaai's election.
                </p>
                <p>
                  You waive any right to participate in class action lawsuits or
                  class-wide arbitration against Affnaai.
                </p>
              </Section>

              <Section n="16" title="Contact">
                <p>
                  For questions about these Terms:{" "}
                  <Link href="/contact" className="text-cyan-glow underline-offset-4 hover:underline">
                    Contact form
                  </Link>{" "}
                  or WhatsApp{" "}
                  <a href="https://wa.me/923334985948" className="text-cyan-glow underline-offset-4 hover:underline">
                    +92 333 498 5948
                  </a>
                  .
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

function Warning({ children }) {
  return (
    <div className="my-4 rounded-xl border border-bg-borderHi bg-bg-elevated/40 p-4">
      <p className="text-sm font-medium leading-relaxed text-ink" style={{ fontSize: "13px" }}>
        {children}
      </p>
    </div>
  );
}
