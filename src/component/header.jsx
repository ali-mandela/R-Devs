import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { GiMultiDirections } from "react-icons/gi";

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Projects", path: "/projects" },
        { id: 3, name: "About", path: "/about" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "Career", path: "/career" }
    ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <header className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">R-DEV</h1>
                    <p className="text-sm">Reliable, Responsive, Resilient</p>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    {links.map(link => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="hover:underline"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/hire-us"
                        className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-gray-200 transition ease-in-out duration-150"
                    >
                        Hire us
                    </Link>
                </nav>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-4xl focus:outline-none"
                    >
                        {isMenuOpen ? <GiMultiDirections /> : <CiMenuFries />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        {links.map(link => (
                            <Link
                                key={link.id}
                                to={link.path}
                                className="text-white hover:underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/hire-us"
                            className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-gray-200 transition ease-in-out duration-150"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Hire us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
