import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M7 18.9991C7 19.5519 7.37229 19.7518 7.82481 19.4501L18.1752 12.5499C18.6307 12.2462 18.6277 11.7518 18.1752 11.4501L7.82481 4.54987C7.36928 4.24619 7 4.44463 7 5.00087V18.9991Z'
      }
      fill={'currentColor'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
