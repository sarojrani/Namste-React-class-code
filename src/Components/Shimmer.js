

import React from 'react'
import { Image, Shimmer } from 'react-shimmer'

function Simmer() {
  return  (
    <div>
      <Image
        src='https://source.unsplash.com/random/200x350'
        fallback={<Shimmer width={200} height={350} />}
      />
    </div>
  )
}
export default Simmer;