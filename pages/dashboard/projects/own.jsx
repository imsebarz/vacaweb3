
import ProjectCard from "../../../components/projects/ProjectCard"
import { projects } from "../../../data/projects"
import MainLayout from "../../../layouts/MainLayout"

const OwnProjects = () =>{
    return(
        <MainLayout>
            <section>
            <h1 className="text-2xl">My Projects</h1>
                <div>
                    {
                        projects.map((project,key)=>(
                            <ProjectCard type="own" {...project} key={key} />
                        ))
                    }
                </div>
            </section>
        </MainLayout>
    )
}

export default OwnProjects