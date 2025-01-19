import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";


const RegisterConst = () => {

		const [formData, setFormData] = useState({
			name: "",
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
				const response = await fetch("http://127.0.0.1:5000/api/register", {
					method: "POST",
					body: JSON.stringify(formData),
					headers: {"Content-Type": "application/json"}
				});
				if (response.ok)
				{
					browse("/")
					console.log(response.json())
					console.log("BIEN ENREGISTER")
					return (1)
				}
			}
			catch (error)
			{
				console.log("PAS ENREGISTRER")
				return (0)
			}
		}

	
		  return (
			<div className="Entire_page">
			  <div className="container">
				<div className="header">
				  <div className="text">Register</div>
				</div>
				<form onSubmit={handleSubmit}>
				  <div className="inputs">
					<div className="input">
						<input
						  type="name"
						  name="name"
						  placeholder="Name"
						  value={formData.name}
						  onChange={handleChange}
						  required
						/>
					</div>
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
					<button type="submit">Register</button>
				  </div>
				</form>
				<div className="links">
				  <Link to="/">Already have an account ? Register here</Link>
				</div>
			  </div>
			  <p className="terms">
				By continuing, I agree to the Terms of Service and Privacy Policy.
			  </p>
			</div>
		  );
	};
		
export default RegisterConst;

