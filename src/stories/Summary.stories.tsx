import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Summary } from '../components/Summary';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Summary',
  component: Summary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof Summary>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Summary> = (args) => <Summary {...args} />;

const prod1 = {
  title: 'Baño Termal Ancient y Masaje Relajante',
  time: '120',
  price: 84,
};
const prod2 = {
  title: 'Experiencia Baño de Vino',
  time: '180',
  price: 135,
};
export const ProductSummary = Template.bind({});
ProductSummary.args = {
  products: [prod1, prod2],
  applyDiscount: false
};

export const ProductSummaryDiscount = Template.bind({});
ProductSummaryDiscount.args = {
  products: [prod1, prod2],
  applyDiscount: true,
  discount: 45
};
