import { Address } from './Address';
import { User } from './User';

export class NeedyPerson {
  id!: number;
  name!: string;
  phone!: string;
  email!: string;
  familyIncome!: number;
  userLoginDetails!: User;
  address!: Address;
}
