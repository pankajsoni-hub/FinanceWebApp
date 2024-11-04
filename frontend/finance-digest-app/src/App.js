import { BrowserRouter, Routes, Route } from "react-router-dom";

// views
import Home from "./views/Home";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// styles
import "./App.css";
import Business from "./views/Business";
import Finance from "./views/Finance";
import LifeStyle from "./views/LifeStyle";
import News from "./views/News";

function App() {
	return (
		<BrowserRouter>
			<div className="max-w-full">
				<Header />
			</div>
			<main className="max-w-full">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/business" element={<Business/>}/>
					<Route path="/finance" element={<Finance/>}/>
					<Route path="/lifestyle" element={<LifeStyle/>}/>
					<Route path="/news" element={<News/>}/>
					{/* <Route component={FilteredFoods} path="/FilteredFoods/:slug" /> */}
				</Routes>
			</main>
			<div className="max-w-full">
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
