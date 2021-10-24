import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Filter, FilterType } from '../components/Filter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Filter/Filter',
  component: Filter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    filterType: { 
      control: 'radio',
      options: FilterType
    },
  },
} as ComponentMeta<typeof Filter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;
export const FilterRange = Template.bind({});
FilterRange.args = {
  label: 'Precio',
  filterType: FilterType.range,
  min: 30,
  max: 100
};

export const FilterCheckbox = Template.bind({});
FilterCheckbox.args = {
  label: 'Tiempo',
  filterType: FilterType.checkbox,
  options: ['30\'', '45\'', '120\'']
};
