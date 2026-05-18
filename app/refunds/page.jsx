import Link from "next/link";

export const metadata = {
  title: "Refund Policy",
  description: "Affnaai refund and cancellation policy.",
  alternates: { canonical: "/refunds" },
};

const EFFECTIVE_DATE = "19 May 2026";

export default function RefundsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm text-ink-dim">Effective date: {EFFECTIVE_DATE}</p>
            <h1 className="mt-4 font-display text-balance text-5xl text-ink lg:text-6xl">
              Refund Policy
            </h1>
            <p className="mt-5 text-pretty text-lg text-ink-muted">
              Clear and straightforward. Read this before purchasing.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Legal>

              <Section n="1" title="Setup Fees — Non-Refundable">
                <p>
                  All setup fees are <strong>strictly non-refundable</strong>{" "}
                  once the onboarding process has commenced. Onboarding is
                  deemed to have commenced upon the earliest of:
                </p>
                <ul>
                  <li>The first scheduled onboarding or discovery call with an Affnaai team member, or</li>
                  <li>Receipt of your business information, configuration data, or access credentials for the purpose of building your AI receptionist, or</li>
                  <li>48 hours after your setup payment is processed, whichever occurs first.</li>
                </ul>
                <p>
                  Setup fees compensate for the time and resources invested in
                  configuring, training, and deploying your AI receptionist.
                  This work is performed specifically for your business and
                  cannot be reversed once begun.
                </p>
              </Section>

              <Section n="2" title="Monthly Subscriptions">
                <p>
                  Monthly subscriptions are billed in advance and are
                  <strong> non-refundable</strong> for the current billing
                  period. You may cancel at any time and your subscription will
                  remain active until the end of the current paid billing cycle.
                  No partial-month refunds or pro-rated refunds are provided.
                </p>
                <p>
                  Cancellation takes effect at the end of the current billing
                  period. You will not be charged for subsequent periods after
                  cancellation is confirmed.
                </p>
              </Section>

              <Section n="3" title="Free Trial">
                <p>
                  The 7-day free trial carries no charge. No payment is taken
                  and no refund is applicable. If you do not cancel before the
                  trial ends and convert to a paid plan, standard subscription
                  terms apply from that point.
                </p>
              </Section>

              <Section n="4" title="Founding Client Pricing">
                <p>
                  Setup fees under the Founding 10 programme are non-refundable
                  as described in Section 1. Monthly fees may be cancelled as
                  described in Section 2. The 12-month price lock applies to
                  pricing only — it does not alter cancellation or refund terms.
                </p>
              </Section>

              <Section n="5" title="Overage and Usage Charges">
                <p>
                  Overage charges (for conversations, voice minutes, or SMS
                  usage beyond plan limits) are billed in arrears and are
                  non-refundable. These charges reflect actual usage consumed.
                </p>
              </Section>

              <Section n="6" title="Service Credit — Limited Exception">
                <p>
                  If the Affnaai platform experiences verified, continuous
                  downtime exceeding <strong>72 hours</strong> within a billing
                  period due solely to a failure of Affnaai's own infrastructure
                  (explicitly excluding third-party service failures, AI provider
                  outages, telecommunications provider failures, scheduled
                  maintenance, or force majeure events), you may request a
                  pro-rated service credit for the affected period.
                </p>
                <p>
                  Service credits must be requested within 14 days of the
                  incident. Credits apply to future invoices only and have no
                  cash value. A service credit is the sole and exclusive remedy
                  available for any service interruption.
                </p>
                <p>
                  <strong>
                    Affnaai accepts no liability for revenue loss, missed
                    bookings, missed leads, or any other indirect or consequential
                    loss arising from service interruptions, regardless of cause.
                  </strong>
                </p>
              </Section>

              <Section n="7" title="Annual Billing">
                <p>
                  If annual billing options are made available, annual
                  subscriptions are refundable on a pro-rated basis for
                  <strong> unused full months only</strong>, provided the
                  cancellation request is made within 30 days of the annual
                  renewal date. After 30 days from the renewal date, annual
                  subscriptions are non-refundable. Setup fees remain
                  non-refundable in all cases.
                </p>
              </Section>

              <Section n="8" title="Cancellations and Refund Requests">
                <p>To cancel or submit a refund request:</p>
                <ul>
                  <li>
                    Contact us via{" "}
                    <Link href="/contact" className="text-cyan-glow underline-offset-4 hover:underline">
                      affnaai.com/contact
                    </Link>{" "}
                    or WhatsApp{" "}
                    <a href="https://wa.me/923334985948" className="text-cyan-glow underline-offset-4 hover:underline">
                      +92 333 498 5948
                    </a>
                  </li>
                  <li>Include your account email and the nature of your request.</li>
                  <li>We aim to respond within 5 business days.</li>
                </ul>
              </Section>

              <Section n="9" title="Chargebacks and Disputes">
                <p>
                  If you initiate a chargeback or payment dispute with your bank
                  or card provider without first contacting Affnaai to attempt
                  resolution, we reserve the right to immediately suspend your
                  account, contest the chargeback with evidence of service
                  delivery, and recover any fees and costs associated with the
                  dispute. We strongly encourage you to contact us first — most
                  issues can be resolved promptly.
                </p>
              </Section>

              <Section n="10" title="Changes to This Policy">
                <p>
                  Affnaai may update this Refund Policy at any time. Changes
                  apply to new purchases made after the updated effective date.
                  Existing subscriptions are governed by the policy in effect at
                  the time of purchase for the remainder of that billing period.
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
