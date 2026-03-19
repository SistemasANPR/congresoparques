import { useState } from 'react';
import { User } from 'lucide-react';

export type SpeakerCategory = 'magistral' | 'sesion' | 'taller';

export const CATEGORY_GRADIENTS: Record<SpeakerCategory, [string, string]> = {
  magistral: ['#d3dc39', '#d422d8'],
  sesion: ['#88dcad', '#7dddfe'],
  taller: ['#d3dc39', '#7ddebf'],
};

const HEX_CLIP = 'polygon(46% 2%, 54% 2%, 96% 23%, 100% 29%, 100% 71%, 96% 77%, 54% 98%, 46% 98%, 4% 77%, 0% 71%, 0% 29%, 4% 23%)';

const HOVER_TRIANGLES = [
  { size: 10, rotation: 15, top: '-10%', left: '12%', colorIdx: 0, floatDuration: 6, floatDelay: 0 },
  { size: 15, rotation: 145, top: '-8%', left: '70%', colorIdx: 1, floatDuration: 7.5, floatDelay: 0.8 },
  { size: 20, rotation: -30, top: '22%', left: '94%', colorIdx: 0, floatDuration: 8, floatDelay: 1.5 },
  { size: 7, rotation: 60, top: '70%', left: '90%', colorIdx: 1, floatDuration: 5.5, floatDelay: 0.4 },
  { size: 16, rotation: -15, top: '90%', left: '38%', colorIdx: 0, floatDuration: 7, floatDelay: 2 },
  { size: 6, rotation: 130, top: '58%', left: '-8%', colorIdx: 1, floatDuration: 6.5, floatDelay: 1.2 },
  { size: 12, rotation: -45, top: '18%', left: '-10%', colorIdx: 0, floatDuration: 5, floatDelay: 0.6 },
];

interface HexagonPhotoProps {
  src: string | null;
  alt: string;
  category: SpeakerCategory;
  width?: number;
  height?: number;
  showTriangles?: boolean;
  hoverTriangles?: boolean;
  iconSize?: string;
}

export function HexagonPhoto({
  src,
  alt,
  category,
  width = 160,
  height = 180,
  showTriangles = true,
  hoverTriangles = true,
  iconSize = 'w-16 h-16',
}: HexagonPhotoProps) {
  const [imgError, setImgError] = useState(false);
  const gradientColors = CATEGORY_GRADIENTS[category];
  const scaleFactor = width / 160;

  const imgSrc = src && !imgError
    ? `/api/image-proxy?url=${encodeURIComponent(src)}`
    : null;

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width, height, overflow: 'visible' }}
    >
      {showTriangles && HOVER_TRIANGLES.map((tri, i) => (
        <div
          key={i}
          className="absolute z-0"
          style={{
            width: tri.size * scaleFactor,
            height: tri.size * scaleFactor,
            top: tri.top,
            left: tri.left,
            transform: `rotate(${tri.rotation}deg)`,
          }}
        >
          <div
            className="w-full h-full"
            style={{
              animation: `hex-particle-float ${tri.floatDuration}s ease-in-out ${tri.floatDelay}s infinite`,
            }}
          >
            <div
              className={`w-full h-full transition-all duration-500 ease-out ${
                hoverTriangles
                  ? 'opacity-0 scale-[0.3] group-hover:opacity-50 group-hover:scale-100'
                  : 'opacity-40'
              }`}
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                backgroundColor: gradientColors[tri.colorIdx],
                transitionDelay: hoverTriangles ? `${i * 50}ms` : '0ms',
              }}
            />
          </div>
        </div>
      ))}

      {/* Gradient border */}
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath: HEX_CLIP,
          background: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        }}
      />

      {/* White gap */}
      <div
        className="absolute z-20 bg-white"
        style={{ clipPath: HEX_CLIP, inset: '3px' }}
      />

      {/* Photo */}
      <div
        className="absolute z-30 overflow-hidden bg-gray-100"
        style={{ clipPath: HEX_CLIP, inset: '6px' }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#6847f6]/10 to-[#0e0477]/10">
            <User className={`${iconSize} text-[#6847f6]/40`} />
          </div>
        )}
      </div>
    </div>
  );
}
