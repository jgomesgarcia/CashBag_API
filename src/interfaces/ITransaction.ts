import { ICategory } from "./ICategory";


export type TTransactionType = "debt" | "gain";
export enum ETransactionType{
    Debt = "debt",
    Gain = "gain"
}

export interface ITransaction{
    id: number,
    type: TTransactionType,
    title: string,
    value: number,
    creationDate: string,
    purchaseDate: string,
    dischargeDate: string,
    dueDate: string,
    creditor: string,
    isPaidOff: boolean,
    isPartiallyPaidOff: boolean,
    isActive: boolean,
    isHidden: boolean,
    priority: number,
    categoryList: ICategory[],
}