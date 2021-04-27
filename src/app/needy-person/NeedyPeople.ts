import { NumberValueAccessor } from "@angular/forms"
import { IAddress } from "./Address";
import { IUser } from "./User";

export interface INeedyPeople{
    [x: string]: any;

    personId: number;
    name: string;
    phone: number;
    familyIncome: number;
    userLoginDetails: IUser;
    address: IAddress;   
}