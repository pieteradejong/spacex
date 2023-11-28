import { FC } from 'react';
import LaunchComp from '../components/LaunchComp';
import { useQuery } from 'react-query'
import { BASE_URL, ENDPOINT_LAUNCHES } from '../constants';
import { Launch } from 'types/types';
import axios from 'axios';

const fetchLaunches = async (): Promise<Launch[]> => {
  const { data } = await axios.get(`${BASE_URL}${ENDPOINT_LAUNCHES}`);
  return data;
};

const LaunchesPage: FC = () => {

  const { data, isLoading, error } = useQuery<Launch[], Error>('launches', fetchLaunches);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className="flex flex-wrap justify-center gap-4">
          {data?.map((launch) => 
            (
              <LaunchComp launch={launch} key={launch.id} />
            )
          )}
      </div>
  );
}

export default LaunchesPage;
