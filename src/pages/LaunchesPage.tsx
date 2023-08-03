import { FC } from 'react';
import LaunchComp from '../components/LaunchComp';
import { Launch } from 'types/Launch';
import { useQuery } from 'react-query'
import { BASE_URL, ENDPOINT_LAUNCHES_ALL } from '../constants';
import axios from 'axios';

const LaunchesPage: FC = () => {
  const fetchLaunches = async () => {
    const { data } = await axios.get<Launch[]>(`${BASE_URL}${ENDPOINT_LAUNCHES_ALL}`);
    return data;
  }

  const { data } = useQuery<Launch[]>('launches', fetchLaunches);

  return (
    <div>
          {data?.map((launch) => 
            (
              <LaunchComp launch={launch} key={launch.name} />
            )
          )}
      </div>
  );
}

export default LaunchesPage;
