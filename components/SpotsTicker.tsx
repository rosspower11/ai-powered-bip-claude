export default function SpotsTicker({ style }: { style?: React.CSSProperties }) {
  const tickerUnit = (
    <>
      <div className="spots-unit">
        <div className="spots-dot"></div>
        <span className="spots-label">COHORT 1</span>
        <span className="spots-label">LIVE NOW</span>
      </div>
      <div className="spots-unit">
        <div className="spots-dot"></div>
        <span className="spots-label">COHORT 3.0 DOORS OPEN</span>
        <span className="spots-label">23 APRIL</span>
      </div>
      <div className="spots-unit">
        <div className="spots-dot"></div>
        <span className="spots-label">COHORT 3.0 STARTS</span>
        <span className="spots-label">THURSDAY 7 MAY</span>
      </div>
      <div className="spots-unit">
        <div className="spots-dot"></div>
        <span className="spots-label">THURSDAYS 10:30&ndash;12:00 BST</span>
      </div>
    </>
  );

  return (
    <div className="spots-ticker" style={style}>
      <div className="spots-scroll">
        {tickerUnit}
        {tickerUnit}
      </div>
    </div>
  );
}
