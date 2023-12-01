// import { AstronautApiResponse } from 'types/types';
/* API results */

export type ApiResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
};

export type LaunchApiResponse = ApiResponse<Launch>;
export type SpacecraftApiResponse = ApiResponse<Spacecraft>;
export type SpacestationApiResponse = ApiResponse<Spacestation>;
export type AstronautApiResponse = ApiResponse<Astronaut>;
export type SpacewalkApiResponse = ApiResponse<Spacewalk>;


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



/* Astronaut */


type AstronautStatus = {
    id: number;
    name: string;
};

type AstronautType = {
    id: number;
    name: string;
};

type SpaceAgency = {
    id: number;
    url: string;
    name: string;
    featured: boolean;
    type: string;
    country_code: string;
    abbrev: string;
    description: string;
    administrator: string;
    founding_year: string;
    launchers: string;
    spacecraft: string;
    // parent: null | any;
    image_url: null | string;
    logo_url: string;
};

type Astronaut = {
    id: number;
    url: string;
    name: string;
    status: AstronautStatus;
    type: AstronautType;
    in_space: boolean;
    time_in_space: string;
    eva_time: string;
    age: number;
    date_of_birth: string;
    date_of_death: null | string;
    nationality: string;
    bio: string;
    twitter: string;
    instagram: string;
    wiki: string;
    agency: SpaceAgency;
    profile_image: string;
    profile_image_thumbnail: string;
    flights_count: number;
    landings_count: number;
    spacewalks_count: number;
    last_flight: string;
    first_flight: string;
};

/* Spacewalk */


type Role = {
    id: number;
    role: string;
    priority: number;
};

type AstronautType = {
    id: number;
    name: string;
};

type Status = {
    id: number;
    name: string;
};

type Agency = {
    id: number;
    url: string;
    name: string;
    type: string;
    featured?: boolean;
    country_code?: string;
    abbrev?: string;
    description?: string;
    administrator?: string;
    founding_year?: string;
    launchers?: string;
    spacecraft?: string;
    parent?: null;
    image_url?: null | string;
    logo_url?: string;
};

type Astronaut = {
    id: number;
    url: string;
    name: string;
    type: AstronautType;
    in_space: boolean;
    time_in_space: string;
    status: Status;
    agency: Agency;
    date_of_birth: string;
    date_of_death: string | null;
    nationality: string;
    twitter: null | string;
    instagram: null | string;
    bio: string;
    profile_image: string;
    wiki: string;
    last_flight: string;
    first_flight: string;
};

type CrewMember = {
    id: number;
    role: Role;
    astronaut: Astronaut;
};

type SpacecraftConfig = {
    id: number;
    url: string;
    name: string;
    type: AstronautType;
    agency: Agency;
    in_use: boolean;
    capability: string;
    history: string;
    details: string;
    maiden_flight: string;
    height: number;
    diameter: number;
    human_rated: boolean;
    crew_capacity: number;
    // payload_capacity: null | any;
    flight_life: string;
    image_url: string;
    nation_url: null | string;
    wiki_link: string;
    info_link: string;
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
    status: Status;
    description: string;
    spacecraft_config: SpacecraftConfig;
};

type SpacecraftFlight = {
    id: number;
    url: string;
    mission_end: string;
    destination: string;
    launch_crew: CrewMember[];
    onboard_crew: CrewMember[];
    landing_crew: CrewMember[];
    spacecraft: Spacecraft;
    launch: null | Launch;
    // landing: Land;
    // docking_events: [];
};

type SpaceProgram = {
    id: number;
    url: string;
    name: string;
    description: string;
    agencies: Agency[];
    image_url: string;
    start_date: string;
    end_date: string | null;
    info_url: null | string;
    wiki_url: string;
    // mission_patches: [];
};

type Spacewalk = {
    id: number;
    url: string;
    name: string;
    start: string;
    end: string;
    duration: string;
    location: string;
    crew: CrewMember[];
    spacestation: null | Spacestation;
    // expedition: null | string
    spacecraft_flight: SpacecraftFlight;
    event: null | Event;
    program: SpaceProgram[];
};




