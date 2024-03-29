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
    <path d={'M8 9H4V15H8L13 19V5L8 9Z'} fill={'currentColor'} />
    <path
      d={
        'M19.9 9.60002L19.1 8.90002L16.8 11.3L14.4 8.90002L13.6 9.60002L16 12L13.6 14.4L14.4 15.1L16.8 12.7L19.1 15.1L19.9 14.4L17.5 12L19.9 9.60002Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
