import { Injectable } from '@nestjs/common';
import { ProviderNamesEnum } from '../../../domain';
import { IProviderStrategy } from '../interfaces';
import { ProviderStrategy1Service, ProviderStrategy2Service } from '../services';

@Injectable()
export class ProviderStrategyFactory {
    constructor(
        private readonly provider1StrategyService: ProviderStrategy1Service,
        private readonly provider2StrategyService: ProviderStrategy2Service,
    ) {}

    private readonly providerStrategyMap: Record<ProviderNamesEnum, IProviderStrategy> = {
        [ProviderNamesEnum.OFFER_1]: this.provider1StrategyService,
        [ProviderNamesEnum.OFFER_2]: this.provider2StrategyService,
    };

    getStrategy(providerName: ProviderNamesEnum): IProviderStrategy {
        const provider = this.providerStrategyMap?.[providerName];

        if (!provider) {
            throw new Error(`No strategy found for provider: ${providerName}`);
        }

        return provider;
    }
}
