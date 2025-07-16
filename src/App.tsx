import { Route, Routes } from "react-router-dom";
import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import ClinicaPage from "@/pages/clinica";
import AlquilerPage from "@/pages/clinica/alquiler";
import AsesoriaPage from "@/pages/clinica/asesoria";
import CapacitacionesPage from "@/pages/clinica/capacitaciones";
import ConsultaMedicaPage from "@/pages/clinica/consulta-medica";
import EmpresasPage from "@/pages/farmacurate/empresas";
import KitsPage from "@/pages/farmacurate/kits";
import IndexPage from "@/pages/index";
import ServiciosLaboratorioPage from "@/pages/laboratorio/servicios";
import HazTuCitaPage from "@/pages/laboratorio/haz-tu-cita";
import ServiciosSpaPage from "@/pages/spa/servicios";
import PlanesSpaPage from "@/pages/spa/planes";
import ServicesPage from "@/pages/services";

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path="/" />
			<Route element={<ClinicaPage />} path="/clinica" />
			<Route element={<ConsultaMedicaPage />} path="/clinica/consulta-medica" />
			<Route element={<AsesoriaPage />} path="/clinica/asesoria" />
			<Route element={<AlquilerPage />} path="/clinica/alquiler" />
			<Route element={<CapacitacionesPage />} path="/clinica/capacitaciones" />
			<Route element={<EmpresasPage />} path="/farmacurate/empresas" />
			<Route element={<KitsPage />} path="/farmacurate/kits" />
			<Route element={<ServiciosLaboratorioPage />} path="/laboratorio/servicios" />
			<Route element={<HazTuCitaPage />} path="/laboratorios/haz-tu-cita" />
			<Route element={<ServiciosSpaPage />} path="/spa/servicios" />
			<Route element={<PlanesSpaPage />} path="/spa/planes" />
			<Route element={<ServicesPage />} path="/services" />
			<Route element={<BlogPage />} path="/blog" />
			<Route element={<AboutPage />} path="/conocenos" />
		</Routes>
	);
}

export default App;
