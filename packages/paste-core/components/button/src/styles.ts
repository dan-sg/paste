import {css, styled, themeGet} from '@twilio-paste/styling-library';
import {Absolute} from '@twilio-paste/absolute';
import {ThemeShape} from '@twilio-paste/theme';
import {ButtonWrapperProps, ButtonChildrenProps} from './types';

/*
 * Sizes
 */
const sizeReset = {
  fontSize: '100%',
  padding: 'space0',
};
const sizeIcon = {
  padding: 'space30',
  borderRadius: 'borderRadius20',
  fontSize: '100%',
  /* To fix abnormal button padding-bottom */
  lineHeight: 'unset',
};
const sizeSmall = {
  paddingTop: 'space10',
  paddingBottom: 'space10',
  paddingRight: 'space30',
  paddingLeft: 'space30',
  borderRadius: 'borderRadius10',
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight30',
};
const sizeDefault = {
  paddingTop: 'space30',
  paddingBottom: 'space30',
  paddingRight: 'space50',
  paddingLeft: 'space50',
  borderRadius: 'borderRadius20',
  fontSize: 'fontSize30',
  lineHeight: 'lineHeight30',
};

/*
 * Base
 */
const baseButtonWrapper = {
  /* Hide default browser styles */
  appearance: 'none',
  border: 'none',
  display: 'inline-block',
  outline: 'none',
  background: 'none',
  transition: 'background-color 100ms ease-in, box-shadow 100ms ease-in',
  fontFamily: 'fontFamilyText',
  fontWeight: 'fontWeightSemibold',
  /* Remove extra black dotted border FF adds */
  '&::-moz-focus-inner': {
    border: 'none',
  },
};
const baseEnabled = {
  ...baseButtonWrapper,
  textDecoration: 'none',
  cursor: 'pointer',
  '&:focus, &:active': {
    boxShadow: 'shadowFocus',
  },
  /*
   defensively resetting from over zealous legacy global
   styles "a {...}" when button is set as an anchor
   */
  '&:hover, &:focus, &:active': {
    textDecoration: 'none',
  },
};
const baseLoading = {
  ...baseButtonWrapper,
  cursor: 'wait',
};
const baseDisabled = {
  ...baseButtonWrapper,
  cursor: 'not-allowed',
};

/*
 * Variants
 */
// Primary
const variantPrimaryBase = {
  color: 'colorTextInverse',
  /*
    defensively resetting from over zealous legacy global
    styles "a {...}" when button is set as an anchor
  */
  '&:hover,&:focus,&:active': {
    color: 'colorTextInverse',
  },
};
const variantPrimaryEnabled = {
  ...baseEnabled,
  ...variantPrimaryBase,
  backgroundColor: 'colorBackgroundPrimary',
  boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10}
      ${props.backgroundColors.colorBackgroundPrimary}`,
  '&:hover': {
    backgroundColor: 'colorBackgroundPrimaryDarker',
    boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10}
        ${props.backgroundColors.colorBackgroundPrimaryDarker}`,
  },
  '&:focus': {
    backgroundColor: 'colorBackgroundPrimary',
    boxShadow: (props: ThemeShape) =>
      `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundPrimaryDarker}, ${props.shadows.shadowFocus}`,
  },
  '&:active': {
    backgroundColor: 'colorBackgroundPrimaryDark',
    boxShadow: (props: ThemeShape) =>
      `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundPrimaryDarker}, ${props.shadows.shadowFocus}`,
  },
};
const variantPrimaryLoading = {
  ...baseLoading,
  ...variantPrimaryBase,
  '&, &:hover, &:active, &:focus': {
    backgroundColor: 'colorBackgroundPrimaryDarker',
    boxShadow: (props: ThemeShape) =>
      `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundPrimaryDarker}`,
  },
};
const variantPrimaryDisabled = {
  ...baseDisabled,
  ...variantPrimaryBase,

  backgroundColor: 'colorBackgroundPrimaryLight',
  boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10}
      ${props.backgroundColors.colorBackgroundPrimaryLight}`,

  '&:hover,&:active': {
    backgroundColor: 'colorBackgroundPrimaryLight',
    boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10}
        ${props.backgroundColors.colorBackgroundPrimaryLight}`,
  },
};

