import React from 'react';
import logo from "./images/logo.png";
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Happy Birthday Meredith :)</h1>
				<p>Don't worry, I'll transfer the domain to you.</p>
			</header>
		</div>
	);
}

export default App;
