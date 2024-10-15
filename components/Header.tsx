const Header = () => {
    return (
        <header className="px-10 py-5 fixed top-0 w-full left-0 z-10  backdrop-blur-sm">
            <div className="flex items-center">
                <div className="font-bold">
                    <a href="#" className="">AI4LASSA</a>
                </div>

                <nav className="mx-auto hidden md:block">
                    <ul className="flex gap-3 lg:gap-5">
                        {[
                            // { navItem: "Home", link: '#' },
                            { navItem: "About", link: '#' },
                            { navItem: "Forecast", link: '#' },
                            { navItem: "Report a Case", link: '#' },
                            { navItem: "Resources", link: '#' },
                            { navItem: "Contact", link: '#' }
                        ].map((item, index) => (
                            <li key={index} className="font-medium text-sm hover:bg-btn hover:text-white rounded-lg p-3 px-4 transition-colors duration-300"><a href={item.link}>{item.navItem}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header