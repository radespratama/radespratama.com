export function DevLogo({ classNames }) {
  return (
    <svg
      className={classNames}
      viewBox="0 0 292 246"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 19.4415C156.913 155.961 20.6765 332.299 171.104 155.961C291.447 14.8909 117.177 6.16876 15 19.4415Z"
        fill="none"
      />
      <path
        d="M171.104 155.961C20.6765 332.299 156.913 155.961 15 19.4415C117.177 6.16876 291.447 14.8909 171.104 155.961ZM171.104 155.961L276.12 229.909"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GithubIcon({ classNames }) {
  return (
    <svg
      className={classNames}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function CircleIcon({ stroke }) {
  return (
    <svg
      width={14}
      height={14}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={stroke}
        strokeWidth={4}
        className="stroke-gray-600 dark:stroke-gray-700"
      />
    </svg>
  );
}
