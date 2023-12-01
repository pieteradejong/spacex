# SpaceX

Purpose: Experiment with latest React features and libraries, and work with Space data. 
_Not for commercial purposes._
Audience: Anyone interested in SpaceX and React.

* uses the [Launch Library 2 API](https://thespacedevs.com/llapi) from [TheSpaceDevs](github.com/TheSpaceDevs).
  * strictly being used as an experimental dev project.
* source of inspiration for color schema and imagery: [rocketlabusa.com](https://www.rocketlabusa.com/).


## API Entities and Relationships
* Launches
  * has_one: pad
* Events
  * has_many: agencies; has_many: launches; has_many: expeditions; has_many: spacestations; has_many: program
* Agencies
  * (no relations)
* Astronauts
  * belongs_to: agency
* Space Stations
  * (no relations)
* Expeditions
  * has_a: spacestation; has_many: mission_patches; has_many: spacewalks
* Docking Event
  * has_a: spacecraft; 
* Launch Vehicles
  * (no relations)
* Reusable First Stages
  * (no relations)
* Spacecraft
  * belongs_to: agency
* Locations
  * has_many: pads
* Pads
  * has_one: location



## v0.1 TODO's
* :white_check_mark: menu items to add: Capsules, Cores, Crew, Dragons, Payloads, Rockets, Ships
* :white_check_mark: externalize api urls into config/constants file
* ~~replace `axios` with built-in `fetch`~~ --> axios is fine, extra import not the worst
* speed up loading ~~by configuring `useQuery` to initially load 5-10 most interesting results, and subsequently the rest~~ --> API doesn't allow parameters, so for v1.0 all results will just be loaded. After migration to [Launch Library 2](https://thespacedevs.com/llapi), will optimize app according to LL2 api's options.
* :white_check_mark: Since [SpaceX-API](github.com/r-spacex/SpaceX-API) has apparently [been stale](https://github.com/r-spacex/SpaceX-API/issues/1243) since October, 2022, this client app has migrated to the new API. 
* Define per page interesting filter and search options. E.g. "launch is crewed or not".

### Current dev status
* [DONE] Switched to new API at https://github.com/r-spacex/SpaceX-API
* [DONE] Launches page shows all launches
* [WIP] Add pages for all other endpoints
* [] Add page: `/` -> Welcome Page
* [WIP] Pages to add: `Astronauts`, `Spacestation`, `Spacewalks`
* [] Add `detail` pages for spacecraft, astronauts, etc.
* [] Potentially: add description header to some/all pages.
* First: add all entity and other relevnat pages.
* THEN: extract commonanlities: types, api endpoint constants, fetchDataFunction, 
* Pagination should be separate component
* add guards + colored label for what's active/in-orbit or not
* For every status or 'one of an enum', display all options and highlight the valid one.
* fix type proliferation
* 
