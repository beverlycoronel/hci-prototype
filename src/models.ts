
export type TagOptions = {salary: boolean, experience: boolean, type: boolean, remote: boolean, benefits: boolean, skills: boolean};

export interface Job {
    title: string, 
    company: string,
    location: string,
    salary: string,
    remote: string,
    experience: string,
    type: string,
    posted: string,
    skills: string,
    alumni: number,
    distance: number,
    image: string

}