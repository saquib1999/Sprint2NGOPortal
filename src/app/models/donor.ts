import { Address } from './Address';
import { UserLoginDetails } from './userLoginDetails';

export class IDonor {
  public name!: string;
  public email!: string;
  public phone!: string;
  public address!: Address;
  public userLoginDetails!: UserLoginDetails;
}
