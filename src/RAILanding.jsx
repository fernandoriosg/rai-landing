import React, { useState } from 'react';
import { ChevronDown, Shield, Phone, Zap, ArrowRight } from 'lucide-react';

export default function RAILanding() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .float { animation: float 6s ease-in-out infinite; }
    .fade-in-up { animation: fadeInUp 0.8s ease-out; }
    .gradient-text {
      background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <style>{styles}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-black gradient-text">RAI</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#team" className="hover:text-white transition">Equipo</a>
            <a href="#demos" className="hover:text-white transition">Demos</a>
            <a href="#ofertas" className="hover:text-white transition">Ofertas</a>
            <a href="#contacto" className="hover:text-white transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="mb-4 inline-block">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-black text-xs font-black px-4 py-2 rounded-full">
                  IA + LEGAL
                </span>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
                <span className="gradient-text">Impulsa</span>
                <br />
                <span className="gradient-text">tu negocio</span>
                <br />
                con IA
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg">
                Implementación de IA con respaldo legal. Para clínicas, prácticas y negocios fronterizos. Sin comprometer privacidad, compliance ni regulaciones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition flex items-center gap-2">
                  Agendar demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="border-2 border-gray-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white hover:bg-white/5 transition">
                  Ver cómo funciona
                </button>
              </div>
            </div>

            <div className="relative h-96 hidden md:flex items-center justify-center">
              <div className="float w-64 h-80 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full opacity-30"></div>
                  <div className="absolute bottom-6 right-8 w-12 h-12 bg-white rounded-full opacity-20"></div>
                </div>
                <div className="flex items-center justify-center h-full relative z-10">
                  <div className="text-center">
                    <Zap className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                    <p className="text-sm font-bold">RAI</p>
                    <p className="text-xs text-gray-200 mt-2">Implementación IA Legal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-12">
            <span className="gradient-text">Quiénes somos</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Fernando */}
            <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">Fernando Alberto Ríos</h3>
                <p className="text-sm text-gray-400 mb-4">Abogado • Corporativo, Fiscal, Aduanal • 20+ años</p>
                <p className="text-gray-300 mb-4">
                  Expertise en derecho corporativo mexicano y fronterizo. Especialista en compliance legal para IA — LFPDPPP, COFEPRIS, regulaciones IMMEX.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Legal</span>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">Frontera</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">Compliance</span>
                </div>
              </div>
            </div>

            {/* Crackgilio */}
            <div className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold mb-2">Crackgilio</h3>
                <p className="text-sm text-gray-400 mb-4">AI Engineer • Tech Stack • Startups</p>
                <p className="text-gray-300 mb-4">
                  Maestría en AI applications. Stack técnico: n8n, Vapi, APIs, modelos LLM. Profundo conocimiento de clínicas y negocios mexicanos fronterizos.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">IA</span>
                  <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">Tech</span>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">Startups</span>
                </div>
              </div>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
              <Shield className="w-8 h-8 text-blue-400 mb-3" />
              <p className="font-bold mb-2">Legal + Técnico</p>
              <p className="text-sm text-gray-400">Único equipo que maneja IA Y compliance legal en la frontera</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
              <Phone className="w-8 h-8 text-cyan-400 mb-3" />
              <p className="font-bold mb-2">Experiencia local</p>
              <p className="text-sm text-gray-400">Conocemos clínicas, negocios y regulaciones de México-EE.UU.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
              <Zap className="w-8 h-8 text-purple-400 mb-3" />
              <p className="font-bold mb-2">Implementación rápida</p>
              <p className="text-sm text-gray-400">De idea a producción en semanas, no meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16">
            <span className="gradient-text">Los demos</span> que cambian el juego
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-black border border-white/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">ChatBot WhatsApp</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Automatización inteligente de calificación de leads. El visitor pregunta, el agente IA responde al instante, agenda cita automática.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Impacto típico</p>
                  <p className="text-xl font-bold">+30% leads calificados</p>
                  <p className="text-xs text-gray-400">-60% tiempo de respuesta</p>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition">
                  Probar en vivo →
                </button>
              </div>
            </div>

            {/* Voice */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-black border border-white/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Recepcionista Voz IA</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Contesta todas las llamadas. Bilingüe, sin pausas incómodas, naturalmente. Agenda citas, envía confirmaciones, te notifica.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Impacto típico</p>
                  <p className="text-xl font-bold">Recupera MXN $20K-90K</p>
                  <p className="text-xs text-gray-400">en no-shows / mes</p>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
                  Ver video 60seg →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ofertas */}
      <section id="ofertas" className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16">
            <span className="gradient-text">Tres formas</span> de empezar
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Legal Checkup + IA Assessment */}
            <div className="group relative bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition"></div>
              
              <h3 className="text-2xl font-bold mb-1 relative z-10">Legal Checkup</h3>
              <p className="text-blue-300 text-xs font-bold mb-3 relative z-10">+ IA Assessment</p>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Revisión de privacidad + compliance operativo</p>
              
              <div className="mb-8 relative z-10">
                <div className="text-5xl font-black gradient-text">$25K</div>
                <p className="text-gray-400 text-sm mt-2">MXN • 2 semanas</p>
              </div>

              <ul className="space-y-3 mb-8 text-sm relative z-10">
                {['Revisión LFPDPPP + COFEPRIS', 'Análisis operativo IA-ready', 'Reporte legal + técnico', 'ROI + plan legal-first'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 font-bold mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full border border-blue-400/50 text-blue-300 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition relative z-10">
                Comenzar
              </button>
            </div>

            {/* Implementación - FEATURED */}
            <div className="group relative md:scale-105 z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <div className="relative bg-black border border-white/30 rounded-2xl p-8 h-full flex flex-col">
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xs font-black px-4 py-2 rounded-full w-fit mb-6">
                  MÁS POPULAR
                </div>

                <h3 className="text-3xl font-bold mb-3">Implementación</h3>
                <p className="text-gray-300 text-sm mb-8">Setup completo + listo para producción</p>
                
                <div className="mb-10">
                  <div className="text-6xl font-black gradient-text">$60K</div>
                  <p className="text-gray-400 text-sm mt-2">MXN • hasta $180K • 1-2 semanas</p>
                </div>

                <ul className="space-y-3 mb-10 text-sm flex-1">
                  {['Setup + integración completa', 'Entrenamiento a tu equipo', '7 días soporte 24/7', 'Kit LFPDPPP'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-200">
                      <span className="text-cyan-400 font-bold mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition">
                  Comenzar ahora →
                </button>
              </div>
            </div>

            {/* Retainer */}
            <div className="group relative bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition"></div>
              
              <h3 className="text-2xl font-bold mb-3 relative z-10">Retainer</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">Soporte + optimización continua</p>
              
              <div className="mb-8 relative z-10">
                <div className="text-5xl font-black gradient-text">$15K</div>
                <p className="text-gray-400 text-sm mt-2">MXN/mes • hasta $45K</p>
              </div>

              <ul className="space-y-3 mb-8 text-sm relative z-10">
                {['Soporte técnico dedicado', 'Optimización mensual', 'Reportes de impacto', 'Compliance actualizado'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300">
                    <span className="text-purple-400 font-bold mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full border border-purple-400/50 text-purple-300 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition relative z-10">
                Contratar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-6 gradient-text">¿Listo para impulsar tu negocio con IA?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Agenda una llamada de 30 minutos. Sin obligación. Solo para ver si es fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition">
              Agendar ahora
            </button>
            <button className="border-2 border-gray-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:border-white transition">
              Enviar WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-black mb-4 gradient-text">RAI</div>
              <p className="text-sm text-gray-400">Implementación de IA con respaldo legal para clínicas, prácticas y negocios.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Servicios</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Diagnóstico</a></li>
                <li><a href="#" className="hover:text-white">Implementación</a></li>
                <li><a href="#" className="hover:text-white">Soporte</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Aviso de privacidad</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
                <li><a href="#" className="hover:text-white">LFPDPPP</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Contacto</p>
              <p className="text-sm text-gray-400">📧 hello@revolucional.ai</p>
              <p className="text-sm text-gray-400">📱 WhatsApp: [número]</p>
              <p className="text-sm text-gray-400">📍 Juárez, México</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-500">
            <p>© 2026 Revolucional.AI | Implementación de IA con respaldo legal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
