import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { OfferFlowService } from '../services';

@Injectable()
export class OfferCronjob {
    constructor(private readonly offerFlowService: OfferFlowService) {}

    @Cron(CronExpression.EVERY_6_HOURS)
    async handle() {
        this.offerFlowService.main();
    }
}
