import React from 'react'

const SvgComponent = props => (
  <svg width={34} height={32} {...props}>
    <defs>
      <linearGradient
        x1="-19.165%"
        y1="-42.442%"
        x2="100%"
        y2="97.736%"
        id="prefixmenu2__a"
      >
        <stop
          stopColor="var(--primary-color)"
          stopOpacity={0.454}
          offset="0%"
        />
        <stop stopColor="var(--primary-color)" offset="100%" />
      </linearGradient>
      <ellipse id="prefixmenu2__b" cx={16.375} cy={16} rx={16.375} ry={16} />
      <filter
        x="-1.5%"
        y="-1.6%"
        width="103.1%"
        height="103.1%"
        filterUnits="objectBoundingBox"
        id="prefixmenu2__c"
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
        <use fill="url(#prefixmenu2__a)" xlinkHref="#prefixmenu2__b" />
        <use fill="#000" filter="url(#prefixmenu2__c)" xlinkHref="#prefixmenu2__b" />
      </g>
      <path d="M7.797 7h18v18h-18z" />
      <path
        d="M16.797 20.25l-3.512 1.846a.5.5 0 01-.725-.527l.67-3.91-2.84-2.77a.5.5 0 01.277-.852l3.926-.57 1.756-3.559a.5.5 0 01.896 0l1.756 3.558 3.926.57a.5.5 0 01.277.854l-2.84 2.769.67 3.91a.5.5 0 01-.725.527l-3.512-1.846z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default SvgComponent
