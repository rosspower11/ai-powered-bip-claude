import { FOOTER_EMAIL, FOOTER_LINK_LABEL, FOOTER_LINK_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; 2026 AI Powered &middot;{" "}
        <a href={`mailto:${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</a> &middot;{" "}
        <a href={FOOTER_LINK_URL}>{FOOTER_LINK_LABEL}</a>
      </p>
    </footer>
  );
}
