export const NAVHEIGHT = 60;

import colors from "../../styles/theme/colors";

export const base = {
  wrapper: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    height: NAVHEIGHT,
    backgroundColor: colors.black,
    zIndex: 1,
    boxShadow: `0px 1px 5px ${colors.black}`
  },
  logo: {
    color: colors.white,
    fontSize: 24,
    textTransform: "uppercase",
    fontFamily: "monospace",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  }
}

const styles = {
  base,
};

export default styles;