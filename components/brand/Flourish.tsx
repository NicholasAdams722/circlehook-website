import type { SVGProps } from "react";

export function Flourish({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 20"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M10 10 Q22 4 36 10 Q50 16 64 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M96 10 Q110 16 124 10 Q138 4 150 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 2 L81.3 8.7 L88 10 L81.3 11.3 L80 18 L78.7 11.3 L72 10 L78.7 8.7 Z"
        fill="currentColor"
      />
      <circle cx="10" cy="10" r="1.4" fill="currentColor" />
      <circle cx="150" cy="10" r="1.4" fill="currentColor" />
    </svg>
  );
}
