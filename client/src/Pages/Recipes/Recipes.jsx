import axios from "axios";
import { useState, useEffect } from "react";
import Categories from "../../Components/Categories/Categories";


const Recipes = () => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
    const [categories, setCategories] = useState([]);

    // get all meal categories
    useEffect(() => {
		axios
			.get("https://www.themealdb.com/api/json/v1/1/categories.php")
			.then((res) => {
				const allCategories = res.data.categories;
                setCategories(allCategories);
				console.log(allCategories)
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);


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
            <div className="categories">
                <Categories
                    categories={categories}
                />
            </div>
		</div>
	);
};

export default Recipes;
