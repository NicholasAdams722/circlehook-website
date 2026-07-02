import type { SVGProps } from "react";

export function CompassStar({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M32 6 L34 30 L58 32 L34 34 L32 58 L30 34 L6 32 L30 30 Z"
        fill="currentColor"
      />
      <path
        d="M32 14 L41 23 L50 32 L41 41 L32 50 L23 41 L14 32 L23 23 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
        fill="none"
      />
    </svg>
  );
}
