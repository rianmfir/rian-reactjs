import React from 'react'

const Img = ({ img, width, teks }) => {
    return (
        <div>
            <img src={img} alt="picture" width={width} />{teks}
        </div>
    )
}

export default Img 