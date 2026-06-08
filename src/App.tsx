import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const accentColor = 'orange-500';

import postsData from './data/posts.json';

  const posts = postsData;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Secretos De Mujer <span style={{ color: accentColor }}> 4.6 (120 reseñas)</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Nuestros Servicios</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                <a href="https://wa.me/+57 312 5421191?text=Hola! Vengo desde su sitio web." className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                  Reservar 
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Ubicación</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <iframe src={`https://www.google.com/maps/embed?location=7.891577300000001,-72.4954449&zoom=15`} frameBorder="0" width="100%" height="300" allowFullScreen></iframe>
            <a href="https://www.google.com/maps/search/?api=1&query=7.891577300000001,-72.4954449" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity mt-4" style={{ color: accentColor }}>
              Cómo Llegar 
            </a>
          </div>
        </div>
        <footer className="bg-gray-900 text-white p-8 mt-12">
          <p>Powered by PNN Portal Neural Nexus | Nexus Hive Federation</p>
          <a href="https://neural-nexus-inky.vercel.app/" className="text-white hover:opacity-70 transition-opacity">Visitar sitio web</a>
        </footer>
      </section>
      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-wider">Secretos De Mujer</h3>
                <p className="text-slate-400 text-sm mt-1">CALLE 7A # 3E-10, Barrio Popular, Br. Popular, Cúcuta, Norte de Santander, Colombia</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=7.891577300000001,-72.4954449" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              Cómo Llegar 
            </a>
          </div>
        </div>
      </section>
      <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">SECRETOS DE MUJER</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/+57 312 5421191?text=Hola! Vengo desde su sitio web."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce"
      >
      </a>
    </div>
  );
}

export default App;