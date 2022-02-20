import React, { useState } from 'react';

function LikeButton() {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  return (<button onClick={increase}>
      <span>{value} Likes</span>
  </button>)
}

export default LikeButton