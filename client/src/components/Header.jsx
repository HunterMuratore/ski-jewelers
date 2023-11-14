import { NavLink } from 'react-router-dom'

const links = [
    { name: 'Home', to: '/' },
    { name: 'Gift Ideas', to: '/gifts' },
    { name: 'Specials', to: '/specials' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact', to: 'contact' },
]

function Header() {
    return (
        <header className="flex items-center justify-between py-1 pl-3 pr-3">
            <NavLink to="/">SKI JEWELERS</NavLink>

            <nav className="font-semibold my-4 text-sm sm:text-md lg:text-lg">
                {links.map((link, i) => (
                    <NavLink key={i} to={link.to}>{link.name}</NavLink>
                ))}
            </nav>
        </header>
    )
}

export default Header