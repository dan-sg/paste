import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Absolute} from '@twilio-paste/absolute';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {pasteBaseStyles} from '@twilio-paste/theme';
import {NonModalDialogPrimitive} from '@twilio-paste/non-modal-dialog-primitive';
import {PopoverArrow} from './PopoverArrow';
import {PopoverContext} from './PopoverContext';

export interface PopoverProps {
  'aria-label': string;
  children: React.ReactNode;
  tabIndex?: number;
}

// import Paste Theme Based Styles due to portal positioning.
// reakit portal is a sibling to the main app, so you are now
// no longer a child of the theme provider. We need to re-set
// some of the base styles that we rely on inheriting from
// such as font-family and line-height so that compositions
// of paste components in the modal are styled correctly

// eslint-disable-next-line emotion/syntax-preference
const StyledBase = styled('div')(pasteBaseStyles);

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
      <StyledBase>
        <Box padding="space50">
          {children}
          <Absolute preset="top_right" top={8} right={8}>
            <Button
              variant="reset"
              size="reset"
              // @ts-ignore
              // Property 'hide' does not exist on type 'Partial<PopoverState>'
              // But reakit docs suggest using it
              // https://reakit.io/docs/popover/#initial-focus
              onClick={popover.hide}
            >
              <CloseIcon decorative={false} iconColor="colorTextWeak" size="sizeIcon10" title="Close popover" />
            </Button>
          </Absolute>
        </Box>
      </StyledBase>
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
