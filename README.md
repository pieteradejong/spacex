# SpaceX

Purpose: Experiment with latest React features and libraries, and work with Space data. 
_Not for commercial purposes._
Audience: Anyone interested in SpaceX and React.

* uses the [Launch Library 2 API](https://thespacedevs.com/llapi) from [TheSpaceDevs](github.com/TheSpaceDevs).
  * strictly being used as an experimental dev project.
* source of inspiration for color schema and imagery: [rocketlabusa.com](https://www.rocketlabusa.com/).


## v0.1 TODO's
* :white_check_mark: menu items to add: Capsules, Cores, Crew, Dragons, Payloads, Rockets, Ships
* :white_check_mark: externalize api urls into config/constants file
* ~~replace `axios` with built-in `fetch`~~ --> axios is fine, extra import not the worst
* speed up loading ~~by configuring `useQuery` to initially load 5-10 most interesting results, and subsequently the rest~~ --> API doesn't allow parameters, so for v1.0 all results will just be loaded. After migration to [Launch Library 2](https://thespacedevs.com/llapi), will optimize app according to LL2 api's options.
* add tab only available via login. Implement both via JWT and username/pwd.
* :white_check_mark: Since [SpaceX-API](github.com/r-spacex/SpaceX-API) has apparently [been stale](https://github.com/r-spacex/SpaceX-API/issues/1243) since October, 2022, this client app has migrated to the new API. 

### Current dev status
* [DONE] Switched to new API at https://github.com/r-spacex/SpaceX-API
* [DONE] Launches page shows all launches
* [WIP] Add pages for all other endpoints
* [] Add page: `/` -> Welcome Page
* [WIP] Pages to add: `Astronauts`, `Spacestation`, `Spacewalks`
* [] Add `detail` pages for spacecraft, astronauts, etc.

