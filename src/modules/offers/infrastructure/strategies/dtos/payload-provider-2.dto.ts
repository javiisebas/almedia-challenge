import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class PayloadProvider2Dto {
    @IsString()
    status: string;
    data: DataProvider2Dto;
}

export class DataProvider2Dto {
    [x: string]: OfferProvider2Dto;
}

export class OfferProvider2Dto {
    Offer: OfferDataProvider2Dto;
    Country: CountryProvider2Dto;
    State: CityProvider2Dto;
    City: CityProvider2Dto;
    Connection_Type: ConnectionTypeProvider2Dto;
    Device: CityProvider2Dto;
    OS: OSProvider2Dto;
}

export class CityProvider2Dto {
    include: any[];
    exclude: any[];
}

export class ConnectionTypeProvider2Dto {
    @IsBoolean()
    cellular: boolean;

    @IsBoolean()
    wifi: boolean;
}

export class CountryProvider2Dto {
    include: IncludeProvider2Dto;
    exclude: any[];
}

export class IncludeProvider2Dto {
    US: UsProvider2Dto;
}

export class UsProvider2Dto {
    @IsNumber()
    id: number;

    @IsString()
    code: string;

    @IsString()
    name: string;
}

export class OSProvider2Dto {
    @IsBoolean()
    android: boolean;

    @IsBoolean()
    ios: boolean;

    @IsBoolean()
    web: boolean;

    min_ios: null;
    max_ios: null;
    min_android: null;
    max_android: null;
}

export class OfferDataProvider2Dto {
    @IsNumber()
    campaign_id: number;
    store_id: null;

    @IsString()
    tracking_type: string;

    @IsString()
    campaign_vertical: string;

    @IsString()
    currency_name_singular: string;

    @IsString()
    currency_name_plural: string;

    @IsString()
    network_epc: string;

    @IsString()
    icon: string;

    @IsString()
    name: string;

    @IsString()
    tracking_url: string;

    @IsString()
    instructions: string;
    disclaimer: null;

    @IsString()
    description: string;

    @IsString()
    short_description: string;

    @IsString()
    offer_sticker_text_1: string;
    offer_sticker_text_2: null;
    offer_sticker_text_3: null;

    @IsString()
    offer_sticker_color_1: string;

    @IsString()
    offer_sticker_color_2: string;

    @IsString()
    offer_sticker_color_3: string;
    sort_order_setting: null;

    @IsString()
    category_1: string;
    category_2: null;

    @IsNumber()
    amount: number;

    @IsNumber()
    payout_usd: number;

    @IsString()
    start_datetime: string;

    @IsString()
    end_datetime: string;
    @IsBoolean()
    is_multi_reward: boolean;
}
