import { Address } from './Address';
import { User } from './User';

export class Employee {
  id!: number;
  name!: string;
  email!: string;
  phone!: number;
  userLoginDetails!: User;
  address!: Address;
}
