import Logo from "@/assets/images/Logo.png"
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <nav className="py-3 container mx-auto flex justify-between">
            <NavLink to="/my-portfolio">
                <img src={Logo} className="rounded-full object-cover h-[70px]" alt="Faezeh(raha) kashir" width={70} height={70} />
            </NavLink>
            <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li>
                        <NavLink to="/my-portfolio/about" className="text-gray-900 font-bold hover:underline">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-portfolio/contact" className="text-gray-900 font-bold hover:underline">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-portfolio/cv" className="text-gray-900 font-bold hover:underline">
                            CV</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;