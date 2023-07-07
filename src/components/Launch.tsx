import { FC } from 'react';
import { Launch } from '../types/Launch';

const Launch: FC<Launch> = (props) => {
    return (
        <div>
            <p>Launch</p>
            <p>{props.flight_number}</p>
            <p>{props.name}</p>
            <p>{props.date_utc}</p>
        </div>
    );
}

export default Launch;
