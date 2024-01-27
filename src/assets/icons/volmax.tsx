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
        'M16.8 6.40002L16.3 7.40002C17.4 8.80002 18 10.6 18 12.5C18 14.2 17.5 15.7 16.7 17.1L17.4 17.9C18.5 16.4 19.1 14.5 19.1 12.5C19 10.2 18.2 8.10002 16.8 6.40002Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M15.8 8.40002L15.3 9.50002C15.8 10.4 16.1 11.4 16.1 12.5C16.1 13.5 15.8 14.5 15.4 15.4L16.1 16.3C16.7 15.2 17.1 13.9 17.1 12.6C17 11 16.6 9.60002 15.8 8.40002Z'
      }
      fill={'currentColor'}
    />
    <path d={'M9 9H5V15H9L14 19V5L9 9Z'} fill={'currentColor'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
