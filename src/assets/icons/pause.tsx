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
        'M8.84806 6.66666C8.47987 6.66666 8.1814 6.96513 8.1814 7.33332V24.6667C8.1814 25.0348 8.47987 25.3333 8.84806 25.3333H12.8481C13.2163 25.3333 13.5147 25.0348 13.5147 24.6667V7.33332C13.5147 6.96513 13.2163 6.66666 12.8481 6.66666H8.84806Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M19.5147 6.66666C19.1465 6.66666 18.8481 6.96513 18.8481 7.33332V24.6667C18.8481 25.0348 19.1465 25.3333 19.5147 25.3333H23.5147C23.8829 25.3333 24.1814 25.0348 24.1814 24.6667V7.33332C24.1814 6.96513 23.8829 6.66666 23.5147 6.66666H19.5147Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
