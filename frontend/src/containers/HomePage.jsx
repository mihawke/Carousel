import React from 'react'
import Carousel from '../components/Carousel'
import ShowImages from '../components/ShowImages'
import styles from './styles/HomePage.module.css'


const HomePage = () => {
    return (
        <div>
            <div className={styles.imageContainer}>
                <ShowImages></ShowImages>
            </div>
            <div>
                <Carousel></Carousel>
            </div>
        </div>

    )
}

export default HomePage