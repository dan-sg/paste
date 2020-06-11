import * as React from 'react';
import {axe} from 'jest-axe';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {usePopoverState, Popover, PopoverArrow, PopoverButton} from '../src';

const PopoverMock: React.FC<{}> = () => {
  const popover = usePopoverState({baseId: 'popover-example'});
  return (
    <Theme.Provider theme="console">
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <PopoverArrow {...popover} />
        This is the Twilio styled popover that you can use in all your applications.
      </Popover>
    </Theme.Provider>
  );
};

const VisiblePopoverMock: React.FC<{}> = () => {
  const popover = usePopoverState({baseId: 'popover-example', visible: true});
  return (
    <Theme.Provider theme="console">
      <PopoverButton {...popover} variant="primary">
        Open popover
      </PopoverButton>
      <Popover {...popover} tabIndex={0} aria-label="Popover">
        <PopoverArrow {...popover} />
        This is the Twilio styled popover that you can use in all your applications.
      </Popover>
    </Theme.Provider>
  );
};

describe('Popover', () => {
  describe('Render', () => {
    it('should render', () => {
      const {asFragment} = render(<PopoverMock />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render a popover button with aria attributes', () => {
      render(<PopoverMock />);
      const renderedPopoverButton = screen.getByRole('button');
      expect(renderedPopoverButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedPopoverButton.getAttribute('aria-controls')).toEqual('popover-example');
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('false');
    });

    it('should render a popover button with expanded aria attributes when popover is visible', () => {
      render(<VisiblePopoverMock />);
      const renderedPopoverButton = screen.getByRole('button');
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('true');
    });

    it('should render a popover', () => {
      render(<PopoverMock />);
      const renderedPopover = screen.getByLabelText('Popover');
      expect(renderedPopover.getAttribute('role')).toEqual('dialog');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<PopoverMock />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
