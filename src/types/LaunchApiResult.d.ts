export type LaunchApiResult = {
    count: number;
    previous: string | null;
    next: string | null;
    results: Launch[];
};
