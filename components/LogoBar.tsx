export default function LogoBar() {
  const logos = [
    { text: "Microsoft", cls: "" }, { text: "Deloitte", cls: "lg" }, { text: "KPMG", cls: "sm" },
    { text: "ORACLE", cls: "lg" }, { text: "Google", cls: "" }, { text: "Accenture", cls: "" },
    { text: "Salesforce", cls: "" }, { text: "PwC", cls: "sm" }, { text: "IBM", cls: "lg" },
    { text: "EY", cls: "sm" },
  ];

  return (
    <div className="logo-bar">
      <div className="logo-bar-label">JOIN PROFESSIONALS FROM</div>
      <div className="logo-track">
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className={`logo-item ${logo.cls}`}>{logo.text}</span>
        ))}
      </div>
    </div>
  );
}
