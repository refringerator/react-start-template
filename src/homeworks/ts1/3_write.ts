/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

type TCategory = {
  id: string;
  name: string;
  photo?: string;
};

type TProduct = {
  id: string;
  name: string;
  photo: string;
  desc: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: TCategory;
};

enum TOperationType {
  PROFIT = 'Profit',
  COST = 'Cost',
}

type TCommonOperation = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: TCategory;
};

type TCost = TCommonOperation & {
  type: TOperationType.COST;
};

type TProfit = TCommonOperation & {
  type: TOperationType.PROFIT;
};

type TOperation = TCost | TProfit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const randomString = (length = 11) => Math.random().toString(36).substring(2, 14).substring(0, length);
const randomIntNumber = (maxPrice = 1000000) => Math.round(Math.random() * maxPrice);
const randomOperationType = () => Object.values(TOperationType)[randomIntNumber(Object.values(TOperationType).length)];

export const createRandomProduct = (createdAt: string): TProduct => ({
  id: randomString(5),
  name: randomString(10),
  photo: 'photo',
  desc: randomString(),
  price: randomIntNumber(),
  oldPrice: randomIntNumber(),
  createdAt,
  category: {
    id: randomString(5),
    name: randomString(10),
  },
});

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): TOperation => ({
  id: randomString(5),
  name: randomString(10),
  desc: randomString(),
  createdAt,
  amount: randomIntNumber(100),
  category: {
    id: randomString(5),
    name: randomString(10),
  },
  type: randomOperationType(),
});
