import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Offer, OfferFactory, ProviderNamesEnum } from '../../../domain';
import { OfferProvider2Dto, PayloadProvider2Dto } from '../dtos';
import { IProviderStrategy } from '../interfaces';

@Injectable()
export class ProviderStrategy2Service implements IProviderStrategy {
    readonly PROVIDER_NAME = ProviderNamesEnum.OFFER_2;

    transform(payload: PayloadProvider2Dto): Offer[] {
        const transformedOffers: Offer[] = [];

        Object.values(payload.data).forEach((offer) => {
            const dto = plainToInstance(OfferProvider2Dto, offer);
            const errors = validateSync(dto);

            if (errors.length > 0) {
                console.warn(`Offer ${offer.Offer.campaign_id} validation failed:`, errors);
                return;
            }

            const transformedOfferData: Partial<Offer> = {
                description: dto.Offer.description,
                externalOfferId: dto.Offer.campaign_id.toString(),
                isAndroid: dto.OS.android ? 1 : 0,
                isDesktop: dto.OS.web ? 1 : 0,
                isIos: dto.OS.ios ? 1 : 0,
                name: dto.Offer.name,
                offerUrlTemplate: dto.Offer.tracking_url,
                providerName: this.PROVIDER_NAME,
                requirements: dto.Offer.instructions,
                slug: `${this.PROVIDER_NAME}-${dto.Offer.name}`,
                thumbnail: dto.Offer.icon,
            };

            const transformedOffer = OfferFactory.create(transformedOfferData);

            transformedOffers.push(transformedOffer);
        });

        return transformedOffers;
    }
}
