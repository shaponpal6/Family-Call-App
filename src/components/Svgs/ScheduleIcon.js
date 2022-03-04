import * as React from 'react'

const SvgScheduleIcon = (props) => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 5h27v24H2V5Z"
      stroke="#A0BFF5"
      strokeWidth={2.11}
      strokeLinejoin="round"
    />
    <path
      d="M29 11H2M8 5V2M23 5V2"
      stroke="#A0BFF5"
      strokeWidth={2.11}
      strokeLinecap="round"
    />
    <path fill="#A0BFF5" d="M20 15.5h6v6h-6z" />
  </svg>
)

export default SvgScheduleIcon
