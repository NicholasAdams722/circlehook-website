import type { SVGProps } from "react";

export function Monogram({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 84"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle
        cx="32"
        cy="34"
        r="24"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M32 9 L33.4 18 L42.5 19.5 L33.4 21 L32 30 L30.6 21 L21.5 19.5 L30.6 18 Z"
        fill="currentColor"
      />
      <text
        x="20"
        y="42"
        textAnchor="middle"
        fontFamily="ui-serif, Georgia, 'Times New Roman', serif"
        fontSize="18"
        fontWeight="500"
        fill="currentColor"
      >
        C
      </text>
      <text
        x="44"
        y="42"
        textAnchor="middle"
        fontFamily="ui-serif, Georgia, 'Times New Roman', serif"
        fontSize="18"
        fontWeight="500"
        fill="currentColor"
      >
        H
      </text>
      <path
        d="M22 64 Q24 60 27 62 Q30 64 32 62 Q34 60 37 62 Q40 64 42 60"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="22" cy="64" r="1.4" fill="currentColor" />
      <circle cx="42" cy="60" r="1.4" fill="currentColor" />
    </svg>
  );
}
