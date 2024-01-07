

// import { rem } from '@mantine/core';

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number | string;
  }
  
  export const ChevronUpIcon = ({ size, style, ...others }: IconProps) => {
    return (
  
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...others}>
<path opacity="0.6" d="M10.5 8.75L7 5.25L3.5 8.75" stroke="#292F3B" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  
    )
  
  }
  