import type { Meta } from '@storybook/react';
import { ProductPage } from './ProductPage';

const meta: Meta<typeof ProductPage> = {
  title: '"Элементы магазина"/Страница товара',
  component: ProductPage,
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export default meta;

export const DefaultButton = {
  name: 'Заполненная страница',
  args: {
    type: 'default',
    categoryName: 'Программирование',
    name: 'React.js Developer',
    price: '80000',
    priceOld: '200000',
    description:
      'Разработка с React.js позволяет создавать мощные и эффективные веб-приложения с отзывчивым интерфейсом. Благодаря компонентной архитектуре и реактивному обновлению UI, код становится переиспользуемым и приложение работает быстро. Большое сообщество разработчиков и обширные ресурсы обеспечивают поддержку и легкость в изучении.',
    imageUrls: [
      'https://cdn.otus.ru/media/public/fc/79/fc79b7e1d8934e7bb78293d7c6c32e8c.svg',
      'https://otus.ru/_next/static/images/img/defaultCourseInvertedIcon-1007d35d367f0844dd10047fbe145f74.svg',
      'https://cdn.otus.ru/media/public/5b/13/5b13ce349bae4b56a8a88c2bdce5e5aa.svg',
    ],
  },
};
