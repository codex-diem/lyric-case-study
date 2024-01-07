

// import { rem } from '@mantine/core';

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
  }
  
  export const ChevronDownIcon = ({ size, style, ...others }: IconProps) => {
    return (
  
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
        <path opacity="0.6" d="M3.5 5.25L7 8.75L10.5 5.25"  strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
  
    )
  
  }
  