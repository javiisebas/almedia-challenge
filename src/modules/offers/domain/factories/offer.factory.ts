import { Offer } from '../entities';

export class OfferFactory {
    static create(data: Partial<Offer>): Offer {
        const offer = new Offer();

        Object.assign(offer, data);

        return offer;
    }
}
