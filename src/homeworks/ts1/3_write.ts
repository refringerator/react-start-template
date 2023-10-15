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
}

type TProduct = {
    id: string;
    name: string;
    photo: string;
    desc: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: TCategory;
}

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
}

type TCost = TCommonOperation & {
    type: TOperationType.COST;
}

type TProfit = TCommonOperation & {
    type: TOperationType.PROFIT;
}

type TOperation = TCost | TProfit

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): TProduct => ({
    id: 'id',
    name: 'name',
    photo: 'photo',
    desc: 'desc',
    price: 1000000,
    createdAt,
    category: {
        id: 'cid',
        name: 'cname',
    },
});

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): TOperation => ({
    id: 'id',
    name: 'name',
    createdAt,
    amount: 5,
    category: {
        id: 'cid',
        name: 'cname',
    },
    type: TOperationType.COST,
});
