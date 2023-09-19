import { Offer } from '../../../domain';

export interface IProviderStrategy {
    PROVIDER_NAME: string;
    transform(payload: any): Offer[];
}
