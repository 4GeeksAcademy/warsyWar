import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Characters from "./Characters.jsx"
import Planets from "./Planets.jsx";
import Vehicles from "./Vehicles.jsx"
import Titulo from "./Titulo.jsx";

export const Home = () => {

  const {store, dispatch} = useGlobalReducer()
  
	return (
		<div className="text-center mt-5">
			<div className="div">
				<Titulo />
				<Characters />
				<Vehicles />
				<Planets />
			</div>


		</div>
	);
}; 