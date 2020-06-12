import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Absolute} from '@twilio-paste/absolute';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Popover, PopoverContainer, PopoverButton} from '../src';

const Example: React.FC<{}> = () => {
  return (
    <PopoverContainer baseId="test-id">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover tabIndex={0} aria-label="Popover">
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </PopoverContainer>
  );
};

const BottomExample: React.FC<{}> = () => {
  return (
    <PopoverContainer baseId="test-id" placement="bottom-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover tabIndex={0} aria-label="Popover">
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </PopoverContainer>
  );
};

const TopExample: React.FC<{}> = () => {
  return (
    <Absolute preset="bottom" bottom={12}>
      <PopoverContainer baseId="test-id" placement="top-start">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover tabIndex={0} aria-label="Popover">
          <Box padding="space40">
            <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
              This is the Twilio styled popover that you can use in all your applications.
            </Text>
          </Box>
        </Popover>
      </PopoverContainer>
    </Absolute>
  );
};

const RightExample: React.FC<{}> = () => {
  return (
    <PopoverContainer baseId="test-id" placement="right-start">
      <PopoverButton variant="primary">Open popover</PopoverButton>
      <Popover tabIndex={0} aria-label="Popover">
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </PopoverContainer>
  );
};

const LeftExample: React.FC<{}> = () => {
  return (
    <Absolute preset="right" top={12} right={12}>
      <PopoverContainer baseId="test-id" placement="left-start">
        <PopoverButton variant="primary">Open popover</PopoverButton>
        <Popover tabIndex={0} aria-label="Popover">
          <Box padding="space40">
            <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
              This is the Twilio styled popover that you can use in all your applications.
            </Text>
          </Box>
        </Popover>
      </PopoverContainer>
    </Absolute>
  );
};

storiesOf('Components|Popover', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return <Example />;
  })
  .add('Popover Top', () => {
    return <TopExample />;
  })
  .add('Popover Left', () => {
    return <LeftExample />;
  })
  .add('Popover Right', () => {
    return <RightExample />;
  })
  .add('Popover Bottom', () => {
    return <BottomExample />;
  });
