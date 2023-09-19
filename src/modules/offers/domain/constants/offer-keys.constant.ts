import { Offer } from '../entities';

export const OfferKeys: Record<keyof Offer, string> = {
    description: 'description',
    externalOfferId: 'externalOfferId',
    id: 'id',
    isAndroid: 'isAndroid',
    isDesktop: 'isDesktop',
    isIos: 'isIos',
    name: 'name',
    offerUrlTemplate: 'offerUrlTemplate',
    providerName: 'providerName',
    requirements: 'requirements',
    slug: 'slug',
    thumbnail: 'thumbnail',
};
