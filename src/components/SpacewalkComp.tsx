import { FC } from 'react';
import { Spacewalk } from '../types/types';

const SpacewalkComp: FC<{ spacewalk: Spacewalk }> = ({ spacewalk }) => {
    return (
        <div className='launch rounded-lg p-4 w-72'>
            <div className='text-lg font-bold'>Name: {spacewalk.name}</div>
            <div>Duration: {spacewalk.duration}</div>
            <div>Location: {spacewalk.location}</div>
            <div>Crew size: {spacewalk.crew.length}</div>
        </div>
    );
}

export default SpacewalkComp;

