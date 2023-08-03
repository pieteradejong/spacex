import { FC } from 'react';
import { useQuery } from 'react-query'
import { Rocket } from 'types/Rocket';
import RocketComp from '../components/RocketComp';
import axios from 'axios';
import { BASE_URL, ENDPOINT_ROCKETS_ALL } from '../constants';

const RocketsPage: FC = () => {
    const fetchLaunches = async () => {
      const { data } = await axios.get<Rocket[]>(`${BASE_URL}${ENDPOINT_ROCKETS_ALL}`);
      return data;
    }
  
    const { data } = useQuery<Rocket[]>('launches', fetchLaunches);
  
    return (
      <div>
            {data?.map((rocket) => 
              (
                <RocketComp rocket={rocket} key={rocket.id} />
              )
            )}
        </div>
    );
  }
  
  export default RocketsPage;
  