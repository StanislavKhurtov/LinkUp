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
        'M12.3 6C7.9 6 4 8.6 4 11.6C4 13.6 5.1 15.3 7 16.3V16.4C6.9 17.7 6.1 18.1 6.1 18.1L4.3 19H6.3C8.8 19 10.6 17.9 11.4 17.1C11.7 17.1 11.9 17.1 12.2 17.1C16.5 17.1 20 14.6 20 11.5C20 8.4 16.6 6 12.3 6ZM12.2 16.1C11.9 16.1 11.5 16.1 11.3 16.1H11L10.8 16.3C10.3 16.8 9.2 17.7 7.5 18C7.8 17.5 8 16.9 8 16V15.7L7.7 15.6C5.9 14.7 5 13.3 5 11.6C5 9.2 8.5 7 12.3 7C16 7 19 9 19 11.6C19 14 15.9 16.1 12.2 16.1Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
