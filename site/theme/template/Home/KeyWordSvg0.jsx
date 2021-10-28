import React from "react"

const SvgComponent = (props) => (
  <svg width={39} height={36} {...props}>
    <defs>
      <linearGradient
        x1="24.077%"
        y1="11.959%"
        x2="100%"
        y2="88.041%"
        id="prefix__a"
      >
        <stop stopColor="var(--primary-color)" stopOpacity={0.55} offset="0%" />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="4.08%"
        y1="0%"
        x2="95.92%"
        y2="113.81%"
        id="prefix__d"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.407}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <filter
        x="-1.8%"
        y="-2.1%"
        width="103.7%"
        height="104.2%"
        filterUnits="objectBoundingBox"
        id="prefix__c"
      >
        <feMorphology radius={1} in="SourceAlpha" result="shadowSpreadInner1" />
        <feOffset in="shadowSpreadInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          in="shadowInnerInner1"
        />
      </filter>
      <filter
        x="-2.2%"
        y="-2.1%"
        width="104.3%"
        height="104.2%"
        filterUnits="objectBoundingBox"
        id="prefix__f"
      >
        <feMorphology radius={1} in="SourceAlpha" result="shadowSpreadInner1" />
        <feOffset in="shadowSpreadInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2={-1}
          k3={1}
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          in="shadowInnerInner1"
        />
      </filter>
      <path
        d="M13.436 31.259A3.75 3.75 0 0016.614 37h19.894a3.75 3.75 0 003.234-5.648l-9.62-16.394a3.75 3.75 0 00-6.411-.093L13.436 31.259zM26.762 16.64a.25.25 0 01.342.09l9.62 16.393a.25.25 0 01-.216.377H16.614a.25.25 0 01-.212-.383l10.274-16.394a.25.25 0 01.086-.083z"
        id="prefix__b"
      />
      <path
        d="M37.786 25H39.5C45.851 25 51 30.149 51 36.5v1C51 43.851 45.851 49 39.5 49H32a4 4 0 01-4-4V29a4 4 0 012.303-3.623l1.822 3.123H32a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h7.5a8 8 0 008-8v-1a8 8 0 00-7.452-7.982L37.786 25z"
        id="prefix__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero" transform="translate(-12 -13)">
        <use fill="url(#prefix__a)" xlinkHref="#prefix__b" />
        <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__b" />
      </g>
      <path fill="#FFF" d="M14.5 19H21v7h-6.5z" />
      <g opacity={0.6} fillRule="nonzero" transform="translate(-12 -13)">
        <use fill="url(#prefix__d)" xlinkHref="#prefix__e" />
        <use fill="#000" filter="url(#prefix__f)" xlinkHref="#prefix__e" />
      </g>
    </g>
  </svg>
)

export default SvgComponent
