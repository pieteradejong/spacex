import { FC } from 'react';
import { Launch } from '../types/Launch';

const LaunchComp: FC<{ launch: Launch }> = ({ launch }) => {
    return (
        <div className='launch'>
            <h3>Launch</h3>
            <p>Flight number: {launch.flight_number}</p>
            <p>Rocket number: {launch.rocket}</p>
            <p>Launch date: {launch.date_unix}</p>
        </div>
    );
}

export default LaunchComp;
