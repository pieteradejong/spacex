import { FC } from 'react';

type MenuItemProps = {
    titles: string[];
    // onChangePage: (destinationPage: string) => void;
}

const Menu: FC<MenuItemProps> = ({ titles }) => {
    return (
        <div className='flex justify-center'>
        <ul className='flex p-0 list-none'>
            {
                titles.map((str, ix) => (
                    <li key={ix} className='ml-4 mr-4 text-2xl'>{str}</li>
                ))
            }
        </ul>
        </div>
    );
}

export default Menu;
