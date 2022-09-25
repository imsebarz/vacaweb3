
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    
      <h1>Welcome VACAWEB3</h1>
      <Link href={'/dashboard/projects'}>
        <button>
             Aportar
          </button>
      </Link>

    </div>
  )
}
