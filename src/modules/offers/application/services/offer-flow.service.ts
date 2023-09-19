import { payload1, payload2 } from '@/src/payloads';
import { Injectable } from '@nestjs/common';
import { ProviderNamesEnum } from '../../domain';
import { OfferMapperService, OfferRepository } from '../../infrastructure';
import { OfferTransformationService } from './offer-transformation.service';

@Injectable()
export class OfferFlowService {
    constructor(
        readonly offerTransformationService: OfferTransformationService,
        readonly offerMapperService: OfferMapperService,
        readonly offerRepository: OfferRepository,
    ) {}

    async main() {
        try {
            const fetchedDataFromProviders = await this.fetchDataFromProviders();

            // eslint-disable-next-line no-console
            console.info(`Processing ${fetchedDataFromProviders?.length} providers`);

            fetchedDataFromProviders?.forEach(async (provider) => {
                const offers = this.offerTransformationService.transformPayloadForProvider(
                    provider.payload,
                    provider.providerName,
                );

                const offersEntity = offers?.map((offer) => {
                    return this.offerMapperService.toEntity(offer);
                });

                if (!offersEntity?.length) return;

                await this.offerRepository.save(offersEntity);
            });
        } catch (error) {
            throw new Error(`Error during transformation job: ${error.message}`);
        }
    }

    async fetchDataFromProviders(): Promise<
        Array<{ payload: any; providerName: ProviderNamesEnum }>
    > {
        return [
            {
                payload: payload1,
                providerName: ProviderNamesEnum.OFFER_1,
            },
            {
                payload: payload2,
                providerName: ProviderNamesEnum.OFFER_2,
            },
        ];
    }
}
