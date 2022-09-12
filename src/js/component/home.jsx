import React, { useState } from "react";
import "./../../styles/home.css";

const Home = () => {
	const [color, setColor] = useState([
		"red",
		"yellow",
		"green"
	]) 

	const [ActiveColor, setActiveColor] = useState("");
	const [isActive, setActive] = useState(false);

	const timer = ms => new Promise(res => setTimeout(res, ms))

  const handlePurple = () => {
		if (!isActive) {
			setColor([...color, "purple"]);
		} else {
			setColor(color.filter((val) => val !== "purple"));
		}
		setActive(!isActive);
  };


	 async function auto() {
	 			for (let c of color) {
					setActiveColor(c);
					await timer(1000);
				}
				setActiveColor("");
	}

  return (
    <div className="text-center">
			<div className="stick text-align-center"></div>
				<div className="box p-2" style={{ height: isActive ? "440px" : "330px"}}>

					<div className={`bulb ${ActiveColor == "red" ? "red" : "off"}`} onClick={() => setActiveColor("red")} />
					<div className={`bulb my-2 ${ActiveColor == "yellow" ? "yellow" : "off"}`} onClick={() => setActiveColor("yellow")} />
					<div className={`bulb ${ActiveColor == "green" ? "green" : "off"}`} onClick={() => setActiveColor("green")} />
					<div className={`bulb my-1 mt-2 ${isActive ? ActiveColor == "purple" ? "purple" : "off" : "visually-hidden"}`} onClick={() => setActiveColor("purple")} />

				</div>
			<button className="btn btn-outline-dark m-auto mt-3 me-3" onClick={handlePurple} >Add/Remove light</button>
			<button className="btn btn-outline-dark m-auto mt-3" onClick={auto} >Automatize</button>
    </div>
  );
};

export default Home;