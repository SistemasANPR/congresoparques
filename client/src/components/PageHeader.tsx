import { type LucideIcon } from "lucide-react";
import decorativeLeavesUrl from "@assets/FONDO-HOJAS-WEB_1769116986727.png";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
  lucideIcon?: LucideIcon;
  iconAlt?: string;
}

export function PageHeader({ title, subtitle, icon, lucideIcon: LucideIconComponent, iconAlt = "Icono de sección" }: PageHeaderProps) {
  const hasIcon = icon || LucideIconComponent;
  
  return (
    <section 
      className="relative py-16 md:py-20 lg:py-24 text-center text-white overflow-hidden"
      style={{ backgroundColor: '#6847f6' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {hasIcon && (
          <div className="flex justify-center mb-6">
            <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))' }}
              >
                <defs>
                  <linearGradient id="hexBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d0dd15" />
                    <stop offset="100%" stopColor="#00deff" />
                  </linearGradient>
                  <clipPath id="hexImageClip">
                    <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" />
                  </clipPath>
                </defs>
                <polygon 
                  points="50,3 95,26 95,74 50,97 5,74 5,26" 
                  fill="none" 
                  stroke="url(#hexBorderGradient)" 
                  strokeWidth="3"
                />
                <polygon 
                  points="50,8 91,28.5 91,71.5 50,92 9,71.5 9,28.5" 
                  fill="rgba(14, 4, 119, 0.85)"
                />
                {icon && (
                  <image 
                    href={icon} 
                    x="20" 
                    y="22" 
                    width="60" 
                    height="56" 
                    clipPath="url(#hexImageClip)"
                    preserveAspectRatio="xMidYMid meet"
                  />
                )}
              </svg>
              {LucideIconComponent && !icon && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LucideIconComponent 
                    className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" 
                    style={{ color: '#f71cdd' }}
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          data-testid="page-title"
        >
          {title}
        </h1>
        
        <div className="w-32 h-1 bg-[#BCCE16] mx-auto mb-6"></div>
        
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 lg:h-40 pointer-events-none"
        style={{
          backgroundImage: `url(${decorativeLeavesUrl})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom center',
          backgroundSize: 'auto 100%'
        }}
      />
    </section>
  );
}
