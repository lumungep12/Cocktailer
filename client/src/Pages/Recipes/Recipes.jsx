import axios from "axios";
import { Box, LinearProgress, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import Categories from "../../Components/Categories/Categories";

const Recipes = () => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(10);

	// get all meal categories
	useEffect(() => {
		axios
			.get("https://www.themealdb.com/api/json/v1/1/categories.php")
			.then((res) => {
				const allCategories = res.data.categories;
				setCategories(allCategories);
				setLoading(!loading);
				console.log(allCategories);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10))
		}, 800);
		return () => {
			clearInterval(timer);
		}
	}, []);

	const LinearProgressWithLabel = (props) => {
		return(
			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress variant="determinate" {...props}/>
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="textSecondary">
							{`${Math.round(props.value)}%`}
						</Typography>
					</Box>
			</Box>
		)
	}


	return (
		// <div>
		//     {user ? (
		//         <div>
		// 	        <h2>Recipes Shall be Here</h2>
		//         </div>
		//     ) : (
		//         <div>
		//             <h1>Sign Up First</h1>
		//         </div>
		//     )}
		// </div>
		<div>
			{loading ? (
			<Categories categories={categories} />
			) : (
				<div>
					<br /><br />
					<LinearProgressWithLabel value={progress} />
				</div>
			)}
		</div>
	);
};

export default Recipes;
