import { Item } from './item';

export interface IDonation {
  id: number;
  donorId: number;
  cardNumber: string;
  nameOnCard: string;
  cvvNumber: number;
  expiryDate: string;
  amount: number;
  item: Item;
  dateOfDonation: string;
  description: string;
  ngo: string;
}
