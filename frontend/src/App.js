import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer"
import "../src/App.css"
import digestImage from "./assets/digest.png";
const App = () => {
  return (
    <div className="app">
      <div className="left"><img alt="Notification" src={digestImage} className="illus"/></div>
      <div className="right">
        <Header />
        < Body />
        < Footer />
      </div>
    </div>
  )
}

export default App;
