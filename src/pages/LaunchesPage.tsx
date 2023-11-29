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
      <div className="pagination mt-6 mb-4 px-4 py-3 rounded-lg flex justify-center items-center gap-4">
        <button 
          onClick={() => setCurrentPageUrl(data?.previous ?? '')} 
          disabled={!data?.previous}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          Previous
        </button>
        <button 
          onClick={() => setCurrentPageUrl(data?.next ?? '')} 
          disabled={!data?.next}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LaunchesPage;
