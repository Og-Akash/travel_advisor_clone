import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { hotelData } from '@/constants/hotels';
import { Button } from './ui/button';

const ModernGlobe = () => {
  const globeEl = useRef<any>();
  const [hoveredHotel, setHoveredHotel] = useState<any | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('/countries.geojson')
      .then((res) => res.json())
      .then((data) => setCountries(data.features));
  }, []);

  useEffect(() => {
    if (!globeEl.current) return;
    
    // Wait for the globe to initialize
    setTimeout(() => {
      const globe = globeEl.current;
      
      // Access the Three.js scene
      const scene = globe.scene();
      
      // Configure lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(5, 3, 5);
      scene.add(ambientLight);
      scene.add(directionalLight);

      // Create custom texture for land
      const createLandTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return null;

        // Base color with subtle pattern
        ctx.fillStyle = '#355E5B';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add texture
        ctx.fillStyle = '#2F4F4F';
        for (let i = 0; i < 5000; i++) {
          ctx.beginPath();
          ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 2,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        
        return new THREE.CanvasTexture(canvas);
      };

      // Get globe instance and modify its material directly
      if (globe.globeMaterial && globe.globeMaterial()) {
        // If the API provides access to the material getter
        const globeMaterial = globe.globeMaterial();
        globeMaterial.color = new THREE.Color('#80C7D3');
        globeMaterial.shininess = 10;
        globeMaterial.specular = new THREE.Color('#111111');
        globeMaterial.transparent = true;
        globeMaterial.opacity = 0.95;
      }

      return () => {
        scene.remove(ambientLight);
        scene.remove(directionalLight);
      };
    }, 500);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Interactive Global Hotel Explorer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <span className="font-medium">✨ Rotate and zoom the globe</span> to discover luxury hotels across the world. 
            Click and drag to rotate, scroll to zoom in/out, and hover over the red markers to view hotel details.
          </p>
        </div>
        
        <div
          className="relative h-[500px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltipPosition({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
        >
          <Globe
            ref={globeEl}
            width={1200}
            height={500}
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere={false}
            polygonsData={countries}
            polygonCapColor={() => '#355E5B'}
            polygonSideColor={() => '#2F4F4F'}
            polygonStrokeColor={() => '#1C3B3A'}
            polygonAltitude={0.02}
            pointsData={hotelData}
            pointLat="lat"
            pointLng="lng"
            pointAltitude={0.05} // Increased altitude to ensure points appear above land
            pointRadius={0.5}
            pointColor={() => '#FF6B6B'}
            pointResolution={8}
            pointsMerge={false} // Prevents points from merging with the globe geometry
            onPointHover={setHoveredHotel}
            enablePointerInteraction={true}
            globeMaterial={new THREE.MeshPhongMaterial({
              color: '#80C7D3',
              shininess: 10,
              specular: new THREE.Color('#111111'),
              transparent: true,
              opacity: 0.95
            })}
          />
          {hoveredHotel && (
            <div
              className="absolute z-10 bg-white p-4 rounded-lg shadow-xl border border-gray-200 max-w-xs"
              style={{
                left: `${Math.min(tooltipPosition.x + 20, 700)}px`,
                top: `${Math.min(tooltipPosition.y + 20, 400)}px`,
                pointerEvents: 'none',
              }}
            >
              <div className="flex gap-3">
                <img
                  src={hoveredHotel.image}
                  alt={hoveredHotel.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold text-lg">{hoveredHotel.name}</h3>
                  <p className="text-sm text-gray-600">
                    {hoveredHotel.city}, {hoveredHotel.country}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <div className="flex text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(hoveredHotel.rating) ? '★' : '☆'}
                      </span>
                    ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {hoveredHotel.rating} ({hoveredHotel.reviews.toLocaleString()})
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-800">{hoveredHotel.description}</p>
              <p className="mt-2 font-semibold text-blue-600">{hoveredHotel.price}</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-4">
            What kind of traveler are you?
          </h3>
          <p className="text-lg">
            Your result: <span className="font-bold text-tripadvisor-darkGreen">Adventure Seeker</span>
          </p>
          <Button className="mt-4 px-6 py-2 text-white rounded-full transition">
            Explore this spot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModernGlobe;