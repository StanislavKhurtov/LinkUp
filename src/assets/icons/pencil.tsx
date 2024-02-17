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
        'M5 15.8633L4 19.9633L8.1 18.9633L17.3 9.76333L14.2 6.66333L5 15.8633ZM5.5 18.9633L5.1 18.4633L5.5 16.4633L7.5 18.4633L5.5 18.9633ZM14.9 8.36333L6.8 16.3633L6.2 15.7633L14.3 7.76333L14.9 8.36333Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M19.3 4.66333C18.2 3.56333 16.7 4.16333 16.7 4.16333L15.2 5.66333L18.3 8.76333L19.8 7.26333C19.8 7.16333 20.4 5.76333 19.3 4.66333ZM17.4 5.56333L16.9 5.06333C17.5 4.46333 18 4.96333 18 4.96333L17.4 5.56333Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
