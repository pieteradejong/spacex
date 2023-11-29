// import { FC } from 'react';
// import { useQuery } from 'react-query'
// import { Rocket } from 'types/types';
// import { BASE_URL, ENDPOINT_ROCKET } from '../constants';
// import RocketComp from '../components/RocketComp';
// import axios from 'axios';

// const fetchRockets = async (): Promise<Rocket[]> => {
//     const { data } = await axios.get(`${BASE_URL}${ENDPOINT_ROCKET}`);
//     return data;
//   };


// const RocketsPage: FC = () => {

//     const { data, isLoading, error } = useQuery<Rocket[], Error>('launches', fetchRockets);
    
//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>An error has occurred: {error.message}</div>;
  
//     return (
//       <div className="flex flex-wrap justify-center gap-4">
//             {data?.map((launch) => 
//               (
//                 <RocketComp rocket={launch} key={launch.id} />
//               )
//             )}
//         </div>
//     );
//   }
  
//   export default RocketsPage;
  