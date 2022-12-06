import Screen from "../../components/Screen";

import fernBackground from "../../assets/images/fernBackground2.jpg";

import allStyles from "./styles";
import colors from "../../styles/theme/colors";
import useDynamicStyles from "../../hooks/useDynamicStyles";

const Text = ({ color, children }) => {
  return (
    <p style={{
      color,
      paddingTop: 12,
      paddingBottom: 12
    }}>
      {children}
    </p>
  )
}

const DashBoy = () => <div style={{ width: "100%", borderBottom: "1px solid slategray", opacity: 0.5, width: 150, marginBottom: 12, }} />

const Section = ({ title, background, children }) => {
  const styles = useDynamicStyles(allStyles)

  return (
    <div style={{
      backgroundImage: `url(${background.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingTop: 24,
      paddingBottom: 48
    }}>
      <div style={styles.content}>
        <h1 style={styles.title}>{title}</h1>
        <div style={styles.text}>
          {children}
        </div>
      </div>
    </div>
  )
}

const IndexScreen = () => {
  const styles = useDynamicStyles(allStyles)

  return (
    <Screen>
      <Section title="What is Dark Devel?" background={{ image: fernBackground.src, color: colors.black }}>
        <Text color={colors.white}>
          TLDR: Snippets, components, and ideas
        </Text>
        <DashBoy />``
        <Text color={colors.white}>
          Dark Devel was born out of the idea that small problems cause big issues for developers. Fuck those Small quirks and little glitches.
        </Text>
        <Text color={colors.white}>
          We're here to try and get rid of that clutter and bullshit.
        </Text>
      </Section>
    </Screen>
  )
}

export default IndexScreen;