import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function Like() {

    const [liked, setLiked] = useState(false);

    return (
        <span
            style={{
                textAlign: "center",
                marginRight: "20px",
                fontSize: "30px"
            }}
            onClick={() => setLiked(!liked)}>
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
    )
}

export default Like
