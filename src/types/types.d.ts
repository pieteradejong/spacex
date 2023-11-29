/* API results */
export type LaunchApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Launch[];
};

type SpacecraftApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Spacecraft[];
};

/* Entities */

/* Launches */

interface LaunchStatus {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

interface NetPrecision {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
}

interface RocketConfiguration {
    id: number;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
}

interface Rocket {
    id: number;
    configuration: RocketConfiguration;
}

interface Orbit {
    id: number;
    name: string;
    abbrev: string;
}

interface Mission {
    id: number;
    name: string;
    description: string;
    launch_designator: string | null;
    type: string;
    orbit: Orbit;
    agencies: [];
    info_urls: string[];
    vid_urls: string[];
}

interface PadLocation {
    id: number;
    url: string;
    name: string;
    country_code: string;
    description: string | null;
    map_image: string;
    timezone_name: string;
    total_launch_count: number;
    total_landing_count: number;
}

interface Pad {
    id: number;
    url: string;
    agency_id: number | null;
    name: string;
    description: string | null;
    info_url: string | null;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: PadLocation;
    country_code: string;
    map_image: string;
    total_launch_count: number;
    orbital_launch_attempt_count: number;
}

interface Launch {
    id: string;
    url: string;
    slug: string;
    name: string;
    status: LaunchStatus;
    last_updated: string;
    net: string;
    window_end: string;
    window_start: string;
    net_precision: NetPrecision;
    probability: number | null;
    weather_concerns: string | null;
    holdreason: string;
    failreason: string;
    hashtag: string | null;
    launch_service_provider: LaunchServiceProvider;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    webcast_live: boolean;
    image: string;
    infographic: string | null;
    program: [];
    orbital_launch_attempt_count: number;
    location_launch_attempt_count: number;
    pad_launch_attempt_count: number;
    agency_launch_attempt_count: number;
    orbital_launch_attempt_count_year: number;
    location_launch_attempt_count_year: number;
    pad_launch_attempt_count_year: number;
    agency_launch_attempt_count_year: number;
    type: string;
}


/* Spacecraft */

type SpacecraftStatus = {
    id: number;
    name: string;
};

type SpacecraftType = {
    id: number;
    name: string;
};

type SpacecraftAgency = {
    id: number;
    url: string;
    name: string;
    type: string;
};

type SpacecraftConfig = {
    id: number;
    url: string;
    name: string;
    type: SpacecraftType;
    agency: SpacecraftAgency;
    in_use: boolean;
    image_url: string;
};

type Spacecraft = {
    id: number;
    url: string;
    name: string;
    serial_number: string;
    is_placeholder: boolean;
    in_space: boolean;
    time_in_space: string;
    time_docked: string;
    flights_count: number;
    mission_ends_count: number;
    status: SpacecraftStatus;
    description: string;
    spacecraft_config: SpacecraftConfig;
};

