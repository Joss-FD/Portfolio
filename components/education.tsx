import { Component } from "react";
import { Data, EducationType } from "types/data-types";
import data from "../public/static/json/data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const education = (data as Data).education;


function renderProjectContent(data: EducationType, printDetails: boolean) {
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
            <p className={`font-bold text-xl ${data.school ? '' : styles.disabled.texts + styles.disabled.top}`}>
                {data.school}
            </p>

            <p className={`text-grey-2 py-4 `}>
                {data.degree}
            </p>



            <p className={`flex flex-wrap mt-auto text-grey ${data.school ? '' : styles.disabled.texts + styles.disabled.bottom}`}>
                {printDetails &&
                    <span className={`mt-2 ${data.school ? '' : styles.disabled.texts + styles.disabled.middle}`}>
                        <span className="text-grey">{data.dates}</span>
                    </span>}
                {
                    data.link &&
                    <FontAwesomeIcon className="justify-self-end h-6 ml-auto text-gray-500" icon={faExternalLinkAlt} />
                }
            </p>
        </div>
    )
}

function renderProjectCards(projects: EducationType[], printDetails: boolean = false) {
    return projects.map((data: EducationType) => {
        if (data.link) {
            return (
                <a href={data.link} target="_blank" rel="noreferrer" key={data.school} className={`${data.school ? '' : 'md:h-auto h-0 opacity-70 md:visible invisible'} flex-no-shrink w-full mb-4 md:pr-4 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl`}>
                    {renderProjectContent(data, printDetails)}
                </a>
            )
        }
        else {
            return (
                <div key={data.school} className={`${data.school ? '' : 'md:h-auto h-0 opacity-70 md:visible invisible'} flex-no-shrink w-full mb-4 md:pr-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl`}>
                    {renderProjectContent(data, printDetails)}
                </div>
            )
        }
    })
}

class Education extends Component {

    render() {
        return (
            <div>
                <div className="overflow-hidden py-20 font-raleway text-primary">
                    <div className="flex overfow-auto flex-col py-4">
                        {renderProjectCards(education, true)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;