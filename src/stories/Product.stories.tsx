import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import prod1Image from '../assets/img/prod1.jpeg';

import { Product } from '../components/Product';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Product',
  component: Product,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof Product>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const ProductImage = Template.bind({});
ProductImage.args = {
  title: 'Baño Termal Ancient y Masaje Relajante',
  time: '120',
  image: prod1Image,
  description: 'Un viaje de sensaciones en un edificio histórico y a la luz de las velas que consiste en un recorrido libre por distintas salas de agua a diferentes temperaturas. Incluye un masaje relajante de 30 min.',
  price: 84,
};

export const ProductNoImage = Template.bind({});
ProductNoImage.args = {
  title: 'Experiencia Baño de Vino',
  time: '180',
  description: 'Acceso exclusivo durante 30 min. al Baño de Vino con propiedades antioxidantes, donde se aplica un masaje craneofacial y puedes degustar una copa de vino acompañado de nueces y queso. A continuación, un masaje corporal relajante de 45 min. Incluye recorrido termal.',
  price: 135,
};
