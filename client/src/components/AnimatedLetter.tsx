import { useState, useEffect } from 'react';

interface AnimatedLetterProps {
  poem: string[];
  signature?: string;
}

export default function AnimatedLetter({ poem, signature = "Com amor" }: AnimatedLetterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowHint(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 z-10">
      <div
        className="relative cursor-pointer transition-all duration-1000"
        onClick={handleClick}
        data-testid="letter-container"
        style={{ perspective: '1000px' }}
      >
        {showHint && !isOpen && (
          <div 
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white/70 text-sm animate-fade-in"
            data-testid="text-hint"
          >
            Clique para abrir
          </div>
        )}
        
        <div
          className={`relative w-full max-w-2xl transition-all duration-[4000ms] ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {!isOpen ? (
            <div 
              className="relative rounded-md shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #f4e4c1 0%, #e8d5b5 100%)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
              data-testid="letter-closed"
            >
              <div className="p-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 mb-4 flex items-center justify-center shadow-lg">
                  <div className="text-4xl">💌</div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-2xl mb-2"
                    style={{
                      fontFamily: 'Great Vibes, cursive',
                      color: '#5d4037',
                    }}
                  >
                    Para você
                  </div>
                  <div 
                    className="text-sm opacity-70"
                    style={{ color: '#5d4037' }}
                  >
                    Uma mensagem especial
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute inset-0 rounded-md opacity-20 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 70%)',
                }}
              />
            </div>
          ) : (
            <div 
              className="relative rounded-md shadow-2xl overflow-y-auto max-h-[80vh] animate-fade-in"
              style={{
                background: 'linear-gradient(135deg, #fef9f3 0%, #f5ebe0 100%)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
              data-testid="letter-open"
            >
              <div 
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%235d4037' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative p-8 md:p-12">
                <div className="mb-8 text-center">
                  <div 
                    className="text-base opacity-60"
                    style={{ 
                      fontFamily: 'Playfair Display, serif',
                      color: '#5d4037',
                    }}
                    data-testid="text-date"
                  >
                    {new Date().toLocaleDateString('pt-BR', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>

                <div 
                  className="space-y-6 leading-relaxed"
                  style={{
                    fontFamily: 'Dancing Script, cursive',
                    fontSize: '1.25rem',
                    color: '#3e2723',
                    lineHeight: '1.8',
                  }}
                >
                  {poem.map((stanza, index) => (
                    <div 
                      key={index} 
                      className="animate-fade-in"
                      style={{
                        animationDelay: `${index * 0.3}s`,
                        opacity: 0,
                        animationFillMode: 'forwards',
                      }}
                      data-testid={`text-stanza-${index}`}
                    >
                      {stanza || '\u00A0'}
                    </div>
                  ))}
                </div>

                <div 
                  className="mt-12 text-right animate-fade-in"
                  style={{
                    animationDelay: `${poem.length * 0.3}s`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div 
                    className="inline-block"
                    data-testid="text-signature"
                  >
                    <div 
                      className="mb-2"
                      style={{
                        width: '120px',
                        height: '1px',
                        background: 'linear-gradient(to right, transparent, #5d4037, transparent)',
                      }}
                    />
                    <div 
                      style={{
                        fontFamily: 'Great Vibes, cursive',
                        fontSize: '1.75rem',
                        color: '#5d4037',
                      }}
                    >
                      {signature}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
