# SpaceX

All things SpaceX.

* menu items to add: Capsules, Cores, Crew, Dragons, Payloads, Rockets, Ships

* source of inspiration for color schema and imagery: https://www.rocketlabusa.com/


## TODOs
* :white_check_mark: externalize api urls into config/constants file
* ~~replace `axios` with built-in `fetch`~~ --> axios is fine, extra import not the worst
* speed up loading by configuring `useQuery` to initially load 5-10 most interesting results, and subsequently the rest.
* add tab only available via login. Implement both via JWT and username/pwd.
  