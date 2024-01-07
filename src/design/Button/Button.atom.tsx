
import {Button as MantineButton, ButtonProps as MantineButtonProps} from "@mantine/core"
import { useMantineTheme } from '@mantine/core';
import classes from "./Button.module.css"

interface ButtonProps extends MantineButtonProps {

  type?: 'primary' | 'secondary' | 'tertiary' | 'link' ;
  
  size?: 'md' | 'sm' | 'xs';

  color?: 'lyricBlue' | 'secondary';

  label: string;
  disabled?: boolean;
  elevated?:boolean
  
  /**
   * Optional click handler
   */
  onClick?: () => void ;
}


export const Button = ({
  size = 'sm',
  type = "primary",
  disabled = false,
  elevated = true,
  color = 'lyricBlue',
  label,
  ...props
}: ButtonProps) => {

  const theme = useMantineTheme();


  const getVariant = (type: ButtonProps["type"]) => {



    switch (type) {

      case "primary":
      return "filled";

      case "secondary":
      return "outline";

      case "tertiary":
      return "default";

      case "link":
      return "transparent";

      default:
      return "filled";
    }
  }

  

  return (
    <MantineButton
      variant={getVariant(type)}
      size={size}
      color={color}
      disabled={disabled}
      classNames={{root: color === "lyricBlue" ? classes.lyricBlueRoot: classes.secondaryRoot}}
      style={{borderRadius: type !== "link" ? theme.radius[size] : 0, boxShadow: elevated && type !=="link" ? "inset 1px -3px 12px 2px #0000000F,1px 2px 12px 0px #0000001A" : "none"}}
      {...props}
    >
      {label}
    </MantineButton>
  );
};


