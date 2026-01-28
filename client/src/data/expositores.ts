// Centralized exhibitors/brands data
// Any changes here will reflect in both Home and Expo Espacio Público pages

import parquesAlegresLogoUrl from "@assets/Parques_Alegres_1766080172845.png";
import parquesMexicoLogoUrl from "@assets/Parques_de_Mexico_1766080172846.png";
import jimumexLogoUrl from "@assets/Jimumex_1766080172847.png";
import playClubLogoUrl from "@assets/Play_Club_1766080172847.png";
import deportanLogoUrl from "@assets/Deportan_1766080172847.png";
import hunterLogoUrl from "@assets/Hunter_1766080172848.png";
import muscoLogoUrl from "@assets/Musco_1766080172848.png";
import bodenLogoUrl from "@assets/Boden_1766080172848.png";
import bugyLogoUrl from "@assets/Bugy_1766080172848.png";
import rainBirdLogoUrl from "@assets/Rain_Bird_1766080172849.png";
import dihlaLogoUrl from "@assets/DIHLA_1766080172849.png";
import cdtLogoUrl from "@assets/CDT_1766080172849.png";
import jumboLogoUrl from "@assets/Jumbo_1766080172849.png";
import proludicLogoUrl from "@assets/Proludic_1766080172850.png";
import parkSysLogoUrl from "@assets/ParkSys_1766080172850.png";

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
  { id: 'dihla', logo: dihlaLogoUrl, name: 'DIHLA', url: 'https://dihla.com.mx/' },
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
