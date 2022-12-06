import { throwStatement } from "@babel/types";
import colors from "../../styles/theme/colors";

import SPACINGS from "../../styles/theme/spacings";

export const base = {
  content: {
    ...SPACINGS.maxWidth,
    margin: "0 auto",
    ...SPACINGS.padding.base,
    padingTop: 24,
    padingBottom: 24,
  },
  title: {
    color: colors.white,
    marginTop: 200,
    fontFamily: "Zen Dots",
    fontSize: 30
  },
  text: {
    paddingTop: 12,
    paddingBottom: 18,
  },
}

const tablet = {
  content: {
    ...SPACINGS.padding.tablet
  },
  title: {
    color: colors.white,
    marginTop: 250,
    fontSize: 50
  },
  text: {
    paddingTop: 18,
    paddingBottom: 24,
    maxWidth: "75%",
  },
}

const desktop = {
  content: {
    ...SPACINGS.padding.desktop
  },
  title: {
    marginTop: 350,
    fontSize: 60
  },
  text: {
    paddingTop: 24,
    paddingBottom: 28,
    maxWidth: "50%",
  },
}

const styles = {
  base,
  tablet,
  desktop
};

export default styles;