// Secondary
const variantSecondaryBase = {
  backgroundColor: 'colorBackgroundBody',
};
const variantSecondaryEnabled = {
  ...baseEnabled,
  ...variantSecondaryBase,
  color: 'colorTextLink',
  backgroundColor: 'colorBackgroundBody',
  boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10} ${props.borderColors.colorBorderPrimary}`,

  '&:hover': {
    color: 'colorTextLinkDarker',
    backgroundColor: 'colorBackgroundPrimaryLightest',
    boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10}
        ${props.borderColors.colorBorderPrimaryDarker}`,
  },
  '&:focus': {
    color: 'colorTextLinkDarker',
    backgroundColor: 'colorBackgroundPrimaryLightest',
    boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10}
          ${props.borderColors.colorBorderPrimaryDarker},
        ${props.shadows.shadowFocus}`,
  },
  '&:active': {
    color: 'colorTextLinkDarker',
    backgroundColor: 'colorBackgroundPrimaryLighter',
    boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10}
          ${props.borderColors.colorBorderPrimaryDarker},
        ${props.shadows.shadowFocus}`,
  },
};
const variantSecondaryLoading = {
  ...baseLoading,
  ...variantSecondaryBase,
  color: 'colorTextLinkDarker',
  backgroundColor: 'colorBackgroundPrimaryLighter',
  boxShadow: (props: ThemeShape) =>
    `inset 0 0 0 ${props.space.space10} ${props.borderColors.colorBorderPrimaryLighter}`,
};
const variantSecondaryDisabled = {
  ...baseDisabled,
  ...variantSecondaryBase,
  color: 'colorTextLinkLight',
  boxShadow: (props: ThemeShape) => `inset 0 0 0 ${props.space.space10} ${props.borderColors.colorBorderPrimaryLight}`,
};

// Destructive
const variantDestructiveBase = {
  backgroundColor: 'colorBackgroundDestructive',
  color: 'colorTextInverse',
  boxShadow: (props: ThemeShape) =>
    `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundDestructive}`,
  /*
   * Console fixme
   * defensively resetting from over zealous legacy global
   * styles "a {...}" when button is set as an anchor
   */
  '&:hover, &:focus, &:active': {
    color: 'colorTextInverse',
  },
};
const variantDestructiveEnabled = {
  ...baseEnabled,
  ...variantDestructiveBase,
  '&:hover': {
    backgroundColor: 'colorBackgroundDestructiveDarker',
    boxShadow: (props: ThemeShape) =>
      `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundDestructiveDarker}`,
  },
  '&:focus': {
    backgroundColor: 'colorBackgroundDestructive',
    boxShadow: (props: ThemeShape) =>
      `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundDestructiveDarker}, ${props.shadows.shadowFocus}`,
  },
  '&:active': {
    backgroundColor: 'colorBackgroundDestructiveDark',
    boxShadow: (props: ThemeShape) =>
      `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundDestructiveDarker}, ${props.shadows.shadowFocus}`,
  },
};
const variantDestructiveLoading = {
  ...baseLoading,
  ...variantDestructiveBase,
  backgroundColor: 'colorBackgroundDestructiveDarker',
  boxShadow: (props: ThemeShape) =>
    `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundDestructiveDarker}`,
};
const variantDestructiveDisabled = {
  ...baseDisabled,
  ...variantDestructiveBase,
  backgroundColor: 'colorBackgroundDestructiveLight',
  boxShadow: (props: ThemeShape) =>
    `inset 0 0 0 ${props.space.space10} ${props.backgroundColors.colorBackgroundDestructiveLight}`,
};

