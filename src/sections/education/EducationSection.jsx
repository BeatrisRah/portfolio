import { Element } from "react-scroll";
const items = [
    {
        title: "TypeScript",
        desc: "Static typing, OOP, classes, interfaces, generics, modules, decorators, and scalable TypeScript app architecture. (currently enrolled)",
        link: null
    },
    {
        title: "ReactJS",
        desc: "Components, props, state, hooks, context, routing, and scalable UI designwith modern best practices.",
        link: 'https://softuni.bg/certificates/details/241537/56f23cc9'
    },
    {
        title: "Back-End",
        desc: "Skilled in Node.js, Express, MongoDB, sessions, auth, validation, and error handling for secure, reliable back-end development.",
        link: 'https://softuni.bg/certificates/details/237727/198b8f4c'
    },
    {
        title: "JavaScript Applications",
        desc: "Built dynamic web apps using REST, async programming, SPA architecture, client-side rendering, routing, testing, and modular design.",
        link: 'https://softuni.bg/certificates/details/231974/0d0e7a28'
    },
    {
        title: "JavaScript Advanced",
        desc: "Strong JavaScript skills: syntax, DOM, events, OOP, advanced functions, unit testing, and best practices for interactive web development. ",
        link: 'https://softuni.bg/certificates/details/227991/9306f4cb'
    },
];

export default function Education() {
    return (
        <Element name="education" className="min-h-screen p-1 md:p-4">
            <div className="relative md:px-6 py-10">
                <div className="absolute left-1/2 top-30 -bottom-10 w-px bg-gray-400/40 -translate-x-1/2"></div>

                {/* Top info */}
                <div className="text-center mb-12">
                    <h3 className="text-sm text-gray-300">SoftUni</h3>
                    <h2 className="text-2xl font-bold">JavaScript Software Engineer</h2>
                    <p className="text-sm text-gray-400">Jan 2023 - Current</p>
                </div>

                {/* Timeline Items */}
                <div className="flex flex-col gap-16">
                    {items.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const justifyContent = isLeft ? "justify-start" : "justify-end"
                        return (
                            <div key={index} className={`relative flex ${justifyContent} items-center`}>
                                <div className={`w-1/2 px-4 flex flex-col ${isLeft ? "text-right" : "text-left"}`}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={isLeft ? "self-end" : "self-start"}
                                    >
                                        <h3 className="text-pink-400 font-semibold hover:text-pink-200 cursor-pointer">
                                            {item.title}
                                        </h3>
                                    </a>
                                    <p
                                        className={`text-sm text-gray-300 cursor-default xl:w-1/2 ${isLeft ? "self-end" : "self-start"
                                            }`}
                                    >
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Dot */}
                                <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-pink-400 rounded-full bg-transparent"></span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </Element>
    );
}