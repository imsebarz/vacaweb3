import ProjectDetail from "../../../components/projects/ProjectDetail"
import MainLayout from "../../../layouts/MainLayout"

import { getProjects,getProjectById} from '../../../utils/services'


export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const projects = await getProjects()

  
    // Get the paths we want to pre-render based on posts
    const paths = projects.map((project) => ({
      params: { id: project.slug },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    
    const project = await getProjectById(params.id)
    // Pass post data to the page via props
    return { props: { project } }
  }

const Project = ({project}) =>{
    const onSupportChange = (amount) =>{
        console.log(amount);
    }
    return(
        <MainLayout>
            <section>
                   

                     <div>
                         <ProjectDetail 
                            onSupportAmount={onSupportChange}
                            {...project}
                         />
                     </div>
            </section>
        </MainLayout>
    )
}

export default Project