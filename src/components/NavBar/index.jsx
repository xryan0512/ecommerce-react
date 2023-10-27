import { NavLink } from "react-router-dom"

const NavBar = () => {
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center  gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center  gap-3">
                <li className="text-black/60">
                    <NavLink to='/'>
                        test@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sing-in'>
                        Sign in
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>
                        🛒
                    </NavLink>
                </li>

            </ul>
        </nav>
    )

}


export default NavBar;