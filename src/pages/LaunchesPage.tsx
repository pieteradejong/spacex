import { FC } from 'react';
import LaunchComp from '../components/LaunchComp';

import { useQuery } from 'react-query'
import { BASE_URL, ENDPOINT_LAUNCHES_UPCOMING } from '../constants';
import { Launch } from 'types/Launch';
import { LaunchApiResult } from 'types/LaunchAPiResult';
import axios, { AxiosResponse } from 'axios';

const LaunchesPage: FC = () => {

  async function fetchAllLaunches(): Promise<Launch[]> {
      let launches: Launch[] = [];
      let nextUrl: string | null = `${BASE_URL}${ENDPOINT_LAUNCHES_UPCOMING}`;

      while (nextUrl) {
          const response: AxiosResponse<LaunchApiResult> = await axios.get(nextUrl);

          if (response.status !== 200) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          launches = [...launches, ...response.data.results];
          nextUrl = response.data.next;
      }
      console.log(launches);
      return launches;
    }


  const { data } = useQuery<Launch[]>('launch', fetchAllLaunches);
  
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
