import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaymentForm } from '../components/PaymentForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/PaymentForm',
  component: PaymentForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof PaymentForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PaymentForm> = (args) => <PaymentForm {...args} />;

export const PaymentFormBasic = Template.bind({});
PaymentFormBasic.args = {};
