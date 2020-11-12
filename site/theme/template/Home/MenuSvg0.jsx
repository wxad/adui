import React from 'react'

const SvgComponent = props => (
  <svg width={34} height={32} {...props}>
    <defs>
      <linearGradient
        x1="-19.165%"
        y1="-42.442%"
        x2="100%"
        y2="97.736%"
        id="prefixmenu__a"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.454}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <ellipse id="prefixmenu__b" cx={16.375} cy={16} rx={16.375} ry={16} />
      <filter
        x="-1.5%"
        y="-1.6%"
        width="103.1%"
        height="103.1%"
        filterUnits="objectBoundingBox"
        id="prefixmenu__c"
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
      <g fillRule="nonzero" transform="translate(.563)">
        <use fill="url(#prefixmenu__a)" xlinkHref="#prefixmenu__b" />
        <use fill="#000" filter="url(#prefixmenu__c)" xlinkHref="#prefixmenu__b" />
      </g>
      <path d="M7.727 7h18v18h-18z" />
      <path
        d="M15.727 21.25V20h-5a1 1 0 01-1-1v-8.5a1 1 0 011-1h12a1 1 0 011 1V19a1 1 0 01-1 1h-5v1.25h1.75a.25.25 0 01.25.25v.75a.25.25 0 01-.25.25h-5.5a.25.25 0 01-.25-.25v-.75a.25.25 0 01.25-.25h1.75zM11.227 11v7h11v-7h-11z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default SvgComponent
