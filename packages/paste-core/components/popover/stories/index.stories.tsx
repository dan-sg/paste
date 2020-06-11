import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Absolute} from '@twilio-paste/absolute';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {usePopoverState, Popover, PopoverArrow, PopoverButton} from '../src';

const Example: React.FC<{}> = () => {
  const popover = usePopoverState();
  return (
    <>
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <PopoverArrow {...popover} />
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </>
  );
};

const BottomExample: React.FC<{}> = () => {
  const popover = usePopoverState({placement: 'bottom-start'});
  return (
    <>
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <PopoverArrow {...popover} />
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </>
  );
};

const TopExample: React.FC<{}> = () => {
  const popover = usePopoverState({placement: 'top-start'});
  return (
    <Absolute preset="bottom" bottom={12}>
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <PopoverArrow {...popover} />
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </Absolute>
  );
};

const RightExample: React.FC<{}> = () => {
  const popover = usePopoverState({placement: 'right-start'});
  return (
    <>
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <PopoverArrow {...popover} />
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </>
  );
};

const LeftExample: React.FC<{}> = () => {
  const popover = usePopoverState({placement: 'left-start'});
  return (
    <Absolute preset="right" top={12} right={12}>
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <PopoverArrow {...popover} />
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </Absolute>
  );
};

const NoGutterExample: React.FC<{}> = () => {
  const popover = usePopoverState({placement: 'bottom-start', gutter: 0});
  return (
    <>
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <Box padding="space40">
          <Text as="span" fontSize="fontSize20" lineHeight="lineHeight20">
            This is the Twilio styled popover that you can use in all your applications.
          </Text>
        </Box>
      </Popover>
    </>
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
  })
  .add('Popover Without Gutter', () => {
    return <NoGutterExample />;
  });
