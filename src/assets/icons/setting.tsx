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
        'M14.3 12.2L13.4 13.1L14.3 14L13.1 15.2L17.4 19.5C18 20.1 18.9 20.1 19.5 19.5C20.1 18.9 20.1 18 19.5 17.4L14.3 12.2ZM18.2 19C17.8 19 17.4 18.7 17.4 18.2C17.4 17.8 17.7 17.4 18.2 17.4C18.7 17.4 19 17.7 19 18.2C19 18.7 18.7 19 18.2 19Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M7.6 12L8.5 11.4L10 9.7L10.9 10.6L11.8 9.7L11.7 9.6C11.9 9.1 12 8.6 12 8C12 5.8 10.2 4 8 4C7.4 4 6.9 4.1 6.4 4.3L9.3 7.2L7.2 9.3L4.3 6.4C4.1 6.9 4 7.4 4 8C4 10.1 5.6 11.7 7.6 12Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M12 14.8L12.9 14L12 13.1L17.7 7.39998L18.9 6.99998L20 4.79998L19.3 4.09998L17 5.09998L16.5 6.29998L10.9 12L10 11.1L9.2 12C9.2 12 10 12.6 9.1 13.5C8.6 14 7.8 13.4 6.3 14.9C5.8 15.4 4.2 17 4.2 17C4.2 17 3.6 18 4.8 19.2C6 20.4 7 19.8 7 19.8C7 19.8 8.6 18.2 9.1 17.7C10.5 16.3 10 15.4 10.4 15C11.3 14.1 12 14.8 12 14.8ZM8.9 14.4L9.6 15.1L5.8 18.9L5.1 18.2L8.9 14.4Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
