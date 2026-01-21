import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "@/components/CustomCursor";
import Landing from "@/pages/landing";
import Congreso from "@/pages/congreso";
import Organizadores from "@/pages/organizadores";
import Ponentes from "@/pages/ponentes";
import PreguntasFrecuentes from "@/pages/preguntas-frecuentes";
import Preparate from "@/pages/preparate";
import Programa from "@/pages/programa";
import Talleres from "@/pages/talleres";
import EventosSociales from "@/pages/eventos-sociales";
import Sede from "@/pages/sede";
import Conectividad from "@/pages/conectividad";
import Hospedaje from "@/pages/hospedaje";
import SesionesEducativas from "@/pages/sesiones-educativas";
import PostersCientificos from "@/pages/posters-cientificos";
import ComiteEvaluador from "@/pages/comite-evaluador";
import ExpoEspacioPublico from "@/pages/expo-espacio-publico";
import ConstruccionComunitaria from "@/pages/construccion-comunitaria";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/congreso" component={Congreso} />
      <Route path="/organizadores" component={Organizadores} />
      <Route path="/ponentes" component={Ponentes} />
      <Route path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
      <Route path="/preparate" component={Preparate} />
      <Route path="/programa" component={Programa} />
      <Route path="/talleres" component={Talleres} />
      <Route path="/eventos-sociales" component={EventosSociales} />
      <Route path="/sede" component={Sede} />
      <Route path="/conectividad" component={Conectividad} />
      <Route path="/hospedaje" component={Hospedaje} />
      <Route path="/sesiones-educativas" component={SesionesEducativas} />
      <Route path="/posters-cientificos" component={PostersCientificos} />
      <Route path="/comite-evaluador" component={ComiteEvaluador} />
      <Route path="/expo-espacio-publico" component={ExpoEspacioPublico} />
      <Route path="/construccion-comunitaria" component={ConstruccionComunitaria} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
