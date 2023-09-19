import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferEntity } from './entities';
import { OfferMapperService } from './mappers';
import { OfferRepository } from './repositories';
import { ProviderStrategyFactory } from './strategies';
import { ProviderStrategy1Service, ProviderStrategy2Service } from './strategies/services';

@Module({
    imports: [TypeOrmModule.forFeature([OfferEntity])],

    providers: [
        {
            provide: APP_PIPE,
            useFactory: () =>
                new ValidationPipe({
                    transform: true,
                    whitelist: true,
                }),
        },
        OfferRepository,
        OfferMapperService,
        ProviderStrategyFactory,
        ProviderStrategy1Service,
        ProviderStrategy2Service,
    ],

    exports: [TypeOrmModule, ProviderStrategyFactory, OfferRepository, OfferMapperService],
})
export class OfferInfrastructureModule {}
