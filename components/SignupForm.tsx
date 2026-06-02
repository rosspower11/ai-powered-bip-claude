import { SIGNUP_FORM_EMBED_URL, SIGNUP_FORM_ID } from "@/lib/cohort";

export default function SignupForm() {
  const iframeId = `inline-${SIGNUP_FORM_ID}`;

  return (
    <section className="signup" id="signup">
      <div className="container signup-inner">
        <div className="signup-head anim">
          <div className="eyebrow" style={{ color: "var(--text-dark-grey)" }}>
            BIP100 MEMBERS
          </div>
          <h2 className="dark">Sign up.</h2>
          <p className="sub sub-dark" style={{ margin: "16px auto 0", maxWidth: "560px" }}>
            Complete the form below to reserve your place on the BIP100 exclusive Claude cohort.
          </p>
        </div>
        <div className="signup-embed anim d1">
          <iframe
            src={SIGNUP_FORM_EMBED_URL}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "4px",
            }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="[301.011] Claude Cohort - BIP"
            data-height="460"
            data-layout-iframe-id={iframeId}
            data-form-id={SIGNUP_FORM_ID}
            title="[301.011] Claude Cohort - BIP"
          />
        </div>
      </div>
    </section>
  );
}
