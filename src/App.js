// import React, { useState } from 'react';
// import './styles.css';

// const App = () => {
// 	const [temperatureValue, setTemperatureValue] = useState(10);
// 	const [temperatureColor, setTemperatureColor] = useState('cold');

// 	const increaseTemperature = () => {
// 		if (temperatureValue === 30) return;
// 		const newTemperature = temperatureValue + 1;
// 		setTemperatureValue(newTemperature);
// 		if (newTemperature <= 15) {
// 			setTemperatureColor('warm');
// 		} else if (newTemperature === 30) {
// 			setTemperatureColor('boiling');
// 		} else if (newTemperature < 30) {
// 			setTemperatureColor('hot');
// 		}
// 	};

// 	const decreaseTemperature = () => {
// 		if (temperatureValue === 0) return;

// 		const newTemperature = temperatureValue - 1;
// 		setTemperatureValue(newTemperature);
// 		if (newTemperature <= 20) {
// 			setTemperatureColor('cold');
// 		} else if (newTemperature === 0) {
// 			setTemperatureColor('coold');
// 		} else if (newTemperature > 0) {
// 			setTemperatureColor('cold');
// 		}
// 	};

// 	return (
// 		<div className='app-container'>
// 			<div className='temperature-display-container'>
// 				<div className={`temperature-display ${temperatureColor}`}>
// 					{temperatureValue}°C
// 				</div>
// 			</div>
// 			<div className='button-container'>
// 				<button onMouseDown={increaseTemperature}>+</button>
// 				<button onClick={decreaseTemperature}>-</button>
// 			</div>
// 		</div>
// 	);
// };

// export default App;
// import React, { useEffect, useState } from 'react';

// function App() {
// 	const [utilisateurs, setUtilisateurs] = useState([])
// 	const [articles, setArticles] = useState([])
// 	const [userActif, setUserActif] = useState(0)
// 	useEffect(() => {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => { return response.json() })
// 			.then((data) => setUtilisateurs(data));
// 		fetch("https://jsonplaceholder.typicode.com/posts")
// 			.then((response) => { return response.json() })
// 			.then((data) => setArticles(data));
// 	}, [])

// 	function handleClick(id) {
// 		setUserActif(id)
// 	}
// 	return (
// 		<div style={{ padding: "20px" }}>
// 			<h1>Liste de utilisateurs</h1>
// 			{
// 				utilisateurs.map((utilisateur, index) => {
// 					return (
// 						<p key={index}>
// 							{utilisateur.name}
// 							<button onClick={() => handleClick(utilisateur.id)}>détails des articles</button>
// 							<div>
// 								{
// 									userActif === utilisateur.id
// 										? <ul> {
// 											articles.filter((item) => item.userId === parseInt(userActif))
// 												.map((article) => {
// 													return <li>{article.id} {article.title}</li>
// 												})
// 										}
// 										</ul>
// 										: null
// 								}
// 							</div>
// 						</p>
// 					)
// 				})
// 			}
// 		</div>
// 	);
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Products from './Compsants/Products';
import Single from './Compsants/Single';
const produits = [
	{
		id: 1,
		title: 'PC Portable Gamer HP VICTUS',
		price: '7490 DH',
		thumbnail: 'HP16D0195NF.jpg'
	},
	{
		id: 2,
		title: 'PC Portable Gamer',
		price: '2190 DH',
		thumbnail: 'HP14424U3EA.jpg'
	},
	{
		id: 3,
		title: 'Pc Portable Chromebook Acer',
		price: '3640 DH',
		thumbnail: 'NXATHEF002.jpg'
	},
	{
		id: 4,
		title: 'PC Portable - HUAWEI',
		price: '1270 DH',
		thumbnail: 'HUA6901443442959.jpg'
	},
];

function App() {
	return (
		<Routes>
			<Route path="/" element={<Products produits={produits} />} />
			<Route path="/product/:id" element={<Single produits={produits} />} />
		</Routes>
	);
}
export default App;
