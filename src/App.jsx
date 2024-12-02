import { useState, useEffect } from "react";
import { Moon, Sun } from "react-bootstrap-icons";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Me from "./components/Me";


function App() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
            {/* Floating Buttons */}
            <div className="fixed top-4 right-4 flex items-center space-x-4 z-50">
                {/* Contact Me Button */}
                <button className="bg-gray-600 bg-opacity-4.5 border border-blue-100 text-white px-4 py-2 rounded-md hover:bg-gray-100/20 transition">
                    Hire Me
                </button>

                {/* Theme Switch Button */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 text-white"
                >
                    {darkMode ? <Sun /> : <Moon />}
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-grow bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text transition">
                <Hero />
                <About />
                
                <Me />
                <Projects />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
