import { FC } from 'react';
import LaunchComp from '../components/LaunchComp';
import { Launch } from 'types/Launch';
import { useQuery } from 'react-query'
// import { URL_LAUNCHES_UPCOMING } from 'constants';
import axios from 'axios';

const LaunchesPage: FC = () => {
  const fetchLaunches = async () => {
    const { data } = await axios.get<Launch[]>("https://api.spacexdata.com/latest/launches");
    return data;
  }

  const { data } = useQuery<Launch[]>('launches', fetchLaunches);

  return (
    <div>
          {data?.map((launch) => 
            (
              <LaunchComp launch={launch} />
            )
          )}
      </div>
  );
}

export default LaunchesPage;
