import decorativeLeavesUrl from "@assets/FONDO-HOJAS-WEB_1769116986727.png";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
  iconAlt?: string;
}

export function PageHeader({ title, subtitle, icon, iconAlt = "Icono de sección" }: PageHeaderProps) {
  return (
    <section 
      className="relative py-16 md:py-20 lg:py-24 text-center text-white overflow-hidden"
      style={{ backgroundColor: '#6847f6' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {icon && (
          <div className="flex justify-center mb-6">
            <div className="relative">
              <svg 
                viewBox="0 0 120 104" 
                className="w-24 h-20 md:w-28 md:h-24 lg:w-32 lg:h-28"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
              >
                <defs>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d0dd15" />
                    <stop offset="100%" stopColor="#00deff" />
                  </linearGradient>
                  <clipPath id="hexClip">
                    <polygon points="60,5 110,30 110,74 60,99 10,74 10,30" />
                  </clipPath>
                </defs>
                <polygon 
                  points="60,2 113,28.5 113,75.5 60,102 7,75.5 7,28.5" 
                  fill="none" 
                  stroke="url(#hexGradient)" 
                  strokeWidth="4"
                />
                <polygon 
                  points="60,8 107,32 107,72 60,96 13,72 13,32" 
                  fill="rgba(14, 4, 119, 0.8)"
                />
                <image 
                  href={icon} 
                  x="25" 
                  y="22" 
                  width="70" 
                  height="60" 
                  clipPath="url(#hexClip)"
                  preserveAspectRatio="xMidYMid meet"
                />
              </svg>
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
