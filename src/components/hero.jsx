const Hero = () => (
    <section className="h-screen flex items-center justify-center relative bg-cover bg-center"
    style={{ backgroundImage: 'url("/img2.png")' }}
>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 blur-sm"></div>

        <div className="text-center relative z-10 text-white">
            <h1 className="text-4xl font-bold">Hi, i&#39;m Jay </h1>
            <p className="mt-4 text-lg">Frontend Developer | React Enthusiast</p>
        </div>
    </section>
);

export default Hero;
