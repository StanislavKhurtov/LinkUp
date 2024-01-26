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
        'M18 17.6C18 16.2 17.4 13.5 12 13.5C6.6 13.5 6 16.1 6 17.6C6 18.3 6.36 18.5 7.8 18.5H16.32C17.76 18.5 18 18.3 18 17.6Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M9 9C9 11.3333 10.3431 12.5 12 12.5C13.6569 12.5 15 11.3333 15 9C15 6.66667 13.6569 5.5 12 5.5C10.3431 5.5 9 6.66667 9 9Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
