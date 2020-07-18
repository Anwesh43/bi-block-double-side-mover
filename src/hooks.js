import {useState, useEffect} from 'react'
import {divideScale, sinify} from './util'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(0)
    return {
        scale, 
        start() {
            const interval = setInterval(() => {
              if (!animated) {
                setAnimated(true)
                let currScale = scale 
                if (!animated) {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }
            }
            }, delay)
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 3)
    const sf2 = divideScale(sf, 1, 3)
    const sf3 = divideScale(sf, 2, 3)
    const size = Math.min(w, h) / 5 
    const position = 'absolute'
    const background = 'indigo'
    return {
        getBlockStyle(i) {
            const si = 1 - 2 * i
            const width = `${size}px`
            const height = `${size}px`
            const dx = (w / 2 - size) * (sf1 - sf3) * si
            const left = `${w / 2 - size + size * i - dx}px`
            const top = `${h / 2 - size - (h / 2 - size) * sf1}px`
            return {
                position, 
                background,
                width, 
                height,
                left, 
                top
            }
        }
    }
}
