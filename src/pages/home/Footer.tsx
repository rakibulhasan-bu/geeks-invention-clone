const Footer = () => {
    return (
        <>
            <div className="lg:h-screen lg:w-screen"></div>
            <div
                id="final"
                data-show="false"
                className="pt-14 px-4 pb-5 w-screen h-screen bg-header lg:fixed lg:inset-0 lg:z-10 end-section"
            >
                {/* <!-- first section --> */}
                <div className="py-16 self-center">
                    <h1 className="pb-5 px-9 text-center text-4xl md:text-5xl">
                        Get to know us better!
                    </h1>
                    <p className="px-7 pb-9 text-center text">
                        It is a pleasure to have you on our website. Let us know if there's an
                        opportunity to do something together.
                    </p>

                    <div className="grid">
                        <button
                            className="mx-auto border border-[#ff5300] text-white bg-red-btn py-3 px-7 rounded-3xl hover:bg-white hover:text-red-btn md:mb-24"
                        >
                            Drop us a message
                        </button>
                    </div>
                </div>

                <div
                    className="pt-14 pb-6 gap-4 px-6 self-end md:grid md:grid-cols-footer md:grid-rows-footer md:pt-24 lg:grid-cols-footer-lg lg:grid-rows-none"
                >
                    <div className="flex flex-col items-center md:items-start">
                        <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/geeks-logo-white_j3wfe8.svg" alt="" />
                        <p className="text-center text-[#B9BABB] md:text-start">
                            447 Broadway, 2nd Floor Suite #772, New York 10013, United States
                            +1-347-535-0004
                        </p>
                    </div>

                    <ul
                        className="end-links place-items-center mt-4 gap-4 justify-around items-center [&>*]:no-underline [&>*]:relative [&>*]:cursor-pointer md:flex md:flex-wrap"
                    >
                        <li className="underline-trans">Works</li>
                        <li className="underline-trans">Technologies</li>
                        <li className="underline-trans">Services</li>
                        <li className="underline-trans">Company</li>
                        <li className="underline-trans">Contacts</li>
                        <li className="text-center underline-trans">Terms and Conditions</li>
                        <li className="underline-trans">Privacy Policy</li>
                    </ul>

                    <div className="grid">
                        <button
                            className="mx-auto my-5 border border-[#fff] text-white rounded-3xl py-3 px-7 hover:bg-white hover:text-black"
                        >
                            Stay tuned for our updates
                        </button>
                    </div>
                </div>

                <p className="text-center mb-3 text-[#454649] md:hidden">
                    &#169; Copyright 2023 . All Rights Reserved
                </p>
                <p className="text-center mb-5 hidden text-[#454649] md:block">
                    &#169; Copyright 2023 &mdash; Mobile App Design and Development Company.
                    All Rights Reserved
                </p>
            </div>
        </>
    );
};

export default Footer;