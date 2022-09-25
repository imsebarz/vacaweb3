

//THIS FILE IS ONLINE A SERVICES EXAMPLES TO PROVIDER DATA 

import { projects } from "../data/projects";


export const getProjects = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(projects)
        }, 1000);
    })
}

export const getProjectById = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const project = projects.find(project => project.slug === id)
            if(project){
                resolve(project)
            }else{
                reject('project no found')
            }
        }, 1000);
    })
}