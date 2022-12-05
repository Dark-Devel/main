import "../styles/globals.css"

import "../assets/fonts/Open_Sans/static/OpenSans/OpenSans-Medium.ttf";
import "../assets/fonts/Zen_Dots/ZenDots-Regular.ttf";


const App = (props) => {
  const { Component, pageProps, router, webPath, err } = props;

  return (
    <div id="__app">
      <Component {...pageProps} err={err} webPath={webPath} />
    </div>
  )

}

export default App