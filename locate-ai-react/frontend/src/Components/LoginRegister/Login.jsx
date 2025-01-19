import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
// import do_browse from '../../App.jsx';




const LoginConst = () => {

		const [formData, setFormData] = useState({
			email: "",
			password: ""
		})

		const browse = useNavigate()

		const handleChange = (event) =>
		{
			const fieldName = event.target.name
			const fieldValue = event.target.value
	
			setFormData({
				...formData, [fieldName]:fieldValue
			});
				
		}
	
		const handleSubmit = async (event) =>
		{
			event.preventDefault()
			try{
				const response = await fetch("http://127.0.0.1:5000/api/login", {
					method: "POST",
					body: JSON.stringify(formData),
					headers: {"Content-Type": "application/json"}
				});
				if (response.ok)
				{
					browse("/dashboard")
					console.log(response.json())
					console.log("BIEN CONNECTER")
					return (1)
				}
			}
			catch (error)
			{
				console.log("pas connecter")
				return (0)
			}
		}

	
		  return (
			<div className="Entire_page">
			  <div className="container">
				<div className="header">
				  <div className="text">Login</div>
				</div>
				<form onSubmit={handleSubmit}>
				  <div className="inputs">
					<div className="input">
					  <input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					  />
					</div>
					<div className="inputs">
					  <div className="input">
						<input
						  type="password"
						  name="password"
						  placeholder="Password"
						  value={formData.password}
						  onChange={handleChange}
						  required
						/>
					  </div>
					</div>
				  </div>
				  <div className="submit-container">
					<button type="submit">Sign in</button>
				  </div>
				</form>
				<div className="links">
				  <p>Forgot your password?</p>
				  <p>Send a magic link email</p>
				  <Link to="/register"> Don't have an account ? Register Here</Link>
				</div>
			  </div>
			  <p className="terms">
				By continuing, I agree to the Terms of Service and Privacy Policy.
			  </p>
			</div>
		  );
	};
		
	export default LoginConst;


	// const LoginSignup = () => {

	// 	const [formData, setFormData] = useState({
	// 		email: "",
	// 		password: ""
	// 	})
	
	// 	const handleChange = (event) =>
	// 	{
	// 		const fieldName = event.target.name
	// 		const fieldValue = event.target.value
	
	// 		setFormData({
	// 			...formData, [fieldName]:fieldValue
	// 		});
				
	// 	}
	
	
	
	// 	const handleSubmit = (event) => {
	// 		event.preventDefault()
	// 		console.log("Donnees  :", formData)
	
	// 	} 
	
	
	// 	  return (
	// 		<div className="Entire_page">
	// 		  <div className="container">
	// 			<div className="header">
	// 			  <div className="text">Welcome back !</div>
	// 			</div>
	// 			<form onSubmit={handleSubmit}>
	// 			  <div className="inputs">
	// 				<div className="input">
	// 				  <input
	// 					type="email"
	// 					name="email"
	// 					placeholder="Email"
	// 					value={formData.email}
	// 					onChange={handleChange}
	// 					required
	// 				  />
	// 				</div>
	// 				<div className="inputs">
	// 				  <div className="input">
	// 					<input
	// 					  type="password"
	// 					  name="password"
	// 					  placeholder="Password"
	// 					  value={formData.password}
	// 					  onChange={handleChange}
	// 					  required
	// 					/>
	// 				  </div>
	// 				</div>
	// 			  </div>
	// 			  <div className="submit-container">
	// 				<button type="submit">Sign in</button>
	// 			  </div>
	// 			</form>
	// 			<div className="links">
	// 			  <p>Forgot your password?</p>
	// 			  <p>Send a magic link email</p>
	// 			  <p>Don't have an account? Register here</p>
	// 			</div>
	// 		  </div>
	// 		  <p className="terms">
	// 			By continuing, I agree to the Terms of Service and Privacy Policy.
	// 		  </p>
	// 		</div>
	// 	  );
	// };
		
	// 	export default LoginSignup;