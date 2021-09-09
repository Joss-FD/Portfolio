import { Component } from "react";
import { ProjectType, Data } from "types/data-types";
import data from "../public/static/json/data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const projects = (data as Data).projects;
const events = (data as Data).events;

function renderProjectContent(data: ProjectType, printDetails: boolean) {
    const styles = {
        card: 'flex flex-col p-5 bg-gray-700 bg-opacity-20 h-full',

        disabled: {
            texts: 'h-6 bg-gray-700 ',
            top: 'w-2/3',
            middle: 'w-5/12',
            bottom: ''
        }
    }
    return (
        <div className={`${styles.card}`}>
            <p className={`font-bold text-xl ${data.title ? '' : styles.disabled.texts + styles.disabled.top}`}>
                {data.title}
            </p>

            {printDetails &&
                <p className={`mt-2 ${data.title ? '' : styles.disabled.texts + styles.disabled.middle}`}>
                    <span className="mr-4">{data.type}</span>
                    <span className="text-grey">{data.dates}</span>
                </p>}

            <p className={`text-justify text-grey-2 py-4 break-words`}>
                {data.description}
            </p>

            <p className={`flex flex-wrap mt-auto text-grey ${data.title ? '' : styles.disabled.texts + styles.disabled.bottom}`}>
                {
                    data.technologies.map(data =>
                        <span key={data} className="mr-4">
                            {data}
                        </span>
                    )
                }
                {
                    data.link &&
                    <FontAwesomeIcon className="justify-self-end h-6 ml-auto text-gray-500" icon={faExternalLinkAlt} />
                }

            </p>
        </div>
    )
}

function renderProjectCards(projects: ProjectType[], printDetails: boolean = false) {
    return projects.map((data: ProjectType) => {
        if (data.link) {

            return (
                <a href={data.link} target="_blank" rel="noreferrer" key={data.title} className={`${data.title ? '' : 'md:h-auto h-0 opacity-70 md:visible invisible'} flex-no-shrink w-full md:w-1/2 lg:w-1/3 mb-4 md:pr-4 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl`}>
                    {renderProjectContent(data, printDetails)}
                </a>
            )

        }
        else {
            return (
                <div key={data.title} className={`${data.title ? '' : 'md:h-auto h-0 opacity-70 md:visible invisible'} flex-no-shrink w-full md:w-1/2 lg:w-1/3 mb-4 md:pr-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl`}>
                    {renderProjectContent(data, printDetails)}
                </div>
            )
        }
    })
}

class Projects extends Component {

    render() {
        return (
            <div className="overflow-hidden py-20 font-raleway text-primary">
                <p className="font-bold text-3xl text-center mb-8"><span className="gradient">Key projects</span></p>
                <div className="flex overfow-auto flex-col md:flex-row py-4">
                    {renderProjectCards(projects.big, true)}
                </div>
                <p className="font-bold text-3xl text-center m-8"><span className="gradient">Small personal projects</span></p>
                <div className="flex overfow-auto flex-col md:flex-row py-4">
                    {renderProjectCards(projects.small)}
                </div>
                {
                    events.length > 0 &&
                    <p className="font-bold text-3xl text-center m-8"><span className="gradient">Events</span></p>
                }
                <div className="flex flex-col md:flex-row justify-between py-4">
                    {events.map((data) => {
                        return (
                            <div key={data.title} className="text-center w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                                <p className="font-bold text-xl">{data.title}</p>
                                <p className="text-grey-2 py-4">{data.description}</p>
                                <p className="text-grey">{data.rank}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Projects;