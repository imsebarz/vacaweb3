

//components
import MainLayout from "../../../layouts/MainLayout"
import ProjectCard from "../../../components/projects/ProjectCard"
import Loading from '../../../components/Loading'
import { getProjects } from "../../../utils/services"
import { useEffect, useState } from "react"


//IF YOU WANT YOU CAN SERVER THE DATA THROUGH STATIC PROPS
//IN MY OPINION IS BETTER FOR THE PERFORMANCE

export async function getStaticProps(context) {

    //HERE ASYNC PROJECTS FUNCTIONS
    const projects =   await getProjects()
    return {
      props: {
        projects
      }
    }
  }

const DashBoard = ({ projects }) =>{
    
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    },[])
    return(
        <MainLayout>
             <h1 className="text-2xl">Financia la educación de nuevo talento</h1>
            {
                isLoading &&
                 <Loading />
            }
            {
                    !isLoading &&
                <section>
                   
                        {
                            projects.map((project,key)=>(
                                <ProjectCard key={key} {...project} />
                            ))
                        }
                        
                
                </section>
            }
        </MainLayout>
    )
}

export default DashBoard