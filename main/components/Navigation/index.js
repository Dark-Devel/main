import allStyles from "./styles";

import _ from "lodash";
import useDynamicStyles from "../../hooks/useDynamicStyles";

const Nav = () => {
  const styles = useDynamicStyles(allStyles);

  return (
    <div style={styles.wrapper}>
      <div style={styles.logo}>
        <p style={{ fontFamily: "Zen Dots" }}>
          Dark Devel
        </p>
      </div>

    </div>
  )
}

export default Nav;