/* API results */
export type LaunchApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Launch[];
};

export type SpacecraftApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Spacecraft[];
};

export type SpacestationApiResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Spacestation[];
};

/* Entities */

/* Launches */

export interface LaunchStatus {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export interface NetPrecision {
    id: number;
    name: string;
    abbrev: string;
    description: string;
}

export interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
}

export interface RocketConfiguration {
    id: number;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
}

export interface Rocket {
    id: number;
    configuration: RocketConfiguration;
}

export interface Orbit {
    id: number;
    name: string;
    abbrev: string;
}

export interface Mission {
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

export interface PadLocation {
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

export interface Pad {
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

export interface Launch {
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

export type SpacecraftStatus = {
    id: number;
    name: string;
};

export type SpacecraftType = {
    id: number;
    name: string;
};

export type SpacecraftAgency = {
    id: number;
    url: string;
    name: string;
    type: string;
};

export type SpacecraftConfig = {
    id: number;
    url: string;
    name: string;
    type: SpacecraftType;
    agency: SpacecraftAgency;
    in_use: boolean;
    image_url: string;
};

export type Spacecraft = {
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

/* Spacestation */

type SpacestationStatus = {
    id: number;
    name: string;
};

type SpacestationType = {
    id: number;
    name: string;
};

type SpacestationOwner = {
    id: number;
    url: string;
    name: string;
    abbrev: string;
};

type Spacestation = {
    id: number;
    url: string;
    name: string;
    status: SpacestationStatus;
    type: SpacestationType;
    founded: string;
    deorbited: string | null;
    description: string;
    orbit: string;
    owners: SpacestationOwner[];
    image_url: string;
};



