import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Wizard } from '../components/Wizard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Wizard/Wizard',
  component: Wizard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof Wizard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Wizard> = (args) => <Wizard {...args} />;

export const Steps = Template.bind({});
Steps.args = {};