import { VariantColorsResolver,  defaultVariantColorsResolver, parseThemeColor,  } from "@mantine/core";

const buttonVariantColorResolver: VariantColorsResolver = (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    const parsedColor = parseThemeColor({
      color: input.color || input.theme.primaryColor,
      theme: input.theme,
    });


  
    // Override some properties for variant


    if (input.variant === 'filled') {
        return {
          ...defaultResolvedColors,
          border: `1px solid var(--mantine-color-${parsedColor.color}-6)`,
          hover: `var(--mantine-color-${parsedColor.color}-7)`,
        };
      }



    if (input.variant === 'outline') {
      return {
        ...defaultResolvedColors,
        color: `var(--mantine-color-${parsedColor.color}-6)`,
        hoverColor: `var(--mantine-color-${parsedColor.color}-6)`,
        background: `var(--mantine-color-${parsedColor.color}-12`,
        hover: `var(--mantine-color-${parsedColor.color}-11`,
        
        
      };
    }

    if (input.variant === 'light') {
      return {
        ...defaultResolvedColors,
        color: `var(--mantine-color-${parsedColor.color}-6)`,
        hoverColor: `var(--mantine-color-${parsedColor.color}-6)`,
        background: `var(--mantine-color-${parsedColor.color}-12`,
        hover: `var(--mantine-color-${parsedColor.color}-11`,
        border: `1px solid var(--mantine-color-${parsedColor.color}-6)`
        
      };
    }

    if (input.variant === 'transparent') {
        return {
          ...defaultResolvedColors,
          color: `var(--mantine-color-${parsedColor.color}-6)`,
          hoverColor: `var(--mantine-color-${parsedColor.color}-6)`,
          
          
        };
      }

    //   if (input.variant === 'default') {
    //     return {
    //       ...defaultResolvedColors,
    //       color: 'var(--mantine-color-lyricBlue-6)',
    //       hoverColor: 'var(--mantine-color-lyricBlue-6)',
          
          
    //     };
    //   }


     
  
    // Completely override variant
    // if (input.variant === 'light') {
    //   return {
    //     background: rgba(parsedColor.value, 0.1),
    //     hover: rgba(parsedColor.value, 0.15),
    //     border: `${rem(1)} solid ${parsedColor.value}`,
    //     color: darken(parsedColor.value, 0.1),
    //   };
    // }
  
    // // Add new variants support
    // if (input.variant === 'danger') {
    //   return {
    //     background: 'var(--mantine-color-red-9)',
    //     hover: 'var(--mantine-color-red-8)',
    //     color: 'var(--mantine-color-white)',
    //     border: 'none',
    //   };
    // }
  
    return defaultResolvedColors;
  };

  export default buttonVariantColorResolver;