import React from 'react'

const SvgComponent = props => (
  <svg width={36} height={23} {...props}>
    <defs>
      <linearGradient
        x1="-60.623%"
        y1="29.041%"
        x2="132.303%"
        y2="59.9%"
        id="prefix2__a"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.454}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="38.048%"
        y1="0%"
        x2="69.673%"
        y2="100%"
        id="prefix2__d"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.454}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <filter
        x="-1.4%"
        y="-3.2%"
        width="102.9%"
        height="106.5%"
        filterUnits="objectBoundingBox"
        id="prefix2__c"
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
        x="-4.5%"
        y="-2.2%"
        width="109.1%"
        height="104.4%"
        filterUnits="objectBoundingBox"
        id="prefix2__f"
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
      <path
        d="M24.633 27.65l-6.133 4.6 6.133 4.6a1.75 1.75 0 01-2.1 2.8l-6.933-5.2a2.75 2.75 0 010-4.4l6.933-5.2a1.75 1.75 0 112.1 2.8zm14.567 0a1.75 1.75 0 112.1-2.8l6.933 5.2a2.75 2.75 0 010 4.4l-6.933 5.2a1.75 1.75 0 01-2.1-2.8l6.133-4.6-6.133-4.6z"
        id="prefix2__b"
      />
      <path
        d="M33.456 22.108l-7.5 19a1.75 1.75 0 003.255 1.285l7.5-19a1.75 1.75 0 10-3.255-1.285z"
        id="prefix2__e"
      />
    </defs>
    <g fillRule="nonzero" fill="none">
      <g transform="translate(-14 -21)">
        <use fill="url(#prefix2__a)" xlinkHref="#prefix2__b" />
        <use fill="#000" filter="url(#prefix2__c)" xlinkHref="#prefix2__b" />
      </g>
      <g opacity={0.648} transform="translate(-14 -21)">
        <use fill="url(#prefix2__d)" xlinkHref="#prefix2__e" />
        <use fill="#000" filter="url(#prefix2__f)" xlinkHref="#prefix2__e" />
      </g>
    </g>
  </svg>
)

export default SvgComponent