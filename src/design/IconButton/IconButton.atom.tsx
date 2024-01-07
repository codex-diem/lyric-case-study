
import {ActionIcon, ActionIconProps} from "@mantine/core"
import { useMantineTheme } from '@mantine/core';
import { ReactNode } from 'react';
import classes from "./IconButton.module.css"



interface IconButtonProps extends ActionIconProps {
 
  type?: 'primary' | 'secondary' | 'tertiary' ;

  size?: 'md' | 'sm' | 'xs';

  disabled?: boolean;
  elevated?: boolean;
  color?: 'lyricBlue' | 'secondary';
 
  children: ReactNode;
 
  onClick?: () => void;
}


export const IconButton = ({
  size = 'md',
  type = "primary",
  children,
  color = 'lyricBlue',
  disabled = false,
  elevated = true,
  ...props
}: IconButtonProps) => {

  const theme = useMantineTheme();


  const getVariant = (type: IconButtonProps["type"]) => {



    switch (type) {

      case "primary":
      return "filled";

      case "secondary":
      return "outline";

      case "tertiary":
      return "default";

      default:
      return "filled";

    }

  
  }

  return (
    <ActionIcon
      variant={getVariant(type)}
      disabled={disabled}
      size={size}
      color={color}
      classNames={{root: color === "lyricBlue" ? classes.lyricBlueRoot: classes.secondaryRoot}}
      style={{borderRadius: theme.radius[size], boxShadow: elevated  ? "inset 1px -3px 12px 2px #0000000F,1px 2px 12px 0px #0000001A" : "none" }}
      {...props}
    >
      {children}
    </ActionIcon>
  );
};


