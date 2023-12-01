import { FC } from 'react';
import { Spacecraft } from '../types/types';
import { truncate } from '../utils';

const SpacecraftComp: FC<{ spacecraft: Spacecraft }> = ({ spacecraft }) => {
    return (
        <div className='spacecraft rounded-lg p-4 w-72'>
            <span className='text-lg font-bold'>{spacecraft.name}</span>
            <p>Description: {truncate(spacecraft.description, 30)}</p>
            <div>Number of flights: {spacecraft.flights_count}</div>
            <div>Status: {spacecraft.status.name}</div>
        </div>
    );
}

export default SpacecraftComp;
