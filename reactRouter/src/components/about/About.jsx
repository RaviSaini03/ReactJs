import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                       <img
                            src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React.js was created by Jordan Walke, a software engineer at Facebook, and was first released in 2013. It was developed to improve the performance and maintainability of Facebook’s user interfaces. React introduced the virtual DOM, allowing efficient updates and rendering. 
                        </p>
                        <p className="mt-4 text-gray-600">
                        Initially open-sourced, it quickly gained popularity due to its component-based architecture, declarative UI, and one-way data binding. Over time, React evolved with features like React Hooks 2019 and Concurrent Mode. It is now widely used for building interactive web applications, supported by a strong community, and maintained by Meta formerly Facebook along with open-source contributors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}