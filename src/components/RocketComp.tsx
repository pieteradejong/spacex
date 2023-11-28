import { FC } from 'react';
import { Rocket } from '../types/types';

const RocketComp: FC<{ rocket: Rocket }> = ({ rocket }) => {
    return (
        <div className='launch w-fit rounded-lg'>
            <span className='text-lg'>Rocket</span>
            <p>Rocket ID: {rocket.id}</p>
            <p>Rocket Name: {rocket.name}</p>
        </div>
    );
}

export default RocketComp;
