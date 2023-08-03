import { FC } from 'react';
import { Link } from 'react-router-dom';

type MenuItemProps = {
    titles: string[];
}

const Menu: FC<MenuItemProps> = ({ titles }) => {
    return (
        <div className='flex justify-center'>
        <ul className='flex p-0 list-none'>
            {
                titles.map((title, ix) => (
                    <li key={ix} className='ml-4 mr-4 text-2xl'>
                        <Link to={"/" + title.toLowerCase()}>{title}</Link>
                    </li>
                ))
            }
        </ul>
        </div>
    );
}

export default Menu;
