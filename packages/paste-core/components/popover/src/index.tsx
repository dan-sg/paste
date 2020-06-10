import * as React from 'react';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button, ButtonProps} from '@twilio-paste/button';
import {
  useNonModalDialogPrimitiveState,
  NonModalDialogPrimitive,
  NonModalDialogPrimitiveProps,
  NonModalDialogDisclosurePrimitive,
  NonModalDialogDisclosurePrimitiveProps,
  NonModalDialogArrowPrimitive,
  NonModalDialogArrowPrimitiveProps,
} from '@twilio-paste/non-modal-dialog-primitive';
import {useTheme} from '@twilio-paste/theme';

export type PopoverProps = NonModalDialogPrimitiveProps & {'aria-label': string};
export type PopoverButtonProps = NonModalDialogDisclosurePrimitiveProps & ButtonProps;
export type PopoverArrowProps = NonModalDialogArrowPrimitiveProps;

const StyledPopover = React.forwardRef<HTMLDivElement, BoxProps>(({style, ...props}, ref) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor="colorBackgroundBody"
      borderStyle="solid"
      borderWidth="borderWidth10"
      borderColor="colorBorderLight"
      borderRadius="borderRadius20"
      boxShadow="shadowCard"
      maxWidth="size30"
      minWidth="size30"
      zIndex="zIndex10"
      _focus={{outline: 'none'}}
      style={style}
      ref={ref}
    />
  );
});

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  return <NonModalDialogPrimitive {...props} as={StyledPopover} ref={ref} />;
});
Popover.displayName = 'Popover';
export {Popover};

const PopoverArrow = React.forwardRef<HTMLDivElement, PopoverArrowProps>((props, ref) => {
  const theme = useTheme();

  return (
    <NonModalDialogArrowPrimitive
      {...props}
      as="div"
      // @ts-ignore
      size="1.5rem"
      stroke={theme.borderColors.colorBorderLight}
      fill={theme.backgroundColors.colorBackgroundBody}
      ref={ref}
    />
  );
});
PopoverArrow.displayName = 'PopoverArrow';
export {PopoverArrow};

const PopoverButton = React.forwardRef<HTMLButtonElement, PopoverButtonProps>((props, ref) => {
  return (
    <NonModalDialogDisclosurePrimitive {...props} as={Button} ref={ref}>
      {props.children}
    </NonModalDialogDisclosurePrimitive>
  );
});
PopoverButton.displayName = 'PopoverButton';
export {PopoverButton};

export {useNonModalDialogPrimitiveState as usePopoverState};
