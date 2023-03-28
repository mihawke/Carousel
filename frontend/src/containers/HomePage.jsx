import React from 'react'
import ShowImages from '../components/ShowImages'
import styles from './styles/HomePage.module.css'


const HomePage = () => {
    return (
        <div className={styles.imageContainer}>
            <ShowImages></ShowImages>
        </div>
    )
}

export default HomePage