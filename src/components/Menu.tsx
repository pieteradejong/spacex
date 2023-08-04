import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type MenuItemProps = {
    titles: string[];
}
const Menu: FC<MenuItemProps> = ({ titles }) => {
    return (
        <div className='flex justify-center pt-1 pb-1 border-b border-solid border-white'>
        <ul className='flex p-0 list-none'>
            {
                titles.map((title, ix) => (
                    <li key={ix} className='ml-4 mr-4 text-2xl hover:border-b-2 hover:border-red-500'>
                        <NavLink to={"/" + title.toLowerCase()} className={ ({isActive}) => isActive ? 'font-extrabold' : '' }>{title}</NavLink>
                    </li>
                ))
            }
        </ul>
        </div>
    );
}

export default Menu;
