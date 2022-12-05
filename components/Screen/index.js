import React, { useEffect, useState } from "react";
import useDynamicStyles from "../../hooks/useDynamicStyles";
import Nav from "../Navigation";

import allStyles from "./styles";

const Screen = ({ children }) => {

  const styles = useDynamicStyles(allStyles)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, [])

  return (
    <div style={styles.wrapper}>
      <div style={{
        transition: "250ms",
        opacity: loaded ? 1 : 0
      }}>
        <Nav />
        <div style={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Screen;