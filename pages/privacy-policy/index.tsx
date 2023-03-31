import { PageBigTitle } from "@/components/Shared/PageBigTitle";
import React from "react";
import { CONTACTDATA } from "@/STATIC_DATA/ARCTISCONTACTDATA";
import { Wrapper } from "@/components/layout/Wrapper/Wrapper";
import { GradiantBackground } from "@/components/layout/GradiantBackground/GradiantBackground";
import styles from "./../../styles/PrivacyPolicy.module.scss";
import { PageHead } from "@/components/layout/Head/Head";
import { PPPageContent } from "@/STATIC_DATA/STATICPAGECONTENT";
const index = () => {
  return (
    <>
      <PageHead
        title={PPPageContent.head.title}
        metaTitle={PPPageContent.head.metaTitle}
        imageUrl={PPPageContent.head.imageUrl}
        description={PPPageContent.head.description}
      />
      <GradiantBackground>
        <Wrapper>
          <main className={styles["privacy-policy"]}>
            <h1>Privacy Policy</h1>
            <p>
              Thank you for using our website and trusting us with your personal
              information. This privacy policy will inform you about the type of
              data we collect, how we use it, and how we protect it.
            </p>
            <h2>Collection and Use of Personal Information</h2>
            <p>
              The only personal information we collect from our users is their
              email address and/or phone number, which they voluntarily provide
              through our contact form. We use this information solely for the
              purpose of responding to their inquiries or comments.
            </p>
            <h2>Sharing of Personal Information</h2>
            <p>
              We do not share or sell any personal information collected from
              our users to any third-party entities.
            </p>
            <h2>Data Retention</h2>
            <p>
              We will retain the personal information provided by users through
              our contact form for as long as necessary to respond to their
              inquiries or comments, after which it will be deleted.
            </p>
            <h2>Security</h2>
            <p>
              We have implemented appropriate security measures to protect
              against the unauthorized access, alteration, or disclosure of the
              personal information we collect from our users.
            </p>
            <h2>Cookies</h2>
            <p>
              Our website does not use cookies or any other tracking
              technologies.
            </p>
            <h2>Changes to Privacy Policy</h2>
            <p>
              We reserve the right to modify or update this privacy policy at
              any time without prior notice. Users are encouraged to check this
              page regularly for any changes.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our privacy policy
              or how we handle personal information, please contact us via email
              at <a href={`mailto:${CONTACTDATA.email}`}>{CONTACTDATA.email}</a>
              .
            </p>
          </main>
        </Wrapper>
      </GradiantBackground>
    </>
  );
};

export default index;
