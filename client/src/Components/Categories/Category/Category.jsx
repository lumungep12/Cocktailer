import {useState, useEffect } from "react";
import axios from "axios";

const Category = (props) => {
    const [meals, setMeals] = useState([]);

	const path = props.location.pathname;
	const category = path.substr(11);

	useEffect(() => {
		axios
			.get(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
			)
			.then((res) => {
				const { meals } = res.data;
                setMeals(meals);
				console.log(meals);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<h1>This is a single meal category</h1>
            {meals.map((single) => (
                <p>{single.strMeal}</p>
            ))}
		</>
	);
};

export default Category;
