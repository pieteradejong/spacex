import { FC } from 'react';
import { Crew } from '../types/Crew';

const CrewComp: FC<{ crew: Crew }> = ({ crew }) => {
    return (
        <div className='launch w-fit rounded-lg'>
            <span className='text-lg'>Crew</span>
            <p>Crew ID: {crew.id}</p>
        </div>
    );
}

export default CrewComp;
