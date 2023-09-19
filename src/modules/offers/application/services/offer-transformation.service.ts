import { Injectable } from '@nestjs/common';
import { Offer, ProviderNamesEnum } from '../../domain';
import { ProviderStrategyFactory } from '../../infrastructure';

@Injectable()
export class OfferTransformationService {
    constructor(private readonly strategyFactory: ProviderStrategyFactory) {}

    transformPayloadForProvider(payload: any, providerName: ProviderNamesEnum): Offer[] {
        const strategy = this.strategyFactory.getStrategy(providerName);

        return strategy.transform(payload);
    }
}
