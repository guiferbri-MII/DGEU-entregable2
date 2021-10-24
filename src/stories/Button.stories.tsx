import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Basic/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FormButton = Template.bind({});
FormButton.args = {
  label: 'Siguiente',
  buttonType: 'form',
};

export const CardButton = Template.bind({});
CardButton.args = {
  buttonType: 'card',
  icon: 'plus'
};
