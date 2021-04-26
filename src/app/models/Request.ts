export class Request {
  id!: number;
  needyPersonId!: number;
  donationType = 'MONEY';
  amountOrQuantity!: number;
  reason!: string;
  status = 'PENDING';
}
