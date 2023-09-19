import { Injectable } from '@nestjs/common';
import { Offer, OfferDto } from '../../domain';
import { OfferEntity } from '../entities';

@Injectable()
export class OfferMapperService {
    toDomain = (entity: OfferEntity): Offer => {
        return new Offer({
            description: entity?.description,
            externalOfferId: entity?.externalOfferId,
            id: entity?.id,
            isAndroid: entity?.isAndroid,
            isDesktop: entity?.isDesktop,
            isIos: entity?.isIos,
            name: entity?.name,
            offerUrlTemplate: entity?.offerUrlTemplate,
            providerName: entity?.providerName,
            requirements: entity?.requirements,
            slug: entity?.slug,
            thumbnail: entity?.thumbnail,
        });
    };

    toDto(entity: Offer): OfferDto {
        return {
            description: entity?.description,
            externalOfferId: entity?.externalOfferId,
            id: entity?.id,
            isAndroid: entity?.isAndroid,
            isDesktop: entity?.isDesktop,
            isIos: entity?.isIos,
            name: entity?.name,
            offerUrlTemplate: entity?.offerUrlTemplate,
            providerName: entity?.providerName,
            requirements: entity?.requirements,
            slug: entity?.slug,
            thumbnail: entity?.thumbnail,
        };
    }

    toEntity(entity: Offer): OfferEntity {
        const offerEntity = new OfferEntity();

        offerEntity.description = entity?.description;
        offerEntity.externalOfferId = entity?.externalOfferId;
        offerEntity.id = entity?.id;
        offerEntity.isAndroid = entity?.isAndroid;
        offerEntity.isDesktop = entity?.isDesktop;
        offerEntity.isIos = entity?.isIos;
        offerEntity.name = entity?.name;
        offerEntity.offerUrlTemplate = entity?.offerUrlTemplate;
        offerEntity.providerName = entity?.providerName;
        offerEntity.requirements = entity?.requirements;
        offerEntity.slug = entity?.slug;
        offerEntity.thumbnail = entity?.thumbnail;

        return offerEntity;
    }
}
