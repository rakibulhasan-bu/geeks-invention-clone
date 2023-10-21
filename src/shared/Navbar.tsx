import { useContext, useState } from "react";
import { AppContext } from "../contextProvider/ContextProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { headerBackgroundColor } = useContext(AppContext)
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const colors = {
        section1: '#3F2CAA', // purple
        section2: '#01B5AC', // aqua
        section3: '#19181E', // black
        section4: '#23252C' // grey
    }
    let headerColor;
    if (headerBackgroundColor === colors.section1) {
        headerColor = `bg-[#3F2CAA]`
    }
    if (headerBackgroundColor === colors.section2) {
        headerColor = `bg-[#01B5AC]`
    }
    if (headerBackgroundColor === colors.section3) {
        headerColor = `bg-[#19181E]`
    }
    if (headerBackgroundColor === colors.section4) {
        headerColor = `bg-[#23252C]`
    }
    return (
        <header
            className={`p-4 lg:fixed z-20 top-0 flex flex-row justify-between items-center w-screen px-9 py-8 lg:h-[10vh] lg:opacity-80 ${headerColor}`}
        >
            <NavLink to='/'>
                <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/geeks-logo-white_j3wfe8.svg" alt="" height="25" />
            </NavLink>

            <ul
                className="lg:w-[45vw] text-white text-sm lg:flex flex-row justify-around items-center [&>*]:cursor-pointer [&>*]:pt-[5px] [&>*]:no-underline [&>*]:relative [&>*]:mx-1 hidden [&>*]:lg:opacity-100 [&>*]:opacity-100"
            >
                <NavLink to='/' className="underline-trans">HOME</NavLink>
                <NavLink to='/' className="underline-trans">WORKS</NavLink>
                <NavLink to='/' className="underline-trans">TECHNOLOGIES</NavLink>
                <NavLink to='/' className="underline-trans">SERVICES</NavLink>
                <NavLink to='/' className="underline-trans">COMPANY</NavLink>
                <NavLink to='/' className="underline-trans">CONTACTS</NavLink>
            </ul>

            <div
                id="sandwich"
                onClick={toggleModal}
                style={{
                    position: isModalOpen ? 'fixed' : 'static',
                    zIndex: isModalOpen ? 50 : 'auto',
                    top: isModalOpen ? '2.13rem' : 'auto',
                    right: isModalOpen ? '2.25rem' : 'auto',
                }}

                className="top-6 right-7 p-2 flex flex-col justify-center w-12 items-stretch lg:!hidden gap-1 cursor-pointer"
            >
                <div className={isModalOpen ? 't-rotate bg-white w-full h-1' : 'bg-white w-full h-1'}></div>
                <div className={isModalOpen ? 'hidden bg-white w-full h-1' : 'bg-white w-full h-1'}></div>
                <div className={isModalOpen ? 'b-rotate bg-white w-full h-1' : 'bg-white w-full h-1'}></div>
            </div>

            <ul
                data-modal={isModalOpen ? "open" : "closed"}
                role="dialog"
                id="modal"
                className="fixed z-40 w-screen h-screen inset-0 backdrop-blur-sm bg-black flex-col justify-center items-center [&>*]:cursor-pointer [&>*]:pt-[5px] [&>*]:no-underline [&>*]:relative text-white text-xl [&>*]:my-3 hidden"
            >
                <li style={{ animationDelay: "0s" }} className="underline-trans l-slide">HOME</li>
                <li style={{ animationDelay: "0.1s" }} className="underline-trans r-slide">
                    WORKS
                </li>
                <li style={{ animationDelay: "0.2s" }} className="underline-trans l-slide">
                    TECHNOLOGIES
                </li>
                <li style={{ animationDelay: "0.3s" }} className="underline-trans r-slide">
                    SERVICES
                </li>
                <li style={{ animationDelay: "0.4s" }} className="underline-trans l-slide">
                    COMPANY
                </li>
                <li style={{ animationDelay: "0.5s" }} className="underline-trans r-slide">
                    CONTACTS
                </li>
            </ul>
        </header>
    );
};

export default Navbar;