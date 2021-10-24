import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WizardStep } from '../components/WizardStep';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Wizard/WizardStep',
  component: WizardStep,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof WizardStep>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WizardStep> = (args) => <WizardStep {...args} />;

export const Step = Template.bind({});
Step.args = {
  stepName: 'Elige experiencia',
  status: 'active',
};