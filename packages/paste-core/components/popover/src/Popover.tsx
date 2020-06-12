import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {NonModalDialogPrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {PopoverArrow} from './PopoverArrow';
import {PopoverContext} from './PopoverContext';

export interface PopoverProps {
  'aria-label': string;
  children: React.ReactNode;
  tabIndex?: number;
}

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

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(({children, ...props}, ref) => {
  const popover = React.useContext(PopoverContext);
  return (
    <NonModalDialogPrimitive {...(popover as any)} {...props} as={StyledPopover} ref={ref}>
      <PopoverArrow {...(popover as any)} />
      {children}
    </NonModalDialogPrimitive>
  );
});

if (process.env.NODE_ENV === 'development') {
  Popover.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    tabIndex: PropTypes.number,
  };
}

Popover.displayName = 'Popover';
export {Popover};
