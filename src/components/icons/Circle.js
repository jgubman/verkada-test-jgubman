export default function HalfCircle({ fillColor = "#FF9900" }) {
  return (
    <svg
      width="164"
      height="103"
      viewBox="0 0 164 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M82 -61C36.7 -61 0 -24.3 0 21C0 66.3 36.7 103 82 103C127.3 103 164 66.3 164 21C164.1 -24.3 127.3 -61 82 -61ZM82 71.2C54.3 71.2 31.8 48.7 31.8 21C31.8 -6.7 54.3 -29.2 82 -29.2C109.7 -29.2 132.2 -6.7 132.2 21C132.2 48.8 109.8 71.2 82 71.2Z"
        fill={fillColor}
      />
    </svg>
  );
}
