export default function Homepage() {
    /* This example requires Tailwind CSS v2.0+ */
    /* This example requires Tailwind CSS v2.0+ */
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">

                    <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Data Hacks 2022
                    </h1>
                    <h2 className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Andrew Schmitz, Calvin Nyguyen, Kevin Chan, Jaeda Gantulga
                    </h2>
                </div>
            </div>
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>

                                <span
                                    className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Exploratory Data Analysis
            </span>
                        </h1>

                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        <p>
                            Hours per Week: no correlation to INCWAGE
                            Just shows that most people work 40 hours a week and most of the outliers in terms of income
                            work around 40-50 hours per week
                        </p>

                        <figure>
                            <img
                                className="w-full rounded-lg"
                                src="https://cdn.discordapp.com/attachments/962085008074473513/962836275759575051/unknown.png"
                                alt=""
                                width={500}
                                height={250}
                            />

                        </figure>

                    </div>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                        <p>
                            EDDIPGED (education level, GED or high school diploma)
                            We could not find a correlation between this variable and the income because when cleaning data, all the remaining values ended up being NaN.
                            OCC (Occupation)
                            The occupation was correlated with the income because a lot of medical and STEM related jobs ranked amongst the top, but the incomes for each job would vary wildly for each year.
                            2020+: Pharmacists
                            2011-2019: Physicians and Surgeons
                            2003-2010: Engineer Managers
                            It is difficult to use OCC as a predictor because the job codes were split into years and there is not enough data provided for each individual job.


                        </p>

                        <figure>
                            <img
                                className="w-full rounded-lg"
                                src="https://cdn.discordapp.com/attachments/962085008074473513/962836289722384404/unknown.png"
                                alt=""
                                width={500}
                                height={250}
                            />

                        </figure>
                        <figure>
                            <img
                                className="w-full rounded-lg"
                                src="https://cdn.discordapp.com/attachments/962085008074473513/962838244129644574/unknown.png"
                                alt=""
                                width={500}
                                height={250}
                            />

                        </figure>
                        <figure>
                            <img
                                className="w-full rounded-lg"
                                src="https://cdn.discordapp.com/attachments/962085008074473513/962838426858717274/unknown.png"
                                alt=""
                                width={500}
                                height={250}
                            />

                        </figure>
                        <figure>
                            <img
                                className="w-full rounded-lg"
                                src="https://cdn.discordapp.com/attachments/962085008074473513/962838426858717274/unknown.png"
                                alt=""
                                width={500}
                                height={250}
                            />

                        </figure>
                        <figure>
                            <img
                                className="w-full rounded-lg"
                                src="https://cdn.discordapp.com/attachments/962085008074473513/962838820745785344/unknown.png"
                                alt=""
                                width={500}
                                height={250}
                            />

                        </figure>
                    </div>
                </div>
            </div>
        </div>


    )
}