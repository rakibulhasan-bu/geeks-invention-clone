import { useContext } from "react";
import { AppContext } from "../../contextProvider/ContextProvider";

const Main = () => {
    const { mainContentBackgroundColor, textDivState1, textDivState2, textDivState3, textDivState4, textDivState5, textDivState6 } = useContext(AppContext)
    const colors = {
        section1: '#3F2CAA', // purple
        section2: '#01B5AC', // aqua
        section3: '#19181E', // black
        section4: '#23252C' // grey
    }
    let purpleColor;
    if (mainContentBackgroundColor === colors.section1) {
        purpleColor = `bg-[#3F2CAA]`
    }
    if (mainContentBackgroundColor === colors.section2) {
        purpleColor = `bg-[#01B5AC]`
    }
    if (mainContentBackgroundColor === colors.section3) {
        purpleColor = `bg-[#19181E]`
    }
    if (mainContentBackgroundColor === colors.section4) {
        purpleColor = `bg-[#23252C]`
    }
    return (
        <div id="main-content" className={`lg:relative lg:z-[11] ${purpleColor}`}>
            {/* <!-- purle div --> */}
            <div
                id="purple-section"
                className="bg-purple-sec lg:bg-inherit py-6 px-3 min-h-screen w-screen box-border md:grid md:items-center d-ltr font-normal md:px-12 lg:px-36 lg:pt-14"
            >
                <img
                    className="g-img"
                    src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/purple-sec-img-industry-fintech_g1zozm.svg"
                    alt=""
                />

                {/* <!-- text --> */}
                <div data-state={textDivState1} className="mt-6 g-text">
                    <h1 className="mb-2 text-6xl">Fintech Solution</h1>
                    <p className="text-2xl lg:text-3xl opacity-60">
                        Transforming Fintech with AI
                    </p>

                    {/* <!-- tags --> */}
                    <div
                        className="my-8 [&>*]:mx-2 [&>*]:my-2 [&>*]:p-2 [&>*]:px-4 [&>*]:rounded-3xl [&>*]:bg-[#ffffff1c] [&>*]:text-sm flex-wrap flex flex-row"
                    >
                        <span>Fraud detection</span>
                        <span>Transaction categorisation</span>
                        <span>Risk Scoring</span>
                    </div>

                    <p className="text-left text-xl font-normal mb-12">
                        Empower your financial institution with our advanced fintech
                        solutions. From real-time fraud detection to easy bookkeeping, our
                        software development services provide credit risk scoring for
                        accurate lending eligibility, transaction categorization for
                        seamless organization, and anomaly detection to safeguard your
                        assets
                    </p>

                    <div className="grid md:block">
                        <button
                            className="hover:bg-white border border-white group1 py-3 pl-5 pr-12 rounded-3xl m-auto hover:text-purple-sec"
                        >
                            <p id="purple-btn" className="relative text-xl">
                                See full case study
                            </p>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- aqua section --> */}
            <section
                id="section2"
                className="bg-aqua-sec lg:bg-inherit py-6 px-3 min-h-screen w-screen box-border font-normal md:px-12 lg:px-36 lg:pt-14"
            >
                <div className="md:grid md:items-center d-ltr gap-[5vw]">
                    <img className="g-text" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/aqua-sec-industry-iot_gbleif.webp" alt="" />

                    {/* <!-- text --> */}
                    <div data-state={textDivState2} className="mt-6 g-img">
                        <h1 className="mb-2 text-6xl">Industrial IoT</h1>
                        <p className="text-2xl lg:text-3xl opacity-60">
                            Providing a better connected experience
                        </p>

                        {/* <!-- tags --> */}
                        <div
                            className="my-8 [&>*]:mx-2 [&>*]:my-2 [&>*]:p-2 [&>*]:px-4 [&>*]:rounded-3xl [&>*]:bg-[#1DBDB5] [&>*]:text-sm flex-wrap flex flex-row"
                        >
                            <span>Connected manufacturing</span>
                            <span>Aviation</span>
                            <span>Smart Building</span>
                        </div>

                        <p className="text-left text-xl font-normal mb-12">
                            Revolutionize your industry with our innovative IoT solutions. Our
                            software development services offer connected manufacturing,
                            pollution control, smart transportation, and intelligent farming,
                            agriculture, and forestry. With our expertise, you can harness the
                            power of technology to increase efficiency, reduce waste, and
                            optimize operations for a sustainable future.
                        </p>

                        <div className="grid md:block">
                            <button
                                className="hover:bg-white border border-white group1 py-3 pl-5 pr-12 rounded-3xl m-auto hover:text-aqua-sec"
                            >
                                <p id="purple-btn" className="relative text-xl">
                                    See full case study
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- black section --> */}
            <section
                id="section3"
                className="bg-black-sec lg:bg-inherit py-6 px-3 min-h-screen w-screen box-border font-normal md:px-12 lg:px-36 lg:pt-14"
            >
                <div className="d-ltr md:grid md:items-center gap-[5vw] pb-20 md:pb-36">
                    <img
                        className="g-text"
                        src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811296/Website-assets/Geeks-invention/blac-sec-industry-education_oaajor.webp"
                        alt=""
                    />

                    {/* <!-- text --> */}
                    <div data-state={textDivState3} className="mt-6 g-img">
                        <h1 className="mb-2 text-6xl">Smart Education</h1>
                        <p className="text-2xl lg:text-3xl opacity-60">
                            Elevate your Education Institution
                        </p>

                        {/* <!-- tags --> */}
                        <div
                            className="my-8 [&>*]:mx-2 [&>*]:my-2 [&>*]:p-2 [&>*]:px-4 [&>*]:rounded-3xl [&>*]:bg-[#303035] [&>*]:text-sm flex-wrap flex flex-row"
                        >
                            <span>Learning Management</span>
                            <span>Course offering</span>
                            <span>Professional Training</span>
                        </div>

                        <p className="text-left text-xl font-normal mb-12">
                            Elevate your education institution with our comprehensive software
                            solutions. Learning management, course offerings, professional
                            training, certification, and school management tools to streamline
                            your operations and enhance your students' learning experience.
                            Trust us to provide the cutting-edge technology and support you
                            need to thrive in the ever-evolving education industry.
                        </p>

                        <div className="grid md:block">
                            <button
                                className="hover:bg-white border border-white group1 py-3 pl-5 pr-12 rounded-3xl m-auto hover:text-black-sec"
                            >
                                <p id="purple-btn" className="relative text-xl">
                                    See full case study
                                </p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- info --> */}
                <div className="mt-6 pb-20 px-4 md:mt-16 md:pb-80 lg:pb-36">
                    <h2 className="text-center text-4xl lg:text-6xl">
                        Check out more works by Geeks <br className="hidden md:block" />
                        Invention
                    </h2>

                    <p
                        className="text-center mt-4 text-xl mb-14 md:mt-8 md:mb-16 md:px-10 lg:mx-80"
                    >
                        Our case studies describe design and development solutions
                        implemented at our Geeks Invention projects. The stories are a
                        valuable resource for those looking to develop their own mobile
                        apps.
                    </p>

                    <div className="grid md:block items-center w-max mx-auto">
                        <button
                            className="hover:bg-red-btn  border border-[#ff5300] text-red-btn group1 py-3 pl-5 pr-12 rounded-3xl m-auto hover:text-white"
                        >
                            <p id="purple-btn" className="relative text-xl">See all case study</p>
                        </button>
                    </div>
                </div>
            </section>

            <section
                data-color="section4"
                className="bg-grey-sec lg:bg-inherit gap-[5vw] pt-14 px-3 pb-10 min-h-screen w-screen box-border font-normal md:px-12 md:pt-36 md:pb-20 lg:px-36 lg:pb-0"
            >
                {/* <!-- heading --> */}
                <div>
                    <div>
                        <h1 className="text-center text-3xl pb-5 md:text-6xl">
                            Recent clients
                        </h1>
                        <p className="text-xl text-center">
                            We worked with the Fortune 500 companies in the USA, Africa, UK,
                            Middle East <br className="hidden lg:block" />
                            World's 4th Strongest Banking Brand, Automobile & IoT industry
                        </p>
                    </div>

                    {/* <!-- mobile card(p,m) - 45 30 40, 20 -->
                    <!-- m will be gap in grid -->
                    <!-- md: p,m - 45 10 20, 20 -->
                    <!-- lg: 115 grid margin -->
                    <!-- 90 50, 28 --> */}

                    <div
                        id="cards-container"
                        data-state={textDivState4}
                        className="md:grid card-grid md:grid-flow-row md:gap-5 mx-3 pt-12 [&>*]:bg-card lg:mx-28 [&>*]:mb-5 [&>*]:pt-11 [&>*]:px-8 [&>*]:pb-10 [&>*]:flex [&>*]:flex-col [&>*]:justify-between [&>*]:items-center [&>*]:md:mb-0 [&>*]:md:px-3 md:pt-16 [&>*]:lg:py-20 [&>*]:lg:px-12 lg:gap-7 lg:pt-24"
                    >
                        {/* <!-- card --> */}
                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/logo-ibm_vj8nmj.webp" alt="" />

                            <p className="text-center text-2xl">Global Technology</p>
                            <p className="text-center text-base">
                                From cloud computing to artificial intelligence, IBM's
                                cutting-edge technologies and expertise have helped countless
                                businesses stay ahead of the curve in today's digital world.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811293/Website-assets/Geeks-invention/logo-equity_gkerae.webp" alt="" />

                            <p className="text-center text-2xl">4th Strongest Bank</p>
                            <p className="text-center text-base">
                                Empowering a continent by creating better livelihoods, Equity
                                bank has been awarded 4th strongest Bank in the world in 2023.
                                Offering various banking services over Africa region
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811293/Website-assets/Geeks-invention/logo-audi_l6ilh1.webp" alt="" />

                            <p className="text-center text-2xl">Intelligence on wheel</p>
                            <p className="text-center text-base">
                                Audi is a luxury car manufacturer renowned for its sophisticated
                                engineering, innovative designs, and exceptional performance by
                                leveraging latest technology.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811293/Website-assets/Geeks-invention/logo-aramco_ynsggq.webp" alt="" />

                            <p className="text-center text-2xl">Energy Producer</p>
                            <p className="text-center text-base">
                                One of the world's largest integrated energy and chemicals
                                companies, creating value across the hydrocarbon chain, and
                                delivering societal and economic benefits to people and
                                communities around the globe who rely on the vital energy we
                                supply.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811299/Website-assets/Geeks-invention/logo-insurity_sw9hpx.webp" alt="" />

                            <p className="text-center text-2xl">Cloud-Native Insurance</p>
                            <p className="text-center text-base">
                                Insurity, a leading provider of cloud-based software for
                                insurance carriers, brokers, and MGAs. Insurity serves 500+
                                insurers, with 400+ in the cloud and 330+ in the public cloud.
                                It is trusted by 22 of the top 25 P&C carriers & 7 of the top 10
                                MGAs.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811293/Website-assets/Geeks-invention/logo-byju_nwnh6v.webp" alt="" />

                            <p className="text-center text-2xl">The Learning Platform</p>
                            <p className="text-center text-base">
                                BYJU'S is India's largest ed-tech company and the creator of
                                India's most loved school learning app. BYJU’S provides India’s
                                best teachers and subject matter experts to teach and clear
                                doubts of the students in an ongoing class.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811296/Website-assets/Geeks-invention/logo-linux_pqm5by.webp" alt="" />

                            <p className="text-center text-2xl">Open Source Giant</p>
                            <p className="text-center text-base">
                                The Linux Foundation is a non-profit organization that supports
                                the development and growth of the Linux operating system and
                                other open source technologies like NodeJs, Kubernetes, GraphQL,
                                OpenAPI etc.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811295/Website-assets/Geeks-invention/logo-ifit_mouptf.webp" alt="" />

                            <p className="text-center text-2xl">Fitness Platform</p>
                            <p className="text-center text-base">
                                iFit is a workout app with thousands of on-demand classes to
                                suit a variety of fitness levels. Stream classes using an
                                iFit-compatible exercise machine or access them on your
                                smartphone to work up a sweat in any location.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811293/Website-assets/Geeks-invention/logo-payyit_sqzgui.webp" alt="" />

                            <p className="text-center text-2xl">Smooth Invoicing</p>
                            <p className="text-center text-base">
                                Payyit is a cutting-edge Software as a Service (SAAS) platform
                                designed to revolutionize the invoicing, bookkeeping, payment
                                processing, virtual bank account and debit card management for
                                businesses of all sizes.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811293/Website-assets/Geeks-invention/logo-baanx_fpabzc.webp" alt="" />

                            <p className="text-center text-2xl">Crypto Bank</p>
                            <p className="text-center text-base">
                                The Baanx Platform bridges the gap between fiat and digital
                                asset technology to provide with an API-driven platform to
                                create disruptive, cutting-edge digital products offering
                                Payments, Digital Assets, Loans
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811296/Website-assets/Geeks-invention/logo-inchcape_u1cwug.webp" alt="" />

                            <p className="text-center text-2xl">Mobility Solution</p>
                            <p className="text-center text-base">
                                Inchcape is the leading independent multi-brand global
                                automotive distributor, operating in over 40 markets and
                                territories with a portfolio of the world’s leading automotive
                                brands.
                            </p>
                        </div>

                        <div>
                            <img src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811299/Website-assets/Geeks-invention/logo-penny_acixhw.webp" alt="" />

                            <p className="text-center text-2xl">Global Procurement</p>
                            <p className="text-center text-base">
                                Penny is a cloud-based Source-To-Pay system. Penny helps
                                digitize and manage full procurement cycle from Request to
                                approval, Manage RFQs to vendors, Compare quotations, Send POs
                                and even payment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                data-has-zoom="true"
                data-color="section3"
                className="bg-black-sec md:bg-inherit w-screen min-h-screen pt-6 md:pt-12 lg:pt-24"
            >
                <div>
                    {/* <!-- fake div --> */}
                    <div></div>

                    <div data-state={textDivState5}>
                        <h1 className="text-center text-4xl md:text-6xl">
                            Software for modern platforms
                        </h1>
                        <p className="text-center text-xl">
                            We develop applications for mobile, web, wearables, and TV.
                        </p>
                    </div>
                </div>

                <div
                    id="zoom-div"
                    data-zoom="false"
                    className="platform-icons-contn grid gap-[50px] mt-10 [&>*]:flex [&>*]:flex-col [&>*]:justify-between md:mt-36 lg:gap-0 lg:flex lg:flex-row lg:justify-around lg:items-center"
                >
                    <div className="first">
                        <img className="w-auto m-auto mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/icon-web_ihyw2c.svg" alt="" />
                        <p className="text-center text-2xl">Web</p>
                    </div>

                    <div className="second">
                        <img className="w-auto m-auto mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811299/Website-assets/Geeks-invention/icon-ios_lraxpx.svg" alt="" />
                        <p className="text-center text-2xl">iOS</p>
                    </div>

                    <div className="third">
                        <img
                            className="w-auto m-auto mb-6"
                            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811297/Website-assets/Geeks-invention/icon-android_x4u6iu.svg"
                            alt=""
                        />
                        <p className="text-center text-2xl">Android</p>
                    </div>

                    <div className="fourth">
                        <img
                            className="w-auto m-auto mb-6"
                            src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/icon-hybrid_otjlps.svg"
                            alt=""
                        />
                        <p className="text-center text-2xl">Hybrid</p>
                    </div>

                    <div className="fifth">
                        <img className="w-auto m-auto mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811296/Website-assets/Geeks-invention/icon-wear_tndwvw.svg" alt="" />
                        <p className="text-center text-2xl">Wearables</p>
                    </div>

                    <div className="sixth">
                        <img className="w-auto m-auto mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811299/Website-assets/Geeks-invention/icon-tv_kusagq.svg" alt="" />
                        <p className="text-center text-2xl">TV</p>
                    </div>
                </div>
                {/*
                <!-- btn m mobile, md - 70 0 50 -->
                <!-- btn m lg - 130 0 157 --> */}

                <div className="grid">
                    <button
                        className="mt-16 mb-12 text-red-btn border border-[#ff5300] group1 py-3 pl-5 pr-12 rounded-3xl mx-auto hover:bg-red-btn hover:text-white lg:mt-32 lg:mb-40"
                    >
                        <p id="purple-btn" className="relative text-xl">See all case study</p>
                    </button>
                </div>
            </section>

            <section
                data-color="section4"
                data-has-zoom="true"
                className="pt-12 bg-grey-sec md:pt-32 md:bg-inherit"
            >
                <div>
                    <div></div>

                    <div data-state={textDivState6}>
                        <h1 className="text-center text-4xl md:mb-9 md:text-6xl">
                            Only dedicated teams
                        </h1>
                        <p className="text-center text-xl p-5 md:pb-32 md:px-0 md:pt-0">
                            Our team is 100% concentrated on your project and you have full
                            control over <br className="hidden md:block" />
                            management of the dedicated team members.
                        </p>
                    </div>
                </div>

                {/* <!-- grid elem -->
                <!-- mobile mt-50px -->
                <!-- row gap - 100px --> */}

                <div
                    id="zoom-div-2"
                    data-zoom="false"
                    className="grid short-grid gap-24 [&>*]:flex [&>*]:flex-col [&>*]:justify-between [&>*]:items-center md:px-4 md:mb-12"
                >
                    <div className="web mt-12 md:mt-0 first">
                        <img className="mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811297/Website-assets/Geeks-invention/icon-agile_f9dv1v.svg" alt="" />
                        <p className="text-center text-2xl">Agile approach</p>
                    </div>

                    <div className="web mt-12 md:mt-0 second">
                        <img className="mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811299/Website-assets/Geeks-invention/icon-deep-tech_t9l5eh.svg" alt="" />
                        <p className="text-center text-2xl">Deep tech expertise</p>
                    </div>

                    <div className="web mt-12 md:mt-0 third">
                        <img className="mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811299/Website-assets/Geeks-invention/icon-pc_is4fn9.svg" alt="" />
                        <p className="text-center text-2xl">Personal commitment</p>
                    </div>

                    <div className="web mt-12 md:mt-0 fourth">
                        <img className="mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811294/Website-assets/Geeks-invention/icon-reg-rep_tf7nvx.svg" alt="" />
                        <p className="text-center text-2xl">Regular reporting</p>
                    </div>

                    <div className="web mt-12 md:mt-0 fifth">
                        <img className="mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811298/Website-assets/Geeks-invention/icon-time-track_g9pxih.svg" alt="" />
                        <p className="text-center text-2xl">Time tracking</p>
                    </div>

                    <div className="web mt-12 md:mt-0 sixth">
                        <img className="mb-6" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1697811297/Website-assets/Geeks-invention/icon-scale_bjl1pe.svg" alt="" />
                        <p className="text-center text-2xl">Scalability</p>
                    </div>
                </div>

                <div className="grid">
                    <button
                        className="my-12 mx-auto text-red-btn  border border-[#ff5300] group1 py-3 pl-5 pr-12 rounded-3xl hover:bg-red-btn hover:text-white md:mb-24"
                    >
                        <p id="purple-btn" className="relative text-xl">See our services</p>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Main;