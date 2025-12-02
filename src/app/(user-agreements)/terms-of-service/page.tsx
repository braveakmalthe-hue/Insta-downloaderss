import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TermsOfServicePage = () => {
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
        <h1 className="mb-8 text-4xl font-bold text-white">Terms of Service</h1>

        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">1.1.</span> These Terms of Service
                (ToS) govern your use of the website and its associated services (the "Website" or "Service"). By using the
                Website or Service, you agree to be bound by the terms and conditions
                set forth in this ToS.
              </p>
              <p>
                <span className="font-semibold text-white">1.2.</span> Please read this ToS
                carefully before using the Website or Service. If you do not agree to
                the terms of this ToS, you must not access or use the Website or
                Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">2. Changes to the ToS</h2>
            <p>
              <span className="font-semibold text-white">2.1.</span> We reserve the right to
              update, modify, or replace any part of the ToS at any time by posting
              the updated ToS on the Website. Your continued use of the Website or
              Service after the effective date of the updated ToS constitutes your
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">3. Prohibited Uses</h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">3.1.</span> You may not use the
                Website or Service for any illegal activities, including but not
                limited to:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Distributing or accessing content that infringes on others'
                  intellectual property rights;
                </li>
                <li>
                  Transmitting or distributing material that promotes violence,
                  discrimination, or illegal activities;
                </li>
                <li>
                  Harassing, stalking, or intimidating other users of the Website or
                  Service.
                </li>
              </ul>
              <p>
                <span className="font-semibold text-white">3.2.</span> You agree not to engage in
                any activities that could harm or disable the Website or Service or
                interfere with other users' use and enjoyment of the Website or
                Service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              4. Intellectual Property Rights
            </h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">4.1.</span> All content, including but
                not limited to text, images, videos, and software, on the Website is
                the property of the Website owner or its licensors. You are granted a
                limited license to access and view the content for your personal,
                non-commercial use only.
              </p>
              <p>
                <span className="font-semibold text-white">4.2.</span> You may not modify, copy,
                distribute, transmit, display, perform, reproduce, publish, license,
                create derivative works from, transfer, or sell any content from the
                Website without the express prior written permission of the Website
                owner.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">
              5. Disclaimers and Limitations of Liability
            </h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">5.1.</span> The Website and Service
                are provided on an "as is" and "as available"
                basis without any warranties, express or implied, including but not
                limited to warranties of merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>
              <p>
                <span className="font-semibold text-white">5.2.</span> We shall not be liable for
                any direct, indirect, incidental, special, consequential, or punitive
                damages arising out of or in connection with your use of the Website
                or Service, even if we have been advised of the possibility of such
                damages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">6. Governing Law</h2>
            <p>
              <span className="font-semibold text-white">6.1.</span> These ToS shall be
              governed by and construed in accordance with the laws of{" "}
              <span className="italic text-white">Algeria</span>, without regard to its
              conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">7. Contact Information</h2>
            <p>
              <span className="font-semibold text-white">7.1.</span> If you have any questions
              or concerns about these ToS, please contact the Website owner at{" "}
              <span className="italic text-white">your-email@example.com</span>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">8. Acceptance of ToS</h2>
            <p>
              By accessing or using the Website or Service, you acknowledge that you
              have read, understood, and agree to be bound by the terms and
              conditions of this ToS.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
