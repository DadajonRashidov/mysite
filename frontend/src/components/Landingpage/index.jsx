import "./style.scss";
import Iconinthetext from "../../assets/icons/iconinthetext.png";
import imginlandingpage from "../../assets/img/imginlandingpage.png";
import { Link } from "react-router-dom";
function Landingpage() {
  return (
    <div className="landingpage-wrapper">
      <div className="left">
        <h1>
          Alowishus <br /> Delicious <br /> Coffee{" "}
          <img src={Iconinthetext} alt="" />
        </h1>
        <span>
          A drink from the ‘My Alowishus’ bottled brews <br />
          range OR grab one of our delicious coffee’s.
        </span>
        <div className="btn-group-in-landingpage">
          <Link to={"download"}>
            <button className="warning-btn btn-landingpageN1">
              download app
            </button>
          </Link>
          <Link to={"menu"}>
            <button className="btn-landingpageN2">shop coffee</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <img src={imginlandingpage} alt="" />
      </div>
    </div>
  );
}

export default Landingpage;
