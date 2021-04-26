import { Employee } from './Employee';
import { NeedyPerson } from './NeedyPerson';

export class DonationDistribution {
  id!: number;
  requestId!: number;
  person!: NeedyPerson;
  item = { id: 0, item: 'MONEY', description: '' };
  distributedBy!: Employee;
  amountDistributed!: number;
  dateOfDistribution!: Date;
  approvalOrRejectedDate!: Date;
  status!: string;
  ngo = 'BUTTERFLIES INDIA';
}
