import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { OfferEntity } from '../entities/offer-db.entity';

@Injectable()
export class OfferRepository {
    constructor(
        @InjectRepository(OfferEntity)
        private offerRepository: Repository<OfferEntity>,
    ) {}

    save(entity: DeepPartial<OfferEntity>[]) {
        return this.offerRepository.save(entity);
    }
}
