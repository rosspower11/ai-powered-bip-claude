import { PUBLIC_COHORT_LABEL, PUBLIC_COHORT_URL } from "@/lib/site";

export default function BipGate() {
  return (
    <section className="bip-gate">
      <div className="container bip-gate-inner anim">
        <p className="bip-gate-label">Only available to BIP100 members</p>
        <p className="bip-gate-alt">
          Not a BIP100 member?{" "}
          <a href={PUBLIC_COHORT_URL} target="_blank" rel="noopener noreferrer">
            Join the public {PUBLIC_COHORT_LABEL}
          </a>{" "}
          at claude.aipowered.xyz
        </p>
      </div>
    </section>
  );
}
