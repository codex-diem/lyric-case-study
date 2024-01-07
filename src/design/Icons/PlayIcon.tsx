import { rem } from '@mantine/core';

interface PlayIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PlayIcon = ({ size, style, ...others }: PlayIconProps) => {
  return (

    <svg  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: rem(size), height: rem(size), ...style }}
    {...others}>
<path d="M4 2L13.3333 8L4 14V2Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   strokeWidth="1.5"
    //   viewBox="0 0 24 24"
    //   style={{ width: rem(size), height: rem(size), ...style }}
    //   {...others}
    // >
    //   <path stroke="none" d="M0 0h24v24H0z" />
    //   <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
    //   <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    // </svg>
  );
}

<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2L13.3333 8L4 14V2Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
