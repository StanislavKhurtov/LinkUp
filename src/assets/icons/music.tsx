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
        'M16.9381 8.5V14.3223C16.5386 14.3183 16.1122 14.4 15.6957 14.5768C14.4247 15.1163 13.7268 16.3367 14.1368 17.3026C14.5468 18.2686 15.9095 18.6142 17.1805 18.0748C18.1815 17.6498 18.827 16.8026 18.8558 15.9899C18.9082 16.007 18.9381 16.0116 18.9381 16V4.5L8.94388 7.45618V16.5C8.94388 16.5207 8.94474 16.5413 8.94642 16.5616C8.57507 16.551 8.17959 16.6126 7.78823 16.7551C6.49079 17.2273 5.72994 18.4094 6.08884 19.3955C6.44773 20.3816 7.79046 20.7981 9.08791 20.3259C10.2587 19.8998 10.9925 18.8955 10.8609 17.979C10.9102 17.993 10.9381 18 10.9381 18V10.5L16.9381 8.5Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
