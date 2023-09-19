import { OfferFlowService } from '@/src/modules/offers/application/services';
import { Test, TestingModule } from '@nestjs/testing';
import { entityOffers } from './fixtures';

describe('OfferFlowService', () => {
    let service: OfferFlowService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OfferFlowService],
        }).compile();

        service = module.get<OfferFlowService>(OfferFlowService);
    });

    it('should fetch data from providers', async () => {
        const result = await service.fetchDataFromProviders();
        expect(result).toEqual(entityOffers);
    });
});
