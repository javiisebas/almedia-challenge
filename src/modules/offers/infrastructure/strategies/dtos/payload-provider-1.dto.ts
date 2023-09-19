import { IsArray, IsIn, IsNumber, IsString } from 'class-validator';

export class PayloadProvider1Dto {
    query: QueryProvider1Dto;

    response: ResponseProvider1Dto;
}

export class QueryProvider1Dto {
    @IsString()
    pubid: string;

    @IsNumber()
    appid: number;

    @IsString()
    country: string;

    @IsString()
    platform: string;
}

export class ResponseProvider1Dto {
    @IsString()
    currency_name: string;

    @IsNumber()
    offers_count: number;

    offers: OfferProvider1Dto[];
}

export class OfferProvider1Dto {
    @IsNumber()
    amount: number;

    @IsString()
    call_to_action: string;

    category: CategoryProvider1Dto;

    @IsArray()
    countries: string[];

    @IsString()
    device: string | 'iphone_ipad';

    @IsString()
    disclaimer: string;

    @IsString()
    image_url_220x124: string;

    @IsString()
    image_url: string;

    @IsNumber()
    last_modified: number;

    @IsString()
    offer_desc: string;

    @IsString()
    offer_id: string;

    @IsString()
    offer_name: string;

    @IsString()
    offer_url_easy: string;

    @IsString()
    offer_url: string;

    @IsString()
    package_id: string;

    @IsString()
    payout_type: string;

    @IsNumber()
    payout: number;

    @IsIn(['desktop', 'mobile'])
    platform: 'desktop' | 'mobile';

    @IsString()
    preview_url: string;

    verticals: VerticalProvider1Dto[];
}

export class CategoryProvider1Dto {
    [x: string]: string;
}

export class VerticalProvider1Dto {
    @IsString()
    vertical_id: string;

    @IsString()
    vertical_name: string;
}
