import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Atoms / Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: (parameters) => <Button {...parameters} />,
};
