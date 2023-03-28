import React, { useState, useEffect } from "react"
import styles from './styles/Carousel.module.css'
import { data } from "../assets/SampleImages"

const Carousel = () => {
    const [position, setPosition] = useState(0)
    const next = () => {
        if (position > data.length-2) {
            setPosition(0)
        }
        else {
            setPosition(position + 1)
        }
    }
    const prev = () => {
        if (position < 0 || position == 0) {
            setPosition(data.length-1)
        }
        else {
            setPosition(position - 1)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.img_window}>
                <img src={data[position]}></img>
            </div>
            <div>
                <button className={styles.button} onClick={prev}>
                    Prev
                </button>
                <button className={styles.button} onClick={next}>
                    Next
                </button>
            </div>
            <div>
                <p style={{color:"white"}}>{position}</p>
            </div>
        </div>
    )
}
export default Carousel