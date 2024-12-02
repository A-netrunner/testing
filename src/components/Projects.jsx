const Projects = () => {
    const projects = [
        { title: "Counter", description: "Description 1" },
        { title: "E-commerce", description: "Description 2" },
        { title: "portfolio", description: "Description 3" },
        { title: "blah", description: "Description 4" },
        { title: "blah", description: "Description 5" },
    ];

    return (
        <section className="my-10">
            <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-white dark:text-gray-100">
                            {project.title}
                        </h3>
                        <p className="mt-2 text-gray-300 dark:text-gray-400">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
