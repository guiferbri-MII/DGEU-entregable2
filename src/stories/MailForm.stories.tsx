import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MailForm } from '../components/MailForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Form/MailForm',
  component: MailForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof MailForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MailForm> = (args) => <MailForm {...args} />;

export const MailFormOnline = Template.bind({});
MailFormOnline.args = {
  online: true
};
