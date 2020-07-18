import React from 'react'
import {useStyle} from './hooks'

const Block = ({style}) => {
    return <div style = {style}>
    </div>
}

const BiBlockDoubleSideMover = ({w, h, scale, onClick}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    return <div onClick = {onClick}>
        {[0, 1].map(i => <Block key = {`block_${i}`} style = {getBlockStyle(i)}/>)}
    </div>
}

export default BiBlockDoubleSideMover