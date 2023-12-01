import { FC } from 'react';
import { Spacestation } from '../types/types';
import { truncate } from '../utils';

const SpacestationComp: FC<{ spacestation: Spacestation }> = ({ spacestation }) => {
    return (
        <div className='spacecraft rounded-lg p-4 w-72'>
            <span className='text-lg font-bold'>{spacestation.name}</span>
            <p>Description: {truncate(spacestation.description, 30)}</p>
            <img src={spacestation.image_url} alt={spacestation.name} className='w-full' />
        </div>
    );
}

export default SpacestationComp;
