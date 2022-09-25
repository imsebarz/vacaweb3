
import styles from './ProjectDetail.module.css'

import Image from "next/image"
import { useState } from 'react'

const ProjectDetail = ({
    name,
    image,
     status,
    developers,
    progress,
    onSupportAmount
}) =>{

    const [amount,setAmount] = useState(0)

    const onSupport = () => {
        onSupportAmount(amount)
    }
     return(
        <article className={`d-flex  flex-column align-items ${styles.project_detail}`}>
            <div className={`${styles.title}`}>
                <h3 className='text-medium'>Company Name</h3>
                <h1 className='text-2xl text-medium' >{name}</h1> 

            </div>
            <div className={`d-flex align-items justify-content ${styles.detail}`}>
            <figure className={`d-flex align-center  ${styles.image}`}>
                <Image 
                    alt='project'
                    src={image}
                    width={230}
                    height={230}
                     
                />
            </figure>
            <ul>
               
                    <li className={styles.status}>
                         <span className='text-1xl text-light'>Estado:{ status ? 'open' : 'close' }</span>
                    </li>
                    <li>
                         <span className='text-1xl text-light'>Desarrolladores:{developers}</span>
                    </li>
                    <li className={`${styles.progress_box}`}>
                         <h2>Progreso actual</h2>
                         <div className={styles.progressbar_wrapper}>
                             <div  className={styles.progressbar_bar}></div>
                         </div>
                         <h4 className='text-medium'>{progress} Recaudado</h4>
                    </li>
                    <li className={styles.support}>
                        <input onChange={(e)=> setAmount(e.target.value)} type={'text'} placeholder="100" className="w-input  w-input-outline-primary"  />
                        <button className="w-btn w-btn-primary" onClick={onSupport}>Support</button>
                    </li>
            </ul>

            </div>
           
        </article>
    )
}

export default ProjectDetail