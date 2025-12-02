import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
        <h1 className="mb-8 text-4xl font-bold text-white">Privacy Policy</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">1.1.</span> This Privacy Policy
                (Policy) informs users that the website does not collect, store, or process any personal information. By using
                the Website or Service, you acknowledge that no personal information
                is being collected or stored.
              </p>
              <p>
                <span className="font-semibold text-white">1.2.</span> Please note that this
                Policy is provided in compliance with legal requirements, even though
                the Website or Service does not collect or store any personal
                information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              2. Third-Party Advertising and Analytics
            </h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">2.1.</span> We use third-party
                advertising services, such as Google AdSense, to serve advertisements
                on the Website. These third parties may use cookies, web beacons, and
                other tracking technologies to collect information about your use of
                the Website and other websites, including your IP address, browser
                type, internet service provider, referring/exit pages, and date/time
                stamp. For more information, please visit{" "}
                <a
                  target="_blank"
                  href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  privacypolicies.com
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  termsfeed.com
                </a>
                .
              </p>
              <p>
                <span className="font-semibold text-white">2.2.</span> You may opt-out of
                personalized advertising by visiting{" "}
                <a
                  target="_blank"
                  href="https://adssettings.google.com/authenticated"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                >
                  Ads Settings
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              3. Changes to the Privacy Policy
            </h2>
            <p>
              <span className="font-semibold text-white">3.1.</span> We reserve the right to
              update, modify, or replace any part of the Policy at any time by
              posting the updated Policy on the Website. Your continued use of the
              Website or Service after the effective date of the updated Policy
              constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">4. Contact Information</h2>
            <p>
              <span className="font-semibold text-white">4.1.</span> If you have any questions
              or concerns about this Policy, please contact the Website owner at{" "}
              <span className="italic text-white">your-email@example.com</span>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              5. Acceptance of Privacy Policy
            </h2>
            <p>
              By accessing or using the Website or Service, you acknowledge that you
              have read, understood, and agree to be bound by the terms and
              conditions of this Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
