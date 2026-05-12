// Centralized exhibitors/brands data
// Any changes here will reflect in both Home and Expo Espacio Público pages

import parquesAlegresLogoUrl from "@assets/Parques_Alegres_1766080172845.png";
import parquesMexicoLogoUrl from "@assets/Parques_de_Mexico_1766080172846.png";
import jimumexLogoUrl from "@assets/Jimumex_1766080172847.png";
import playClubLogoUrl from "@assets/Play_Club_1777482668293.png";
import deportanLogoUrl from "@assets/Deportan_1766080172847.png";
import hunterLogoUrl from "@assets/Hunter_1766080172848.png";
import muscoLogoUrl from "@assets/Musco_1766080172848.png";
import bodenLogoUrl from "@assets/Boden_1777482668293.png";
import bugyLogoUrl from "@assets/Bugy_1766080172848.png";
import rainBirdLogoUrl from "@assets/Rain_Bird_1766080172849.png";
import cdtLogoUrl from "@assets/logo_nuevo_cdt_1778616098687.png";
import jumboLogoUrl from "@assets/Productos_Jumbo_1777482668292.png";
import proludicLogoUrl from "@assets/Proludic_1766080172850.png";
import parkSysLogoUrl from "@assets/ParkSys_1766080172850.png";
import tourMateLogoUrl from "@assets/Tour_Mate_1770137791667.png";
import fundicionGamboaLogoUrl from "@assets/Fundicion_Gamboa_1777482668293.png";
import vermeerLogoUrl from "@assets/Vermeer_1770320575703.png";
import bktLogoUrl from "@assets/BKT_1777482668293.png";
import dyceLogoUrl from "@assets/dyce_1777482668293.png";
import deaceroLogoUrl from "@assets/DEACERO_1777481340896.png";
import conVidaParqueLogoUrl from "@assets/Con_Vida_tu_Parque_1777481331114.png";
import codeenLogoUrl from "@assets/CODEEN_1778274356981.png";
import proyectoFronterizoLogoUrl from "@assets/PROYECTO_FRONTERIZO_1778274356981.png";
import bioverdeLogoUrl from "@assets/BIOVERDE_1778274356981.png";
import ccderLogoUrl from "@assets/CCDER_1778274356976.png";

export interface Expositor {
  id: string;
  logo: string;
  name: string;
  url: string;
}

export const expositores: Expositor[] = [
  { id: 'parksys', logo: parkSysLogoUrl, name: 'ParkSys Smart Management', url: 'https://park-sys.com/' },
  { id: 'proludic', logo: proludicLogoUrl, name: 'Proludic', url: 'https://www.proludic.com/' },
  { id: 'jumbo', logo: jumboLogoUrl, name: 'Productos Jumbo', url: 'https://www.productosjumbo.com/' },
  { id: 'cdt', logo: cdtLogoUrl, name: 'CDT Centro de Desarrollo Turístico', url: 'https://cdt.org.mx/' },
  { id: 'rainbird', logo: rainBirdLogoUrl, name: 'Rain Bird', url: 'https://www.rainbird.com/es' },
  { id: 'bugy', logo: bugyLogoUrl, name: 'Grupo Bugy Proyectos Recreativos', url: 'https://bugy.mx/' },
  { id: 'boden', logo: bodenLogoUrl, name: 'Boden Eco Superficie', url: 'https://www.bodeneco.com/' },
  { id: 'musco', logo: muscoLogoUrl, name: 'Musco Lighting', url: 'https://www.musco.com/' },
  { id: 'hunter', logo: hunterLogoUrl, name: 'Hunter Industries', url: 'https://www.hunterirrigation.com/es' },
  { id: 'deportan', logo: deportanLogoUrl, name: 'Deportan Soluciones Deportivas', url: 'https://deportan.com.mx/' },
  { id: 'playclub', logo: playClubLogoUrl, name: 'Play Club', url: 'https://www.playclub.com.mx/' },
  { id: 'jimumex', logo: jimumexLogoUrl, name: 'Jimumex Equipamiento Urbano', url: 'https://jimumex.com.mx/' },
  { id: 'parquesmexico', logo: parquesMexicoLogoUrl, name: 'Parques de México', url: 'https://parquesdemexico.org/' },
  { id: 'parquesalegres', logo: parquesAlegresLogoUrl, name: 'Parques Alegres', url: 'https://parquesalegres.org/' },
  { id: 'tourmate', logo: tourMateLogoUrl, name: 'Tour Mate Systems', url: 'https://www.tourmate.com/' },
  { id: 'fundiciongamboa', logo: fundicionGamboaLogoUrl, name: 'Fundición Gamboa', url: 'https://www.fundiciongamboa.com/' },
  { id: 'vermeer', logo: vermeerLogoUrl, name: 'Vermeer México', url: 'https://vermeermexico.com/' },
  { id: 'bkt', logo: bktLogoUrl, name: 'BKT Mobiliario Urbano', url: 'https://www.bktmobiliario.com/' },
  { id: 'dyce', logo: dyceLogoUrl, name: 'DYCE', url: 'https://www.dyce.mx/' },
  { id: 'deacero', logo: deaceroLogoUrl, name: 'DEACERO', url: 'https://www.deacero.com/' },
  { id: 'convidaparque', logo: conVidaParqueLogoUrl, name: 'Con Vida Tu Parque', url: '#' },
  { id: 'codeen', logo: codeenLogoUrl, name: 'CODEEN', url: 'https://www.codeen.com.mx/' },
  { id: 'proyectofronterizo', logo: proyectoFronterizoLogoUrl, name: 'Proyecto Fronterizo de Educación Ambiental', url: 'https://pfea.org/' },
  { id: 'bioverde', logo: bioverdeLogoUrl, name: 'BIOVERDE', url: 'https://www.bioverde.com.mx/' },
  { id: 'ccder', logo: ccderLogoUrl, name: 'CCDER', url: 'https://online.fliphtml5.com/SeaOfOpportunities/znkx/#p=1' },
];

// Utility function to shuffle brands for random display order
export function shuffleExpositores(expositores: Expositor[]): Expositor[] {
  const shuffled = [...expositores];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
