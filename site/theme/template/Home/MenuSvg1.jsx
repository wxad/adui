import React from 'react'

const SvgComponent = props => (
  <svg width={34} height={32} {...props}>
    <defs>
      <linearGradient
        x1="-19.165%"
        y1="-42.442%"
        x2="100%"
        y2="97.736%"
        id="prefixmenu1__a"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.454}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <ellipse id="prefixmenu1__b" cx={16.375} cy={16} rx={16.375} ry={16} />
      <filter
        x="-1.5%"
        y="-1.6%"
        width="103.1%"
        height="103.1%"
        filterUnits="objectBoundingBox"
        id="prefixmenu1__c"
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          in="shadowInnerInner1"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero" transform="translate(.633)">
        <use fill="url(#prefixmenu1__a)" xlinkHref="#prefixmenu1__b" />
        <use fill="#000" filter="url(#prefixmenu1__c)" xlinkHref="#prefixmenu1__b" />
      </g>
      <path d="M7.797 7h18v18h-18z" />
      <path
        d="M13.297 12h7a4 4 0 110 8h-7a4 4 0 110-8zm7 6.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default SvgComponent
