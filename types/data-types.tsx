export interface Data {
    projects: { 
        big: ProjectType[],
        small: ProjectType[]
    }
    events: EventType[];
    experience: ExperienceType[];
    education: EducationType[];
}

export interface ProjectType {
    title: string;
    dates: string;
    type: string;
    link?: string;
    description: string;
    technologies: string[];
}

interface EventType {
    title: string;
    description: string;
    rank: string;
}

export interface ExperienceType {
    role: string;
    link?: string;
    company: string;
    dates: string;
    description: string;
}

export interface EducationType {
    school: string; 
    link?: string;
    degree: string;
    dates: string;
    document: string;
}