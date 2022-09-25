
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectCard.module.css'

const ProjectCard = ({
    image,
    name,
    goalFinance,
    currentFinance,
    type = 'all',
    slug
}) =>{
    return(
        <Link href={`/dashboard/project/${slug}`}>
        <article className={`d-flex align-center ${styles.project}`}>
            <figure className={`d-flex align-center ${styles.project_image}`}>
                <Image 
                    alt='project'
                    src={image}
                    width={180}
                    height={180}
                     
                />
            </figure>
            <div className={`d-flex flex-column justify-content `}>
                <h2 className={`text-1xl ${styles.project_name}`}>{name}</h2>
                {
                    type != 'own' &&
                <div className='d-flex'>
                <div>
                    <h3 className={`text-sm text-medium ${styles.text}`}>Meta de financiación:</h3>
                   <p className={`text-light ${styles.text_margin}`}> ${goalFinance} USD </p>
                </div>
                <div>
                    <h3 className='text-medium text-sm'>Recaudado:</h3>
                    <p className={`text-light ${styles.text_margin}`} > ${currentFinance} USD </p>
                </div>

                </div>
                }
                {
                    type === 'own' &&
                    <div>
                    <h3 className={`text-sm text-medium ${styles.text}`}>Mi aporte:</h3>
                   <p className={`text-light ${styles.text_margin}`}> ${goalFinance} USD </p>
                </div>
                }
            </div>
        </article>
        </Link>
    )
}

export default ProjectCard