import { useEffect, useState } from "react";

import _ from "lodash";

const useDimensions = (obj) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWidth(event.currentTarget.innerWidth)
      setHeight(event.currentTarget.innerHeight)
    })
  }, [])

  useEffect(() => {

    let widthToUse = width || window.innerWidth;
    let heightToUse = height || window.innerHeight;

    setWidth(widthToUse);
    setHeight(heightToUse);

  }, [width, height]);

  return {
    height,
    width
  }
}

export default useDimensions