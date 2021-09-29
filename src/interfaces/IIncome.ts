import { ICategory } from "./ICategory";
import { TFrequency } from "./IExpense";

export interface IIncome{
    id: number,
    title: string,
    value: number,
    frequency: TFrequency
    creationDate: string,
    payDay: string,
    creditor: string,
    source: boolean,
    isActive: boolean,
    isHidden: boolean,
    categoryList: ICategory[],
} 