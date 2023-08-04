# SpaceX

All things SpaceX.

* source of inspiration for color schema and imagery: [rocketlabusa.com](https://www.rocketlabusa.com/).


## v0.1 TODO's
* :white_check_mark: menu items to add: Capsules, Cores, Crew, Dragons, Payloads, Rockets, Ships
* :white_check_mark: externalize api urls into config/constants file
* ~~replace `axios` with built-in `fetch`~~ --> axios is fine, extra import not the worst
* speed up loading ~~by configuring `useQuery` to initially load 5-10 most interesting results, and subsequently the rest~~ --> API doesn't allow parameters, so for v1.0 all results will just be loaded. After migration to [Launch Library 2](https://thespacedevs.com/llapi), will optimize app according to LL2 api's options.
* add tab only available via login. Implement both via JWT and username/pwd.

## v1.0 Milestone
* One page for every API Entity, e.g. `Crew`, `Capsule`, `Launch` etc.
* Each page includes all available and relevant data, organized into clean and reusable UI components.

## v2.0 Milestone
* [SpaceX-API](github.com/r-spacex/SpaceX-API) is apparently [no longer maintained](https://github.com/r-spacex/SpaceX-API/issues/1243) since October, 2022, so after v1 functionality is complete, this client app will migrate to the new API. 
