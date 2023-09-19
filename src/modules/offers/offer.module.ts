import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { OfferCronjob } from './application/cronjobs/offer.cronjob';
import { OfferFlowService, OfferTransformationService } from './application/services';
import { OfferInfrastructureModule } from './infrastructure';

@Module({
    imports: [OfferInfrastructureModule, ScheduleModule.forRoot()],

    providers: [OfferCronjob, OfferFlowService, OfferTransformationService],

    exports: [OfferCronjob],
})
export class OfferModule {}
