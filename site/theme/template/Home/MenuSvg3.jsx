import React from "react"

const SvgComponent = (props) => (
  <svg width={34} height={32} {...props}>
    <defs>
      <linearGradient
        x1="-19.165%"
        y1="-42.442%"
        x2="100%"
        y2="97.736%"
        id="prefixmenu3__a"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.454}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <ellipse id="prefixmenu3__b" cx={16.375} cy={16} rx={16.375} ry={16} />
      <filter
        x="-1.5%"
        y="-1.6%"
        width="103.1%"
        height="103.1%"
        filterUnits="objectBoundingBox"
        id="prefixmenu3__c"
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
        <use fill="url(#prefixmenu3__a)" xlinkHref="#prefixmenu3__b" />
        <use
          fill="#000"
          filter="url(#prefixmenu3__c)"
          xlinkHref="#prefixmenu3__b"
        />
      </g>
      <path d="M7.797 7h18v18h-18z" />
      <path
        d="M11.297 21.5h11v-8h-1.75a.25.25 0 01-.25-.25v-1a.25.25 0 01.25-.25h2.75a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h2.75a.25.25 0 01.25.25v1a.25.25 0 01-.25.25h-1.75v8zm8.437-6.108l-2.627 3.305c-.172.217-.451.217-.623 0l-2.627-3.305c-.172-.216-.085-.392.194-.392h1.994V9.343c0-.15.111-.253.248-.253h1.005c.13 0 .247.113.247.253V15h1.994c.276 0 .367.176.195.392z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default SvgComponent
