import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Filters } from '../components/Filters';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Filter/Filters',
  component: Filters,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof Filters>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Filters> = (args) => <Filters {...args} />;

export const BasicFilters = Template.bind({});
BasicFilters.args = {
};