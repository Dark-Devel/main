import { NAVHEIGHT } from "../Navigation/styles";

import colors from "../../styles/theme/colors";


const base = {
  wrapper: {
    backgroundColor: colors.black,
  },
  content: {
    paddingTop: NAVHEIGHT,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: "auto",
    // paddingLeft: PADDING.BASE,
    // paddingRight: PADDING.BASE,
    margin: "0 auto",
    // maxWidth: MAXSCREENWIDTH
  }
};

const tablet = {
  // content: {
  //   paddingLeft: PADDING.TABLET,
  //   paddingRight: PADDING.TABLET,
  // }
};

const desktop = {
  // content: {
  //   paddingLeft: PADDING.DESKTOP,
  //   paddingRight: PADDING.DESKTOP,
  // }
};

const styles = {
  base,
  tablet,
  desktop,
}

export default styles