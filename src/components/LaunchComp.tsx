import { FC } from 'react';
import { Launch } from '../types/types';
// import { extractDateFromUTC } from '../utils';

const LaunchComp: FC<{ launch: Launch }> = ({ launch }) => {
    return (
        <div className='launch w-fit rounded-lg'>
            <span className='text-lg'>Launch</span>
            <p>Launch id: {launch.id}</p>
            <p>Launch name: {launch.slug}</p>
            <p>Launch rocket: {launch.name}</p>
        </div>
    );
}

export default LaunchComp;
