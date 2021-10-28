import React from "react"

const SvgComponent = (props) => (
  <svg width={32} height={24} {...props}>
    <defs>
      <filter
        x="-1.6%"
        y="-12.5%"
        width="103.1%"
        height="125%"
        filterUnits="objectBoundingBox"
        id="preprefix__c"
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
        x="-1.6%"
        y="-12.5%"
        width="103.1%"
        height="125%"
        filterUnits="objectBoundingBox"
        id="preprefix__f"
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
        x="-1.6%"
        y="-12.5%"
        width="103.1%"
        height="125%"
        filterUnits="objectBoundingBox"
        id="preprefix__h"
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
        d="M17.5 20h3a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5zm10 0h19a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-19a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
        id="preprefix__b"
      />
      <path
        d="M17.5 30h3a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5zm10 0h19a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-19a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
        id="preprefix__e"
      />
      <path
        d="M17.5 40h3a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5zm10 0h19a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-19a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
        id="preprefix__g"
      />
      <linearGradient
        x1="0%"
        y1="49.219%"
        x2="127.368%"
        y2="50.781%"
        id="preprefix__a"
      >
        <stop stopColor="var(--primary-color)" stopOpacity={0.55} offset="0%" />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="0%"
        y1="49.219%"
        x2="132.303%"
        y2="50.781%"
        id="preprefix__d"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.454}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
    </defs>
    <g fillRule="nonzero" fill="none">
      <g transform="translate(-16 -20)">
        <use fill="url(#preprefix__a)" xlinkHref="#preprefix__b" />
        <use
          fill="#000"
          filter="url(#preprefix__c)"
          xlinkHref="#preprefix__b"
        />
      </g>
      <g opacity={0.8} transform="translate(-16 -20)">
        <use fill="url(#preprefix__d)" xlinkHref="#preprefix__e" />
        <use
          fill="#000"
          filter="url(#preprefix__f)"
          xlinkHref="#preprefix__e"
        />
      </g>
      <g opacity={0.6} transform="translate(-16 -20)">
        <use fill="url(#preprefix__d)" xlinkHref="#preprefix__g" />
        <use
          fill="#000"
          filter="url(#preprefix__h)"
          xlinkHref="#preprefix__g"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent
