
import React, { useState, useRef } from 'react';
import Section from './components/Section';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // YouTube ID para "Amor Puro - Djavan"
  const videoId = "Af7ieNv0wXY"; 

  const handleStart = () => {
    setHasStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-[#fffafa] flex items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-transform duration-500 border border-rose-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl rotate-12">✉️</div>
          <div className="text-6xl mb-6 animate-pulse">❤️</div>
          <h1 className="font-playfair text-3xl md:text-4xl text-rose-800 mb-4 font-bold tracking-tight">Uma surpresa para você...</h1>
          <p className="text-gray-600 mb-8 italic leading-relaxed">
            Não é aniversário, nem data especial. É apenas porque eu te amo e queria que você soubesse o quanto é importante para mim.
          </p>
          <button
            onClick={handleStart}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 transform active:scale-95 text-lg"
          >
            Abrir meu coração ❤️
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-rose-100 selection:text-rose-900 overflow-hidden bg-[#fdfaf7] text-gray-800">
      <FloatingHearts />
      
      {/* Música de Fundo */}
      <div className="fixed top-0 left-0 w-0 h-0 opacity-0 pointer-events-none">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
          allow="autoplay; encrypted-media"
          title="Background Music"
        ></iframe>
      </div>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fce4ec] to-[#fdfaf7] relative px-4 text-center">
        <div className="absolute top-10 left-6 text-rose-300 font-dancing text-2xl rotate-[-12deg] opacity-60">Quase 8 anos</div>
        <div className="absolute bottom-10 right-6 text-rose-300 font-dancing text-2xl rotate-[12deg] opacity-60">Meu eterno amor</div>
        
        <div className="max-w-sm w-full mb-10 transform -rotate-1 hover:rotate-0 transition-all duration-700 shadow-2xl p-4 bg-white rounded-sm border border-gray-100">
          <img 
            src="https://raw.githubusercontent.com/caiquecustodiob/fotos/refs/heads/main/olhar%20apinoxado.jpg" 
            alt="Nosso olhar" 
            className="w-full h-auto object-cover"
          />
          <p className="font-dancing text-rose-400 text-center mt-4 text-2xl">Onde meu mundo começa.</p>
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl font-black mb-6 text-rose-900 leading-tight">
          Minha Vida, <br/>Minha História.
        </h1>
        
        <p className="font-dancing text-3xl md:text-4xl text-rose-500 italic max-w-2xl">
          "O que é o amor? Nem eu mesmo sei..."
        </p>

        <div className="animate-bounce text-rose-300 mt-16">
          <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>

      {/* Crescemos Juntos */}
      <Section className="bg-white/50 backdrop-blur-sm rounded-[3rem] my-16 p-8 md:p-16 border border-white">
        <h2 className="font-playfair text-3xl md:text-5xl text-rose-900 mb-8 font-bold tracking-tight">Crescemos Juntos</h2>
        <p className="text-xl md:text-2xl text-rose-800 font-light leading-relaxed italic mb-12">
          "São quase oito anos ao seu lado. Olho para trás e vejo dois jovens que cresceram, amadureceram e construíram uma vida inteira de mãos dadas. Cada fase nossa foi um aprendizado que eu não trocaria por nada."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <div className="p-4 bg-white shadow-xl -rotate-3 transform hover:rotate-0 transition-all duration-500">
            <img 
              src="https://raw.githubusercontent.com/caiquecustodiob/fotos/refs/heads/main/beijo%20dela.jpg" 
              alt="Seu beijo" 
              className="w-full h-auto"
            />
          </div>
          <div className="p-4 bg-white shadow-xl rotate-3 transform hover:rotate-0 transition-all duration-500">
            <img 
              src="https://raw.githubusercontent.com/caiquecustodiob/fotos/refs/heads/main/beijo%20dele.jpg" 
              alt="Meu beijo" 
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="mt-10 text-rose-400 font-dancing text-3xl">O carinho que só aumenta.</p>
      </Section>

      {/* O Sorriso que Ilumina */}
      <Section className="bg-rose-900 text-white rounded-[4rem] px-10 md:px-20 py-24 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-800 rounded-full blur-3xl opacity-40 -mr-48 -mt-48"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left">
            <h2 className="font-playfair text-4xl md:text-6xl mb-8 font-bold leading-tight">O Sorriso que me Guia</h2>
            <p className="text-lg md:text-2xl font-light leading-relaxed text-rose-100 italic">
              "Mesmo depois de tanto tempo, o seu sorriso ainda me ilumina mais que tudo nesse mundo. Ele é o meu combustível, a minha paz e a certeza de que tudo vale a pena."
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm p-4 bg-white rounded shadow-2xl rotate-2">
              <img 
                src="https://raw.githubusercontent.com/caiquecustodiob/fotos/refs/heads/main/sorriso%20dela.jpg" 
                alt="Seu sorriso lindo" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Nossa Princesa e Futuro */}
      <Section className="my-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-7xl mb-10 drop-shadow-md">👨‍👩‍👧</div>
          <h2 className="font-playfair text-4xl md:text-5xl text-rose-900 mb-8 font-bold">Nossa Princesa & Nosso Futuro</h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-10">
            "Aquele brilho que eu via só em você, agora está duplicado com a nossa pequena princesa. 
            Vocês duas são a minha maior realização. Sei que ainda não casamos oficialmente, mas no meu coração, 
            já somos um só há muito tempo. No momento certo, vamos celebrar esse passo oficial, 
            mas o nosso 'para sempre' já começou faz tempo."
          </p>
          
          <p className="font-dancing text-4xl md:text-5xl text-rose-500 font-bold mt-12 mb-6">
            "Amo vocês infinito..."
          </p>
          <p className="text-rose-400 font-playfair text-xl italic tracking-widest uppercase">
            ...como o universo em expansão.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 bg-white text-center border-t border-rose-50 relative z-10 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-8">💖</div>
          <p className="text-rose-400 font-dancing text-4xl mb-10">
            "Eu te amo muito mais do que as palavras podem dizer."
          </p>
          <div className="inline-block px-12 py-6 bg-rose-50 rounded-3xl shadow-inner mb-12">
             <p className="text-rose-600 font-playfair text-2xl italic m-0">Amor Puro</p>
             <p className="text-rose-300 text-xs tracking-widest mt-2"></p>
          </div>
          <div className="flex justify-center items-center gap-6 text-rose-100">
            <span className="h-px w-20 bg-rose-100"></span>
            <span className="text-xs font-bold text-gray-300 tracking-[0.5em]">INFINITO</span>
            <span className="h-px w-20 bg-rose-100"></span>
          </div>
          <p className="mt-12 text-gray-200 text-[10px] uppercase tracking-tighter">
            Criado com todo o amor do mundo.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
