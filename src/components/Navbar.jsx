import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">🏠 Inicio</span>
				</Link>
				<div className="ml-auto">
					<Link to="/favoritos">
						<button className="btn btn-warning">❤️ Favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};