import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioButton } from '../components/RadioButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Basic/RadioButton',
  component: RadioButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof RadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const RadioButtonBasic = Template.bind({});
RadioButtonBasic.args = {
  label: 'Online',
  icon: "envelope"
};
