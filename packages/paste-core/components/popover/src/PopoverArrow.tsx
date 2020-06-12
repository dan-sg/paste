import * as React from 'react';
import {
  NonModalDialogArrowPrimitive,
  NonModalDialogArrowPrimitiveProps,
} from '@twilio-paste/non-modal-dialog-primitive';
import {useTheme} from '@twilio-paste/theme';

export type PopoverArrowProps = NonModalDialogArrowPrimitiveProps;

const PopoverArrow = React.forwardRef<HTMLDivElement, PopoverArrowProps>((props, ref) => {
  const theme = useTheme();

  return (
    <NonModalDialogArrowPrimitive
      {...props}
      size={theme.fontSizes.fontSize70}
      stroke={theme.borderColors.colorBorderLight}
      fill={theme.backgroundColors.colorBackgroundBody}
      ref={ref}
    />
  );
});
PopoverArrow.displayName = 'PopoverArrow';
export {PopoverArrow};
