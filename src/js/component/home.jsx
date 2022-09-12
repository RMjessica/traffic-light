import React, { useState } from "react";
import "./../../styles/home.css";

const Home = () => {
	const [color, setColor] = useState({
		"red": "off",
		"yellow": "off",
		"green": "off",
		"purple": "off"
	})   
	const [isActive, setActive] = useState(false);

  const handlePurple = () => {
    setActive(!isActive);
  };

	const handleColor = (c) => {
		let updateColor = {};
		updateColor[c] = color[c] == "off" ? "on" : "off";

		setColor({
			...color,
			...updateColor
		})
	}

  return (
    <div className="text-center">
			<div className="stick text-align-center"></div>
				<div className="box p-2" style={{ height: isActive ? "440px" : "330px"}}>
					<div className={`bulb ${color["red"] == "on" ? "red" : "off"}`} onClick={() => handleColor("red")} />
					<div className={`bulb my-2 ${color["yellow"] == "on" ? "yellow" : "off"}`} onClick={() => handleColor("yellow")} />
					<div className={`bulb ${color["green"] == "on" ? "green" : "off"}`} onClick={() => handleColor("green")} />
					<div className={`bulb my-1 mt-2 ${isActive ? color["purple"] == "on" ? "purple" : "off": "visually-hidden"}`} onClick={() => handleColor("purple")} />
				</div>
			<button className="btn btn-outline-dark m-auto mt-3 me-3" onClick={handlePurple} >Add/Remove light</button>
			<button className="btn btn-outline-dark m-auto mt-3" onClick={handlePurple} >Automatize</button>

    </div>
  );
};

export default Home;