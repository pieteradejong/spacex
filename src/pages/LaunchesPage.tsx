import { FC } from 'react';
import LaunchComp from '../components/LaunchComp';
import { useQuery } from 'react-query'
import { BASE_URL, ENDPOINT_LAUNCHES_UPCOMING } from '../constants';
import { Launch } from 'types/Launch';
import { LaunchApiResult } from 'types/LaunchApiResult';
import axios, { AxiosResponse } from 'axios';
// import { useState } from 'react';

const LaunchesPage: FC = () => {

  // const [launches, setLaunches] = useState<Launch[]>([]);

  async function fetchUpcomingLaunches(): Promise<Launch[]> {
      let launches: Launch[] = [];
      let nextUrl: string | null = `${BASE_URL}${ENDPOINT_LAUNCHES_UPCOMING}`;

      while (nextUrl) {
          const response: AxiosResponse<LaunchApiResult> = await axios.get(nextUrl);

          if (response.status !== 200) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          launches = [...launches, ...response.data.results];
          // new:
          //setLaunches((prev) => [...prev, ...response.data.results]);
          
          nextUrl = response.data.next;
      }
      console.log(launches);
      return launches;
    }
  
  const { data } = useQuery<Launch[]>('launchesupcoming', fetchUpcomingLaunches);
  
  // TODO: use axios or useQuery to fetch all launches, and start displaying after one result is fetched,
  // and continue fetching in the background. 
  
  return (
    <div>
          {data?.map((launch) => 
            (
              <LaunchComp launch={launch} key={launch.slug} />
            )
          )}
      </div>
  );
}

export default LaunchesPage;
