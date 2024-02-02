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
        'M9 4.5H9.45289L9.76645 4.81355L11.1764 6.22355L11.5 6.54711V7V9V9.45289L11.1864 9.76645L9.77645 11.1764L9.45289 11.5H9H7H6.54711L6.22355 11.1764L4.81355 9.76645L4.5 9.45289V9V7V6.54711L4.81355 6.23355L6.23355 4.81355L6.54711 4.5H7H9ZM9.76645 4.10645L9.5 4.37289V4V3.77078C9.64454 3.82348 9.78564 3.88338 9.92284 3.95005L9.76645 4.10645ZM11.4976 3.78948L12.24 3.04711L12.9429 3.75L12.1978 4.49508C11.9861 4.23939 11.7516 4.00316 11.4976 3.78948ZM12.0294 6.07771C12.0943 6.21482 12.1525 6.35572 12.2036 6.5H12H11.6071L11.8836 6.22355L12.0294 6.07771ZM12 9.5H12.2036C12.1542 9.63951 12.0982 9.77588 12.0358 9.9087L11.8936 9.76645L11.6271 9.5H12ZM13.4375 7.5H14.5V8.5H13.4375C13.4524 8.33531 13.46 8.16854 13.46 8C13.46 7.83146 13.4524 7.66469 13.4375 7.5ZM9.77645 11.8836L9.93628 12.0434C9.79486 12.1127 9.64927 12.1748 9.5 12.2292V12V11.6071L9.77645 11.8836ZM12.2069 11.494L12.9529 12.24L12.25 12.9429L11.5085 12.2014C11.7619 11.987 11.9958 11.7502 12.2069 11.494ZM6.5 12V12.2575C6.34174 12.2032 6.18746 12.1403 6.03771 12.0694L6.22355 11.8836L6.5 11.6071V12ZM8.5 13.4738V14.5H7.5V13.481C7.65168 13.4936 7.80509 13.5 7.96 13.5C8.1422 13.5 8.32233 13.4911 8.5 13.4738ZM4.46 10.8271L5.13461 11.5017C4.88663 11.3013 4.66034 11.0752 4.45982 10.8273L4.46 10.8271ZM3.74948 11.5376C3.96316 11.7916 4.19939 12.0261 4.45508 12.2378L3.75 12.9429L3.04711 12.24L3.74948 11.5376ZM3.91005 9.96284C3.83724 9.81301 3.77251 9.65854 3.71641 9.5H4H4.37289L4.10645 9.76645L3.91005 9.96284ZM3.5 8.5H3.48751C3.46933 8.33582 3.46 8.16899 3.46 8C3.46 7.83101 3.46933 7.66418 3.48751 7.5H3.5V8.5ZM4 6.5H3.71641C3.77251 6.34146 3.83724 6.18699 3.91005 6.03716L4.10645 6.23355L4.37289 6.5H4ZM2.48245 8.5H1.5V7.5H2.48245C2.46759 7.66469 2.46 7.83146 2.46 8C2.46 8.16854 2.46759 8.33531 2.48245 8.5ZM4.46 5.17289L4.45982 5.17271C4.66034 4.92484 4.88663 4.69867 5.13461 4.49828L4.46 5.17289ZM6.23188 4.10478L6.05013 3.92474C6.19599 3.85621 6.34612 3.79528 6.5 3.74247V4V4.37038L6.23188 4.10478ZM4.46054 3.75766C4.20275 3.97059 3.96468 4.20655 3.74948 4.46237L3.04711 3.76L3.75166 3.05544L4.46054 3.75766ZM8.5 2.52621C8.32233 2.50887 8.1422 2.5 7.96 2.5C7.80509 2.5 7.65168 2.50641 7.5 2.51899V1.5H8.5V2.52621ZM4.95 8C4.95 9.66614 6.29386 11.01 7.96 11.01C9.61614 11.01 10.97 9.65614 10.97 8C10.97 6.34516 9.62744 4.99 7.96 4.99C6.29386 4.99 4.95 6.33386 4.95 8Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)