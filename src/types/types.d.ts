/* API results */
export type LaunchApiResult = Launch[];

/* Objects */
// export type Launch = {
//     id: string;
//     name: string;
//     rocket: string;

// };

export type Launch = {
    fairings: {
      reused: boolean;
      recovery_attempt: boolean;
      recovered: boolean;
      ships: string[];
    };
    links: {
      patch: {
        small: string;
        large: string;
      };
      reddit: {
        campaign: string | null;
        launch: string | null;
        media: string | null;
        recovery: string | null;
      };
      flickr: {
        small: string[];
        original: string[];
      };
      presskit: string | null;
      webcast: string;
      youtube_id: string;
      article: string;
      wikipedia: string;
    };
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: {
      time: number;
      altitude: number | null;
      reason: string;
    }[];
    details: string;
    crew: string[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: {
      core: string;
      flight: number;
      gridfins: boolean;
      legs: boolean;
      reused: boolean;
      landing_attempt: boolean;
      landing_success: null | boolean;
      landing_type: string | null;
      landpad: string | null;
    }[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string | null;
    id: string;
  };
  
export type Rocket = {
    height: {
      meters: number;
      feet: number;
    };
    diameter: {
      meters: number;
      feet: number;
    };
    mass: {
      kg: number;
      lb: number;
    };
    first_stage: {
      thrust_sea_level: {
        kN: number;
        lbf: number;
      };
      thrust_vacuum: {
        kN: number;
        lbf: number;
      };
      reusable: boolean;
      engines: number;
      fuel_amount_tons: number;
      burn_time_sec: number;
    };
    second_stage: {
      thrust: {
        kN: number;
        lbf: number;
      };
      payloads: {
        composite_fairing: {
          height: {
            meters: number;
            feet: number;
          };
          diameter: {
            meters: number;
            feet: number;
          };
        };
        option_1: string;
      };
      reusable: boolean;
      engines: number;
      fuel_amount_tons: number;
      burn_time_sec: number;
    };
    engines: {
      isp: {
        sea_level: number;
        vacuum: number;
      };
      thrust_sea_level: {
        kN: number;
        lbf: number;
      };
      thrust_vacuum: {
        kN: number;
        lbf: number;
      };
      number: number;
      type: string;
      version: string;
      layout: string;
      engine_loss_max: number;
      propellant_1: string;
      propellant_2: string;
      thrust_to_weight: number;
    };
    landing_legs: {
      number: number;
      material: string | null;
    };
    payload_weights: {
      id: string;
      name: string;
      kg: number;
      lb: number;
    }[];
    flickr_images: string[];
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    wikipedia: string;
    description: string;
    id: string;
  };
  

export type Crew = {
    id: string;
}
