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
        'M20 12.5C20 10.3945 18.4384 8.59303 16.2276 7.85596C17.0288 8.88457 17.5 10.1324 17.5 11.5C17.5 14.2047 15.6571 16.4412 13.0629 17.4394C13.3682 17.4793 13.6812 17.5 14 17.5C14.384 17.5 14.7597 17.4699 15.1236 17.4125C15.5869 18.0961 16.4302 18.5161 18.0132 18.5161C17.5754 17.8699 17.2726 17.2218 17.1869 16.7372C18.8768 15.8527 20 14.2857 20 12.5Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M5.98 17.5C7.56784 17.5 8.413 17.0858 8.8756 16.4124C9.23982 16.4699 9.61569 16.5 10 16.5C13.3137 16.5 16 14.2614 16 11.5C16 8.73858 13.3137 6.5 10 6.5C6.68629 6.5 4 8.73858 4 11.5C4 13.2848 5.12223 14.8512 6.81076 15.7359C6.73166 16.2122 6.42585 16.8571 5.98 17.5Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
