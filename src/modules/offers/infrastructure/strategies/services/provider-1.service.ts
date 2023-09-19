import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Offer, OfferFactory, ProviderNamesEnum } from '../../../domain';
import { OfferProvider1Dto, PayloadProvider1Dto } from '../dtos';
import { IProviderStrategy } from '../interfaces';

@Injectable()
export class ProviderStrategy1Service implements IProviderStrategy {
    readonly PROVIDER_NAME = ProviderNamesEnum.OFFER_1;

    transform(payload: PayloadProvider1Dto): Offer[] {
        const transformedOffers: Offer[] = [];

        payload.response.offers.forEach((offer) => {
            const dto = plainToInstance(OfferProvider1Dto, offer);
            const errors = validateSync(dto);

            if (errors.length > 0) {
                console.warn(`Offer ${offer.offer_id} validation failed:`, errors);
                return;
            }

            const isDesktop: number = offer.platform === 'desktop' ? 1 : 0;
            const isIos: number = offer.device === 'iphone_ipad' ? 1 : 0;

            const transformedOfferData: Partial<Offer> = {
                description: dto.offer_desc,
                externalOfferId: dto.offer_id,
                isAndroid: isDesktop + isIos === 0 ? 1 : 0,
                isDesktop,
                isIos,
                name: dto.offer_name,
                offerUrlTemplate: dto.offer_url,
                providerName: this.PROVIDER_NAME,
                requirements: dto.call_to_action,
                slug: `${this.PROVIDER_NAME}-${dto.offer_name}`,
                thumbnail: dto.image_url,
            };

            const transformedOffer = OfferFactory.create(transformedOfferData);

            transformedOffers.push(transformedOffer);
        });

        return transformedOffers;
    }
}
