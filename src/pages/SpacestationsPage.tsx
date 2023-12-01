import { FC } from 'react';
import { useQuery } from 'react-query'
import { SpacestationApiResponse } from 'types/types';
import { BASE_URL, ENDPOINT_SPACESTATION } from '../constants';
import SpacestationComp from '../components/SpacestationComp';
import axios from 'axios';
import { useState } from 'react';

const fetchSpacestation = async (url: string): Promise<SpacestationApiResponse> => {
  const { data } = await axios.get(url);
  return data;
};


const SpacestationsPage: FC = () => {
  const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}${ENDPOINT_SPACESTATION}`);
  const { data, isLoading, error } = useQuery<SpacestationApiResponse, Error>(['spacestation', currentPageUrl], () => fetchSpacestation(currentPageUrl));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.results.map((spacestation) => (
          <SpacestationComp spacestation={spacestation} key={spacestation.id} />
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
};

export default SpacestationsPage;
