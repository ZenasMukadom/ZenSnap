import React from 'react'
import { GridList } from '@material-ui/core';
import './GridConfig.css';
import ReactMediumImg from 'react-medium-zoom'

const PexelsImages = (props) => {

    const img = props.pexelsImages.map(image => {
        return <ReactMediumImg key={image.id} src={image.src.original}
        onOpen={() => console.log('Image Open')}
        onClosed={() => console.log('Image closed')} />
    })


    return (
        <div >
            
                <GridList className="ZGrid" cellHeight={250} cols={4} spacing={20} >
                    {img}
                </GridList>
           


        </div>

    )


}

export default PexelsImages