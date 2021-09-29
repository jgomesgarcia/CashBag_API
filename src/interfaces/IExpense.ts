import { ICategory } from "./ICategory";

export type TFrequency =  "diary" | "weakly" | "monthly" | "yearly" | "custom";

export enum EFrequency {
    Diary = "diary",
    Weakly = "weakly",
    Monthly = "monthly",
    Yearly = "yearly",
    Custom = "custom"
} 
export interface IExpense{ 
    id: number,
    title: string,
    value: number,
    frequency: TFrequency,
    chargeLimit: number
    creationDate: string,
    dueDate: string,
    creditor: string,
    hasChargeLimit: number,
    isVariable: boolean,
    isActive: boolean,
    isHidden: boolean,
    priority: number
    categoryList: ICategory[],
} 