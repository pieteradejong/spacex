import { FC } from 'react';
import { Launch } from '../types/Launch';
import { extractDateFromUTC } from '../utils';

const LaunchComp: FC<{ launch: Launch }> = ({ launch }) => {
    return (
        <div className='launch w-fit rounded-lg'>
            <span className='text-lg'>Launch</span>
            <p>Flight number: {launch.flight_number}</p>
            <p>Rocket number: {launch.name}</p>
            <p>Launch date: {extractDateFromUTC(launch.date_utc)}</p>
        </div>
    );
}

export default LaunchComp;
