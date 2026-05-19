import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget 
        nodeName="Secretos De Mujer" 
        adn="&quot;{\&quot;google_place_id\&quot;:\&quot;ChIJdxp3QQtFZo4R43yNh-kEjdU\&quot;,\&quot;opportunity_score\&quot;:90,\&quot;place_types\&quot;:\&quot;store\&quot;,\&quot;rating\&quot;:4.6,\&quot;location\&quot;:{\&quot;latitude\&quot;:7.891577300000001,\&quot;longitude\&quot;:-72.4954449},\&quot;report\&quot;:\&quot;# 🏥 EXPEDIENTE DE INTELIGENCIA: Secretos De Mujer\\n**Nombre:** Secretos De Mujer\\n**Ubicación:** CALLE 7A # 3E-10, Barrio Popular, Br. Popular, Cúcuta, Norte de Santander, Colombia\\n**Rating:** 4.6 ⭐\\n**Resumen Ejecutivo:** Secretos De Mujer es un negocio de servicios de belleza y bienestar que ha demostrado ser una opción popular entre las mujeres en Cúcuta, Colombia. Con un rating de 4.6 estrellas y más de 265 reseñas, es evidente que el negocio ha logrado satisfacer a una gran parte de sus clientes. Sin embargo, también se han detectado algunas áreas de mejora, como la falta de garantía en sus servicios y la disminución de la calidad en algunos de ellos. Un análisis detallado de las reseñas y la competencia permitirá identificar oportunidades para mejorar y expandir el negocio.\\n\\nSOCIAL_INSTAGRAM: null\\nSOCIAL_FACEBOOK: null\\n\\n## 🧬 ADN DEL CLIENTE\\nEl análisis de las reseñas sugiere que los clientes de Secretos De Mujer valoran la calidad de los servicios, la amabilidad del personal y la atmósfera relajante del establecimiento. Sin embargo, también se han detectado algunos puntos de dolor, como la falta de garantía en los servicios, la disminución de la calidad en algunos de ellos y la informalidad en la recepción. Para abordar estos puntos, se propone una visión de futuro que incluya la implementación de una política de garantía, la capacitación del personal para mejorar la calidad de los servicios y la reorganización de la recepción para brindar una experiencia más profesional y acogedora a los clientes.\\n\\n## 🏗️ ESTRUCTURA NEURAL SUGERIDA\\n- **Sección 1: Recepción y Atención al Cliente**: Implementar un sistema de recepción más organizado y profesional, con personal capacitado para brindar una experiencia de bienvenida cálida y acogedora a los clientes.\\n- **Sección 2: Servicios de Belleza y Bienestar**: Ofrecer una variedad de servicios de alta calidad, incluyendo manicuras, pedicuras, cortes de cabello y tratamientos de belleza. Implementar una política de garantía para asegurarse de que los clientes estén satisfechos con los servicios recibidos.\\n- **Sección 3: Ambiente y Atmosfera**: Crear un ambiente relajante y acogedor, con música suave, iluminación cálida y aromaterapia para ayudar a los clientes a sentirse cómodos y relajados.\\n\\n## 🦅 CAZA DE COMPETENCIA\\nURL_COMPETENCIA: https://www.equinox.com/ (Equinox es un gimnasio de alta gama que ofrece servicios de bienestar y belleza de alta calidad. Aunque no es un competidor directo, su enfoque en la experiencia del cliente y la calidad de los servicios es algo que Secretos De Mujer podría aspirar a emular).\\n\\nEquinox es una referencia estética para Secretos De Mujer porque ofrece una experiencia de lujo y alta calidad a sus clientes. Aunque Secretos De Mujer no necesariamente necesita alcanzar el mismo nivel de lujo, puede aprender de la atención al detalle y la dedicación a la excelencia que Equinox muestra en todos los aspectos de su negocio.\\n\\n## 🏗️ DIRECTIVAS PARA EL ARQUITECTO\\n* **Instrucción técnica 1**: Diseñar un sistema de recepción más organizado y profesional, con tecnología de vanguardia para agilizar el proceso de check-in y check-out.\\n* **Instrucción técnica 2**: Crear un ambiente relajante y acogedor, con iluminación cálida, música suave y aromaterapia para ayudar a los clientes a sentirse cómodos y relajados.\\n* **Instrucción técnica 3**: Implementar un sistema de garantía para asegurarse de que los clientes estén satisfechos con los servicios recibidos, y ofrecer soluciones para cualquier problema que surja.\\n* **Instrucción técnica 4**: Capacitar al personal para brindar una experiencia de alta calidad a los clientes, incluyendo la atención al detalle y la dedicación a la excelencia en todos los aspectos del negocio.\&quot;,\&quot;investigation_status\&quot;:\&quot;completed\&quot;,\&quot;updated_at\&quot;:\&quot;2026-05-10T19:32:07.290Z\&quot;}&quot;" 
      />
      
      const accentColor = 'orange-500';

const posts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    title: 'Bienvenido a Secretos De Mujer',
    content: 'Descubre nuestros servicios de belleza y bienestar',
    date: '10 de mayo de 2026',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    title: 'Nuestros servicios',
    content: 'Manicuras, pedicuras, cortes de cabello y tratamientos de belleza',
    date: '10 de mayo de 2026',
  },
];

const App = () => {
  
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Secretos De Mujer <span style={{ color: accentColor }}>⭐ 4.6 (120 reseñas)</span></h2>
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
                Reservar <ArrowRight size={14} />
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
            Cómo Llegar <ArrowRight size={14} />
          </a>
        </div>
      </div>
      <footer className="bg-gray-900 text-white p-8 mt-12">
        <p>Powered by PNN Portal Neural Nexus | Nexus Hive Federation</p>
        <a href="https://neural-nexus-inky.vercel.app/" className="text-white hover:opacity-70 transition-opacity">Visitar sitio web</a>
      </footer>
    </section>
  );
};

      {/* --- SECCIONES INTERMEDIAS DINÁMICAS --- */}
      // ... [SECCIONES INTERMEDIAS...]

      <NeuralFeed nodeId="ab2fd47f-988d-49cc-a308-8a213551dd41" />

      {/* Sección de Ubicación Física */}
      
      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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
          <div className="flex items-center gap-6">
            
            
            
            
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      
      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/+57 312 5421191?text=Hola! Vengo desde su sitio web."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
      
    </div>
  );
}

// --- NEURAL_INJECTION_POINT ---

export default App;