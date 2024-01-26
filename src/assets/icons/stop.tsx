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
        'M8.84806 8C8.47987 8 8.1814 8.29848 8.1814 8.66667V23.3333C8.1814 23.7015 8.47987 24 8.84806 24H23.5147C23.8829 24 24.1814 23.7015 24.1814 23.3333V8.66667C24.1814 8.29848 23.8829 8 23.5147 8H8.84806Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
