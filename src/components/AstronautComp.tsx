import { FC } from 'react';
import { Astronaut } from '../types/types';

const AstronautComp: FC<{ astronaut: Astronaut }> = ({ astronaut }) => {
    return (
        <div className='launch rounded-lg p-4 w-72'>
            <span className='text-lg font-bold'>{astronaut.name}</span>
            <span>{astronaut.agency.name}</span>
            <span>{astronaut.status.name}</span>
            <span>{astronaut.flights_count}</span>
            <span>{astronaut.spacewalks_count}</span>
            {astronaut.profile_image_thumbnail && (
                <div className='mt-3'>
                    <img src={astronaut.profile_image_thumbnail} alt={astronaut.name}  className='w-full h-auto' style={{ width: '100px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
}

export default AstronautComp;

