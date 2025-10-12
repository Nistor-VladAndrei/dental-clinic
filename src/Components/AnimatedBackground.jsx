import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(40px, 30px) rotate(120deg); }
          66% { transform: translate(-20px, 50px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-50px, 40px) rotate(-120deg); }
          66% { transform: translate(30px, -30px) rotate(-240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(25px, -35px) rotate(90deg); }
          66% { transform: translate(-40px, 20px) rotate(180deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(35px, 45px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .float-1 { animation: float1 20s ease-in-out infinite; }
        .float-2 { animation: float2 25s ease-in-out infinite; }
        .float-3 { animation: float3 18s ease-in-out infinite; }
        .float-4 { animation: float4 22s ease-in-out infinite; }
        .pulse-anim { animation: pulse 3s ease-in-out infinite; }
        
        .float-1, .float-2, .float-3, .float-4 {
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}</style>
      
   
      {/* Tooth shapes - Responsive sizes */}
      <svg className="absolute top-20 right-1/4 w-32 md:w-48 h-32 md:h-48 opacity-50 float-4" viewBox="0 0 100 100">
        <path d="M50 10 C30 10, 20 20, 20 35 C20 50, 25 70, 30 85 C32 90, 35 95, 40 95 C42 95, 43 92, 43 88 C43 80, 40 70, 40 60 C40 55, 42 52, 45 52 C48 52, 50 55, 50 60 C50 55, 52 52, 55 52 C58 52, 60 55, 60 60 C60 70, 57 80, 57 88 C57 92, 58 95, 60 95 C65 95, 68 90, 70 85 C75 70, 80 50, 80 35 C80 20, 70 10, 50 10 Z" 
              fill="url(#toothGradient1)" 
              stroke="#60a5fa" 
              strokeWidth="1"
              opacity="0.9" />
        <defs>
          <linearGradient id="toothGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      
      {/* Desktop only elements */}
      <svg className="hidden md:block absolute bottom-1/4 left-1/3 w-40 h-40 opacity-55 float-3" viewBox="0 0 100 100">
        <path d="M50 10 C30 10, 20 20, 20 35 C20 50, 25 70, 30 85 C32 90, 35 95, 40 95 C42 95, 43 92, 43 88 C43 80, 40 70, 40 60 C40 55, 42 52, 45 52 C48 52, 50 55, 50 60 C50 55, 52 52, 55 52 C58 52, 60 55, 60 60 C60 70, 57 80, 57 88 C57 92, 58 95, 60 95 C65 95, 68 90, 70 85 C75 70, 80 50, 80 35 C80 20, 70 10, 50 10 Z" 
              fill="url(#toothGradient2)"
              stroke="#34d399"
              strokeWidth="1"
              opacity="0.9" />
        <defs>
          <linearGradient id="toothGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Medical crosses - Responsive */}
      <div className="absolute top-1/2 right-1/3 w-20 md:w-32 h-20 md:h-32 opacity-50 float-1">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 md:w-6 h-full bg-gradient-to-b from-blue-400/90 to-purple-400/80 rounded-full shadow-lg" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-4 md:h-6 bg-gradient-to-r from-blue-400/90 to-purple-400/80 rounded-full shadow-lg" />
        </div>
      </div>
      
      {/* Desktop only cross */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-28 h-28 opacity-55 float-3">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-full bg-gradient-to-b from-teal-400/90 to-cyan-400/85 rounded-full shadow-lg" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5 bg-gradient-to-r from-teal-400/90 to-cyan-400/85 rounded-full shadow-lg" />
        </div>
      </div>
      
      {/* Sparkle elements - Fewer on mobile */}
      <div className="absolute top-1/3 left-1/5 w-4 md:w-6 h-4 md:h-6 bg-blue-500/80 rounded-full pulse-anim shadow-lg" style={{ animationDelay: '0s' }} />
      <div className="absolute top-2/3 right-1/5 w-3 md:w-5 h-3 md:h-5 bg-purple-500/80 rounded-full pulse-anim shadow-lg" style={{ animationDelay: '1s' }} />
      <div className="hidden md:block absolute bottom-1/3 left-2/3 w-6 h-6 bg-cyan-500/80 rounded-full pulse-anim shadow-lg" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AnimatedBackground;