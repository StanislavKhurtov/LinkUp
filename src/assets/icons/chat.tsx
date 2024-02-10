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
        'M18 18.2C18 17.6 20 16.4 20 15.1C20 13.6 18.6 12.4 16.9 11.9C17.6 11.1 18 10.2 18 9.1C18 6.3 15.1 4 11.4 4C7.9 4 4 6.1 4 9.1C4 11.2 5.6 12.7 6.3 13.3C6.2 14.5 5.7 15 5.7 15L4.5 16H6C7.6 16 8.9 15.5 9.7 14.9C9.7 15 9.7 15 9.7 15.1C9.7 17.1 11.9 18.7 14.7 18.7C14.9 18.7 15.1 18.7 15.3 18.7C15.7 19.2 17 20.1 18.7 20.1C18.8 20 18 19.6 18 18.2ZM11.4 5C14.5 5 17 6.9 17 9.1C17 11.3 14.4 13.2 11.2 13.2C11 13.2 10.6 13.2 10.4 13.2H10.1L10 13.4C9.7 13.8 8.5 14.6 6.9 14.9C7 14.5 7 13.9 7 13.1V12.8C6 12 4.9 10.6 4.9 9.2C4.9 7 8.1 5 11.4 5Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
