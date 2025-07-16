import { Route, Routes } from "react-router-dom";
import AlquilerPage from "@/pages/clinica/alquiler";
import AsesoriaPage from "@/pages/clinica/asesoria";
import CapacitacionesPage from "@/pages/clinica/capacitaciones";
import ConsultaMedicaPage from "@/pages/clinica/consulta-medica";
import ConocenosPage from "@/pages/conocenos";
import ContactanosPage from "@/pages/contactanos";
import EmpresasPage from "@/pages/farmacurate/empresas";
import KitsPage from "@/pages/farmacurate/kits";
import EquipoPage from "@/pages/importadora/equipo";
import FinanciamientoPage from "@/pages/importadora/financiamiento";
import IndexPage from "@/pages/index";
import HazTuCitaPage from "@/pages/laboratorio/haz-tu-cita";
import ServiciosLaboratorioPage from "@/pages/laboratorio/servicios";
import PlanesSpaPage from "@/pages/spa/planes";
import ServiciosSpaPage from "@/pages/spa/servicios";

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path="/" />
			<Route element={<ConsultaMedicaPage />} path="/clinica/consulta-medica" />
			<Route element={<AsesoriaPage />} path="/clinica/asesoria" />
			<Route element={<AlquilerPage />} path="/clinica/alquiler" />
			<Route element={<CapacitacionesPage />} path="/clinica/capacitaciones" />
			<Route element={<EmpresasPage />} path="/farmacurate/empresas" />
			<Route element={<KitsPage />} path="/farmacurate/kits" />
			<Route
				element={<ServiciosLaboratorioPage />}
				path="/laboratorio/servicios"
			/>
			<Route element={<HazTuCitaPage />} path="/laboratorios/haz-tu-cita" />
			<Route element={<ServiciosSpaPage />} path="/spa/servicios" />
			<Route element={<PlanesSpaPage />} path="/spa/planes" />
			<Route element={<EquipoPage />} path="/importadora/equipo" />
			<Route
				element={<FinanciamientoPage />}
				path="/importadora/financiamiento"
			/>
			<Route element={<ContactanosPage />} path="/contactanos" />
			<Route element={<ConocenosPage />} path="/conocenos" />
		</Routes>
	);
}

export default App;
