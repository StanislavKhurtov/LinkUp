import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'25'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M11.3445 5.79787C11.6458 5.40071 12.2485 5.40071 12.6502 5.79787L19.781 12.7482C20.1828 13.0461 19.9819 13.344 19.5802 13.4433L18 13.5V18.5C18 19.5 18 19.5 17 19.5H14.4954C14.2158 19.5 14 19.2802 14 19.009V15.4979C14 14.3983 13.1046 13.5 12 13.5C10.8877 13.5 10 14.3945 10 15.4979V19.009C10 19.2721 9.77821 19.5 9.50461 19.5H7C6 19.5 6 19.5 6 18.5V13.5L4.51502 13.4433C4.01284 13.4433 3.81198 13.1454 4.21371 12.7482L11.3445 5.79787Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
