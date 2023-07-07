enum DatePrecision {
    half = "half",
    quarter = "quarter",
    year = "year",
    month = "month",
    day = "day",
    hour = "hour"
}

export type Rocket = {
    id: string;
}

export type LaunchFailure = {
    id: string;
}

export type Launch = {
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: DatePrecision;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    tbd: boolean;
    net: boolean
    window: number;
    rocket: Rocket;
    success: boolean;
    failures: LaunchFailure[];
    // TODO: add all fields from models
}