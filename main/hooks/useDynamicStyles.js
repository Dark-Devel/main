import { useEffect, useState } from "react";

import _ from "lodash";

const useDynamicStyles = (obj) => {
  const [s, setS] = useState({});
  const [width, setWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWidth(event.currentTarget.innerWidth)
    })
  }, [])

  useEffect(() => {
    const { base, tablet, desktop } = obj;

    let widthToUse = width ?? window?.innerWidth;

    if (widthToUse > 1000) {

      let styles = desktop && Object.keys(desktop).map(key => {
        if (base[key]) {
          return {
            [key]: {
              ...base[key],
              ...desktop[key],
            }
          }
        }
      }).reduce((result, current) => {
        return Object.assign(result, current);
      }, {});

      console.log(styles);
      setS({
        ...base,
        ...styles,
      })

    } else if (widthToUse <= 1000 && widthToUse > 438) {
      let styles = tablet && Object.keys(tablet).map(key => {
        if (base[key]) {
          return {
            [key]: {
              ...base[key],
              ...tablet[key],
            }
          }
        }
      }).reduce((result, current) => {
        return Object.assign(result, current);
      }, {});
      setS({
        ...base,
        ...styles,
      })
    } else {
      setS(base);
    }
  }, [width])

  return s
}

export default useDynamicStyles