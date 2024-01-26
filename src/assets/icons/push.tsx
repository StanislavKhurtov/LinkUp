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
        'M4.7802 15.8556C4.0802 17.7556 3.6802 19.0556 3.4802 19.7556C2.8802 22.1556 2.4802 22.6556 4.5802 21.5556C6.6802 20.4556 16.5802 14.8556 18.8802 13.6556C21.7802 12.0556 21.7802 12.1556 18.6802 10.4556C16.3802 9.05555 6.4802 3.65556 4.6802 2.55556C2.8802 1.45556 2.9802 1.95556 3.4802 4.35556C3.6802 5.15556 4.0802 6.45555 4.7802 8.25556C5.2802 9.55556 6.3802 10.5556 7.7802 10.7556L13.5802 11.8556C13.6802 11.8556 13.6802 11.9556 13.6802 11.9556C13.6802 11.9556 13.6802 12.0556 13.5802 12.0556L7.7802 13.1556C6.4802 13.5556 5.2802 14.4556 4.7802 15.8556Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
