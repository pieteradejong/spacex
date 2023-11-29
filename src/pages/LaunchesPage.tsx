import { FC } from 'react';
import LaunchComp from '../components/LaunchComp';
import { useQuery } from 'react-query'
import { BASE_URL, ENDPOINT_LAUNCHES } from '../constants';
import { LaunchApiResponse } from 'types/types';
import axios from 'axios';
import { useState } from 'react';

const fetchLaunches = async (url: string): Promise<LaunchApiResponse> => {
  const { data } = await axios.get(url);
  return data;
};

const LaunchesPage: FC = () => {

  const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}${ENDPOINT_LAUNCHES}`);
  const { data, isLoading, error } = useQuery<LaunchApiResponse, Error>(['launches', currentPageUrl], () => fetchLaunches(currentPageUrl));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.results?.map((launch) => (
          <LaunchComp launch={launch} key={launch.slug} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPageUrl(data?.previous ?? '')} disabled={!data?.previous}>
          Previous
        </button>
        <button onClick={() => setCurrentPageUrl(data?.next ?? '')} disabled={!data?.next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default LaunchesPage;
