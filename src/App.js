import React, { useEffect, useState } from 'react';
import List from './List';
function App() {
	const [birthdayPeople, setBirthdayPeople] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`./data.json`);
				const data = await response.json();
				setBirthdayPeople(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleClearBtn = () => {
		setBirthdayPeople([]);
	};

	return (
		<main>
			<section className="container">
				<h3>{birthdayPeople.length} birthday today</h3>
				{birthdayPeople.map((people) => (
					<List key={people.id} people={people}></List>
				))}
				<button onClick={() => handleClearBtn()}>Clear All</button>
			</section>
		</main>
	);
}

export default App;
