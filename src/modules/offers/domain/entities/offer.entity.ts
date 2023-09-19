export interface OfferDto {
    description: string;
    externalOfferId: string;
    id: number;
    isAndroid: number;
    isDesktop: number;
    isIos: number;
    name: string;
    offerUrlTemplate: string;
    providerName: string;
    requirements: string;
    slug: string;
    thumbnail: string;
}

export class Offer implements OfferDto {
    public description: string;
    public externalOfferId: string;
    public id: number;
    public isAndroid: number;
    public isDesktop: number;
    public isIos: number;
    public name: string;
    public offerUrlTemplate: string;
    public providerName: string;
    public requirements: string;
    public slug: string;
    public thumbnail: string;

    constructor(data?: OfferDto) {
        if (!data) return;

        this.description = data?.description;
        this.externalOfferId = data?.externalOfferId;
        this.id = data?.id;
        this.isAndroid = data?.isAndroid;
        this.isDesktop = data?.isDesktop;
        this.isIos = data?.isIos;
        this.name = data?.name;
        this.offerUrlTemplate = data?.offerUrlTemplate;
        this.providerName = data?.providerName;
        this.requirements = data?.requirements;
        this.slug = data?.slug;
        this.thumbnail = data?.thumbnail;
    }
}
