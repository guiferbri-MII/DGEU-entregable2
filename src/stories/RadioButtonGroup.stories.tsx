import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioButtonGroup } from '../components/RadioButtonGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Basic/RadioButtonGroup',
  component: RadioButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof RadioButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioButtonGroup> = (args) => <RadioButtonGroup {...args} />;

export const RadioButtonGroupBasic = Template.bind({});
RadioButtonGroupBasic.args = {
};
