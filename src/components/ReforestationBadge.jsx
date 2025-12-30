export default function ReforestationBadge() {
  return (
    <div className="absolute -bottom-12 right-6 w-24 h-24 animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          />
        </defs>
        <circle cx="50" cy="50" r="48" fill="white" />
        <text fontSize="11" fontWeight="bold" fill="black">
          <textPath href="#circlePath" startOffset="0%">
            REFORESTATION 100% OF PROFITS FUND
          </textPath>
        </text>
        <text
          x="50"
          y="50"
          fontSize="30"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          ✋
        </text>
      </svg>
    </div>
  );
}
