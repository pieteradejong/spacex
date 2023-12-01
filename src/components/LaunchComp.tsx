import { FC } from 'react';
import { Launch } from '../types/types';

const LaunchComp: FC<{ launch: Launch }> = ({ launch }) => {
    return (
        <div className='launch rounded-lg p-4 w-72'>
            <span className='text-lg font-bold'>{launch.name}</span>
            <div>Name: {launch.slug}</div>
            <div>Spacecraft used: {launch.name}</div>
            <div>Mission: {launch.mission.name}</div>
            <div>Status: {launch.status.name}</div>
            <div>Type: {launch.type}</div>
            {launch.image && (
                <div className='mt-3'>
                    <img src={launch.image} alt={launch.name}  className='w-full h-auto' style={{ width: '100px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default LaunchComp;
