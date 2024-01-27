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
      d={
        'M20 11V7L18.9 8.1C17.6 5.6 15 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C14.4 20 16.6 18.9 18 17.2L16.5 15.9C15.4 17.2 13.8 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6C14.4 6 16.5 7.5 17.5 9.5L16 11H20Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
