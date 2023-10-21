import { useContext, useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./shared/Navbar";
import { AppContext } from "./contextProvider/ContextProvider";

const App = () => {
    const { setHeaderBackgroundColor, setMainContentBackgroundColor, setTextDivState1, setTextDivState2, setTextDivState3, setTextDivState4, setTextDivState5, setTextDivState6 } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true);

    const colors = {
        section1: '#3F2CAA', // purple
        section2: '#01B5AC', // aqua
        section3: '#19181E', // black
        section4: '#23252C' // grey
    }

    useEffect(() => {
        const purpleSection = document.getElementById('purple-section');
        const divs = document.getElementById('zoom-div');
        const divs2 = document.getElementById('zoom-div-2');

        const handleScroll = () => {
            const div = purpleSection.getBoundingClientRect();
            console.log(div);
            // Background color transition
            if (div.top <= (window.innerHeight * 80 / 100) && div.top > (-(window.innerHeight * 50 / 100))) {
                console.log('section 1', div.top);
                setMainContentBackgroundColor(colors.section1);
            }
            if (div.top < (-282) && div.top >= (-881)) {
                // console.log('section 2', div.top);
                setHeaderBackgroundColor(colors.section2);
                setMainContentBackgroundColor(colors.section2);
            }
            if (div.top < (-881) && div.top >= (-2381)) {
                // console.log('section 3', div.top);
                setHeaderBackgroundColor(colors.section3);
                setMainContentBackgroundColor(colors.section3);
            }
            if (div.top < (-2381) && div.top >= (-5281)) {
                // console.log('section 4', div.top);
                setHeaderBackgroundColor(colors.section4);
                setMainContentBackgroundColor(colors.section4);
            }
            if (div.top < (-5281) && div.top >= (-6181)) {
                // console.log('section 3', div.top);
                setHeaderBackgroundColor(colors.section3);
                setMainContentBackgroundColor(colors.section3);
            }
            if (div.top < (-6181) && div.top >= (-7481)) {
                // console.log('section 4', div.top);
                setHeaderBackgroundColor(colors.section4);
                setMainContentBackgroundColor(colors.section4);
            }
            else if (div.top > (window.innerHeight * 80 / 100)) {
                // console.log('default', div.top);
                setHeaderBackgroundColor('#000');
                setMainContentBackgroundColor('#000');
            }

            // Text transition
            if (div.top <= 119 && div.top >= -881) {
                console.log('text open1', div.top);
                setTextDivState1('open');
            } else {
                console.log('text close1', div.top);
                setTextDivState1('closed');
            }
            // Text transition
            if (div.top < -281 && div.top >= -1681) {
                console.log('text open2', div.top);
                setTextDivState2('open');
            } else {
                console.log('text close2', div.top);
                setTextDivState2('closed');
            }

            // Text transition
            if (div.top < -981 && div.top >= -2481) {
                console.log('text open3', div.top);
                setTextDivState3('open');
            } else {
                console.log('text close3', div.top);
                setTextDivState3('closed');
            }
            // Text transition
            if (div.top <= -2581 && div.top >= -8121) {
                console.log('text open4', div.top);
                setTextDivState4('open');
            } else {
                console.log('text close4', div.top);
                setTextDivState4('closed');
            }
            // Text transition
            if (div.top <= -5500 && div.top >= -5800) {
                console.log('text open5', div.top);
                divs.setAttribute('data-zoom', 'true');
                setTextDivState5('open');
            } else {
                console.log('text close5', div.top);
                divs.setAttribute('data-zoom', 'false');
                setTextDivState5('closed');
            }
            // Text transition
            if (div.top <= -6240 && div.top >= -6840) {
                console.log('text open6', div.top);
                setTextDivState6('open');
            } else {
                console.log('text close6', div.top);
                setTextDivState6('closed');
            }
            // Text transition
            if (div.top <= -6340 && div.top >= -6840) {
                console.log('text open6', div.top);
                divs2.setAttribute('data-zoom', 'true');
            } else {
                console.log('text close6', div.top);
                divs2.setAttribute('data-zoom', 'false');
            }
            // Header background color transition
            if (div.top <= (window.innerHeight * 10 / 100) && div.bottom > (window.innerHeight * 40 / 100)) {
                // console.log('header', div.top);
                setHeaderBackgroundColor(colors.section1);
            }



            const div4 = document.getElementById('final')

            if (window.scrollY > window.innerHeight) {
                console.log("true");
                div4.setAttribute('data-show', 'true')
            } else {
                console.log("false");
                div4.setAttribute('data-show', 'false')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollRestoration />
        </>
    );
};

export default App;