// Destructive Link
const variantDestructiveLinkBase = {
  background: 'none',
};
const variantDestructiveLinkEnabled = {
  ...baseEnabled,
  ...variantDestructiveLinkBase,
  color: 'colorTextLinkDestructive',
  '&:hover, &:focus, &:active': {
    textDecoration: 'underline',
  },
  '&:hover': {
    color: 'colorTextLinkDestructiveDark',
  },
  '&:active': {
    color: 'colorTextLinkDestructiveDarker',
  },
};
const variantDestructiveLinkLoading = {
  ...baseLoading,
  ...variantDestructiveLinkBase,
  color: 'colorTextLinkDestructiveDarker',
};
const variantDestructiveLinkDisabled = {
  ...baseDisabled,
  ...variantDestructiveLinkBase,
  color: 'colorTextLinkDestructiveLight',
};

// Link
const variantLinkBase = {
  background: 'none',
};
const variantLinkEnabled = {
  ...baseEnabled,
  ...variantLinkBase,
  color: 'colorTextLink',
  '&:hover, &:focus, &:active': {
    textDecoration: 'underline',
  },
  '&:hover': {
    color: 'colorTextLinkDark',
  },
  '&:active': {
    color: 'colorTextLinkDarker',
  },
};
const variantLinkLoading = {
  ...baseLoading,
  ...variantLinkBase,
  color: 'colorTextLinkDarker',
};
const variantLinkDisabled = {
  ...baseDisabled,
  ...variantLinkBase,
  color: 'colorTextLinkLight',
};

// Reset
const variantResetEnabled = baseEnabled;
const variantResetLoading = baseLoading;
const variantResetDisabled = baseDisabled;

/*
 * Style getters
 */
const buttonSizeStyles = (props: ButtonWrapperProps): {} => {
  switch (props.size) {
    case 'reset':
      return sizeReset;
    case 'icon':
      return sizeIcon;
    case 'small':
      return sizeSmall;
    case 'default':
    default:
      return sizeDefault;
  }
};

const buttonStateVariantStyles = ({variant, buttonState}: ButtonWrapperProps): {} => {
  const isDisabled = buttonState === 'disabled';
  const isLoading = buttonState === 'loading';

  switch (variant) {
    case 'reset':
      if (isDisabled) return variantResetDisabled;
      if (isLoading) return variantResetLoading;
      return variantResetEnabled;
    case 'secondary':
      if (isDisabled) return variantSecondaryDisabled;
      if (isLoading) return variantSecondaryLoading;
      return variantSecondaryEnabled;
    case 'link':
      if (isDisabled) return variantLinkDisabled;
      if (isLoading) return variantLinkLoading;
      return variantLinkEnabled;
    case 'destructive':
      if (isDisabled) return variantDestructiveDisabled;
      if (isLoading) return variantDestructiveLoading;
      return variantDestructiveEnabled;
    case 'destructive_link':
      if (isDisabled) return variantDestructiveLinkDisabled;
      if (isLoading) return variantDestructiveLinkLoading;
      return variantDestructiveLinkEnabled;
    case 'primary':
    default:
      if (isDisabled) return variantPrimaryDisabled;
      if (isLoading) return variantPrimaryLoading;
      return variantPrimaryEnabled;
  }
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>(props =>
  css({
    position: 'relative',
    /* To position the loading spinner correctly.
     * Pulled out of styles.ts so it works for the reset styles too.
     */
    ...buttonSizeStyles(props),
    ...buttonStateVariantStyles(props),
    width: props.fullWidth ? '100%' : 'auto',
  })
);

export const ButtonChildren = styled.span<ButtonChildrenProps>(props =>
  css({
    display: 'grid',
    gridAutoFlow: 'column',
    /*
     * Neat way to make sure children are spaced apart correctly
     * https://caniuse.com/#feat=multicolumn
     */
    columnGap: themeGet('space.space20')(props),
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    textDecoration: 'inherit',
    opacity: props.buttonState === 'loading' ? '0' : '100%',
  })
);

export const SpinnerWrapper = styled(Absolute)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '14px',
});
