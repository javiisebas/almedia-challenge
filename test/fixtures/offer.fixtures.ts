import { ProviderNamesEnum } from '@/src/modules/offers/domain';
import { payload1, payload2 } from '@/src/payloads';

export const entityOffers = [
    {
        payload: payload1,
        providerName: ProviderNamesEnum.OFFER_1,
    },
    {
        payload: payload2,
        providerName: ProviderNamesEnum.OFFER_2,
    },
];

export const transformedOffers = [
    {
        description: 'Play and reach level 23 within 14 days.',
        externalOfferId: '19524555',
        isAndroid: 0,
        isDesktop: 0,
        isIos: 1,
        name: 'MyGym - iOS',
        offerUrlTemplate: 'https://some.url',
        providerName: 'offer1',
        requirements: 'Play and reach level 23 within 14 days.',
        slug: 'offer1-MyGym - iOS',
        thumbnail: 'https://some.url',
    },

    {
        description:
            'SoFi is a one-stop shop for your finances, designed to help you Get Your Money Right.',
        externalOfferId: '15828',
        isAndroid: 0,
        isDesktop: 1,
        isIos: 1,
        name: 'Sofi',
        offerUrlTemplate: 'https://some.url',
        providerName: 'offer2',
        requirements:
            'Register with VALID personal information, Make a minimum deposit of $50,Redeem your points! *New Users Only!',
        slug: 'offer2-Sofi',
        thumbnail: 'https://some.url',
    },
];
