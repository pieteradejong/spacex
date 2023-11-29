import { FC } from 'react';
import { Spacecraft } from '../types/types';

const SpacecraftComp: FC<{ spacecraft: Spacecraft }> = ({ spacecraft }) => {
    return (
        <div className='launch w-fit rounded-lg'>
            <span className='text-lg'>Rocket</span>
            <p>Rocket ID: {spacecraft.id}</p>
        </div>
    );
}

export default SpacecraftComp;
