import { FC } from 'react';
import { Launch } from '../types/Launch';
// import { extractDateFromUTC } from '../utils';

const LaunchComp: FC<{ launch: Launch }> = ({ launch }) => {
    return (
        <div className='launch w-fit rounded-lg'>
            <span className='text-lg'>Launch</span>
            <p>Launch id: {launch.id}</p>
            <p>Launch name: {launch.name}</p>
            {/* <p>Launch net: {launch.net}</p> */}
            <p>Launch slug: {launch.slug}</p>
            <p>Launch url: {launch.url}</p>
            {/* <p>Launch last updated: {extractDateFromUTC(launch.last_updated)}</p> */}
        </div>
    );
}

export default LaunchComp;
