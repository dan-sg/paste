import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {DefaultTheme} from '@twilio-paste/theme';
import {css, themeGet} from '../src';

storiesOf('Libraries|Styling', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <div />;
  });
