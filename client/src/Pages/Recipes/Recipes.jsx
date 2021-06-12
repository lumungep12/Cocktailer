import { useState } from "react";

const Recipes = () => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);


	return (
		<div>
            {user ? (
                <div>
			        <h2>Recipes Shall be Here</h2>
                </div>
            ) : (
                <div>
                    <h1>Sign Up First</h1>
                </div>
            )}
		</div>
	);
};

export default Recipes;
