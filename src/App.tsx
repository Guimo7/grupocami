import { Route, Routes } from "react-router-dom";
import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import ClinicaPage from "@/pages/clinica";
import IndexPage from "@/pages/index";
import ServicesPage from "@/pages/services";

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path="/" />
			<Route element={<ClinicaPage />} path="/clinica" />
			<Route element={<ServicesPage />} path="/services" />
			<Route element={<BlogPage />} path="/blog" />
			<Route element={<AboutPage />} path="/about" />
		</Routes>
	);
}

export default App;
