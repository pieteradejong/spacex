import { FC } from 'react';
import { useQuery } from 'react-query'
import axios from 'axios';
import { Crew } from 'types/Crew';
import CrewComp from '../components/CrewComp';
import { BASE_URL, ENDPOINT_CREWS_ALL } from '../constants';

const CrewsPage: FC = () => {
    const fetchLaunches = async () => {
      const { data } = await axios.get<Crew[]>(`${BASE_URL}${ENDPOINT_CREWS_ALL}`);
      return data;
    }
  
    const { data } = useQuery<Crew[]>('launches', fetchLaunches);
  
    return (
      <div>
            {data?.map((crew) => 
              (
                <CrewComp crew={crew} key={crew.id} />
              )
            )}
        </div>
    );
  }
  
  export default CrewsPage;
  