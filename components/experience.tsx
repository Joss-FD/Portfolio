import { Component } from "react";
import { ExperienceType, Data } from "types/data-types";
import data from "../public/static/json/data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const experiences = (data as Data).experience;


function renderProjectContent(data: ExperienceType, printDetails: boolean) {
    const styles = {
        card: 'flex flex-col p-5 bg-gray-700 bg-opacity-20 h-full',

        disabled: {
            texts: 'h-6 bg-gray-500 ',
            top: 'w-2/3',
            middle: 'w-5/12',
            bottom: ''
        }
    }
    return (
        <div className={`${styles.card}`}>
            <p className={`font-bold text-xl ${data.role ? '' : styles.disabled.texts + styles.disabled.top}`}>
                {data.role}
            </p>

            {printDetails &&
                <p className={`mt-2 ${data.role ? '' : styles.disabled.texts + styles.disabled.middle}`}>
                    <span className="text-grey">{data.dates}</span>
                </p>}

            <p className={`text-justify text-grey-2 py-4 break-words`}>
                {data.description}
            </p>

            <p className={`flex flex-wrap mt-auto text-grey ${data.role ? '' : styles.disabled.texts + styles.disabled.bottom}`}>
                {
                    data.link &&
                    <FontAwesomeIcon className="justify-self-end h-6 ml-auto text-gray-500" icon={faExternalLinkAlt} />
                }
            </p>
        </div>
    )
}

function renderProjectCards(projects: ExperienceType[], printDetails: boolean = false) {
    return projects.map((data: ExperienceType) => {
        if (data.link) {
            return (
                <a href={data.link} target="_blank" rel="noreferrer" key={data.company} className={`${data.role ? '' : 'md:h-auto h-0 opacity-70 md:visible invisible'} flex-no-shrink w-full mb-4 md:pr-4 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl`}>
                    {renderProjectContent(data, printDetails)}
                </a>
            )
        }
        else {
            return (
                <div key={data.company} className={`${data.role ? '' : 'md:h-auto h-0 opacity-70 md:visible invisible'} flex-no-shrink w-full mb-4 md:pr-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl`}>
                    {renderProjectContent(data, printDetails)}
                </div>
            )
        }
    })
}

class Experience extends Component {

    render() {
        return (
            <div className="overflow-hidden py-20 font-raleway text-primary">
                <div className="flex overfow-auto flex-col py-4">
                    {renderProjectCards(experiences, true)}
                </div>
            </div>
        )
    }
}

export default Experience;