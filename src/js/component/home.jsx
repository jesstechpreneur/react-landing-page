import React from "react";
import { Cards } from "../component/card.jsx";
import { Navbar } from "../component/navbar.jsx";
import { Jumbotron } from "../component/jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="container">
				<Navbar />
				<Jumbotron />
				<Cards />
			</div>
		</div>
	);
};

export default Home;
