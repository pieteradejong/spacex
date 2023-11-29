import { FC } from 'react';
import { Spacecraft } from '../types/types';
import { truncate } from '../utils';

const SpacecraftComp: FC<{ spacecraft: Spacecraft }> = ({ spacecraft }) => {
    return (
        <div className='spacecraft rounded-lg p-4 w-72'>
            <span className='text-lg font-bold'>{spacecraft.name}</span>
            <p>Description: {truncate(spacecraft.description, 30)}</p>
            <p>Number of flights: {spacecraft.flights_count}</p>
            <p>Status: {spacecraft.status.name}</p>
        </div>
    );
}

export default SpacecraftComp;
