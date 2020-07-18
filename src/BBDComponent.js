import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BiBlockDoubleSideMover from './BiBlockDoubleSideMover'

const BBDComponent = ({props}) => {
    const {scale, start} = useAnimatedScale(0.02 / 3, 20)
    const {w, h} = useDimension()
    return <div>
        <BiBlockDoubleSideMover w = {w} h = {h} scale = {scale} onClick = {start}></BiBlockDoubleSideMover>
    </div>
}
export default BBDComponent