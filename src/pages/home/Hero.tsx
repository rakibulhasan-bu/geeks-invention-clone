const Hero = () => {
    return (
        <div className="">
            <div
                className="absolute lg:fixed z-[5] h-screen w-screen flex justify-center items-center"
            >
                <div>
                    <h1 className="w-max mx-auto text-center text-3xl md:text-6xl">
                        EMBRACE THE FUTURE
                    </h1>
                    <p className="w-max mt-6 mx-auto text-center text-xl md:text-4xl">
                        Welcome to the Age of Action
                    </p>
                </div>
            </div>

            <div
                id="particle-slider"
                className="lg:z-10 lg:fixed lg:inset-0 w-screen h-screen"
            >
                <div className="slides">
                    <div id="first-slide" className="slide" data-src="assets/G.svg"></div>
                </div>
                <canvas style={{ width: '100vw', height: '100vh' }} className="draw"></canvas>
            </div>
        </div>
    );
};

export default Hero;