import React from 'react'
import { data } from '../assets/SampleImages'
import styles from './styles/ShowImages.module.css'


const ShowImages = () => {
    return (
        <div>
            <div className={styles.gallery}>
                {data.map((item,index)=>
                <div>
                <img src={item}></img>
                {/* <p style={{color:"white"}}>{index}</p> */}
                </div>
                )}
            </div>
        </div>
    )
}

export default ShowImages