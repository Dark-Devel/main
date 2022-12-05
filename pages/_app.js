import "../styles/globals.css"


const App = (props) => {
  const { Component, pageProps, router, webPath, err } = props;

  return (
    <div id="__app">
      <Component {...pageProps} err={err} webPath={webPath} />
    </div>
  )

}

export default App