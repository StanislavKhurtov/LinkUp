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
      clipRule={'evenodd'}
      d={
        'M8.00247 19.5H4.99118C4.44956 19.5 4 19.0543 4 18.5046V9.5H6V15.9966C6 16.2671 6.2232 16.5 6.49852 16.5H7V6.50684C7 5.95077 7.45576 5.5 8.00247 5.5H17.9975C18.5512 5.5 19 5.94994 19 6.50684V18.0018C19 18.8292 18.3204 19.5 17.5045 19.5H8.00247ZM10 12.0095V8.99048C10 8.71959 10.2279 8.5 10.491 8.5H15.509C15.7802 8.5 16 8.71506 16 8.99048V12.0095C16 12.2804 15.7721 12.5 15.509 12.5H10.491C10.2198 12.5 10 12.2849 10 12.0095ZM10 14C10 14.2681 10.2198 14.5 10.491 14.5H15.509C15.7721 14.5 16 14.2761 16 14C16 13.7319 15.7802 13.5 15.509 13.5H10.491C10.2279 13.5 10 13.7239 10 14ZM10.4905 16.5C10.2196 16.5 10 16.2681 10 16C10 15.7239 10.2151 15.5 10.4905 15.5H13.5095C13.7804 15.5 14 15.7319 14 16C14 16.2761 13.7849 16.5 13.5095 16.5H10.4905Z'
      }
      fill={'currentColor'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
