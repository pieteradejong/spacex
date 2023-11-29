import { FC } from 'react';
import { Launch } from '../types/types';
// import { extractDateFromUTC } from '../utils';

const LaunchComp: FC<{ launch: Launch }> = ({ launch }) => {
    return (
        <div className='launch rounded-lg p-4 w-72'>
            <span className='text-lg font-bold'>{launch.name}</span>
            <p>Name: {launch.slug}</p>
            <p>Spacecraft used: {launch.name}</p>
            <p>Mission: {launch.mission.name}</p>
            <p>Status: {launch.status.name}</p>
            <p>Type: {launch.type}</p>
            {launch.image && (
                <div className='mt-3'>
                    <img src={launch.image} alt={launch.name}  className='w-full h-auto' style={{ width: '100px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default LaunchComp;
