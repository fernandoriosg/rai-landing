import React, { useState } from 'react';
import { ChevronDown, Phone, Zap, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '16562265640';
const WHATSAPP_DISPLAY = '+1 (656) 226-5640';
const CALL_LINK = 'tel:+16562265640';
const BOOKING_LINK = 'https://api.leadconnectorhq.com/widget/booking/cWCS0I0FvEGNDF1rroYK';
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const content = {
es: {
nav: { team: 'Equipo', demos: 'Demos', ofertas: 'Ofertas', contacto: 'Contacto' },
badge: 'IA + LEGAL',
heroLine1: 'Impulsa',
heroLine2: 'tu negocio',
heroLine3: 'con IA',
heroSubtitle: 'Implementación de IA con respaldo legal. Para clínicas, prácticas y negocios fronterizos. Sin comprometer privacidad, compliance ni regulaciones.',
ctaDemo: 'Agendar demo',
ctaHow: 'Ver cómo funciona',
heroCardSubtitle: 'Implementación IA Legal',
teamHeading: 'Quiénes somos',
fernandoName: 'Fernando Alberto Ríos',
fernandoRole: 'Abogado • Corporativo, Fiscal, Aduanal • 20+ años',
fernandoBio: 'Expertise en derecho corporativo mexicano y fronterizo. Especialista en compliance legal para IA — LFPDPPP, COFEPRIS, regulaciones IMMEX.',
fernandoTags: ['Legal', 'Frontera', 'Compliance'],
crackName: 'Crackgilio',
crackRole: 'AI Engineer • Tech Stack • Startups',
crackBio: 'Maestría en AI applications. Stack técnico: n8n, Vapi, APIs, modelos LLM. Profundo conocimiento de clínicas y negocios mexicanos fronterizos.',
crackTags: ['IA', 'Tech', 'Startups'],
valueProps: [
{ title: 'Legal + Técnico', text: 'Único equipo que maneja IA Y compliance legal en la frontera' },
{ title: 'Experiencia local', text: 'Conocemos clínicas, negocios y regulaciones de México-EE.UU.' },
{ title: 'Implementación rápida', text: 'De idea a producción en semanas, no meses' },
],
demosHeading1: 'Los demos',
demosHeading2: 'que cambian el juego',
waTitle: 'ChatBot WhatsApp',
waText: 'Automatización inteligente de calificación de leads. El visitor pregunta, el agente IA responde al instante, agenda cita automática.',
impactLabel: 'Impacto típico',
waImpact1: '+30% leads calificados',
waImpact2: '-60% tiempo de respuesta',
waCTA: 'Probar en vivo →',
waMsg: 'Hola, quiero probar el bot de WhatsApp de RAI',
voiceTitle: 'Recepcionista Voz IA',
voiceText: 'Contesta todas las llamadas. Bilingüe, sin pausas incómodas, naturalmente. Agenda citas, envía confirmaciones, te notifica.',
voiceImpact1: 'Recupera MXN $20K-90K',
voiceImpact2: 'en no-shows / mes',
voiceCTA: 'Llamar y probar →',
ofertasHeading1: 'Tres formas',
ofertasHeading2: 'de empezar',
checkupTitle: 'Legal Checkup',
checkupSubtitle: '+ IA Assessment',
checkupDesc: 'Revisión de privacidad + compliance operativo',
checkupPrice: '$25K',
checkupPeriod: 'MXN • 2 semanas',
checkupList: ['Revisión LFPDPPP + COFEPRIS', 'Análisis operativo IA-ready', 'Reporte legal + técnico', 'ROI + plan legal-first'],
checkupCTA: 'Comenzar',
implTitle: 'Implementación',
implBadge: 'MÁS POPULAR',
implDesc: 'Setup completo + listo para producción',
implPrice: '$60K',
implPeriod: 'MXN • hasta $180K • 1-2 semanas',
implList: ['Setup + integración completa', 'Entrenamiento a tu equipo', '7 días soporte 24/7', 'Kit LFPDPPP'],
implCTA: 'Comenzar ahora →',
retainerTitle: 'Retainer',
retainerDesc: 'Soporte + optimización continua',
retainerPrice: '$15K',
retainerPeriod: 'MXN/mes • hasta $45K',
retainerList: ['Soporte técnico dedicado', 'Optimización mensual', 'Reportes de impacto', 'Compliance actualizado'],
retainerCTA: 'Contratar',
retainerMsg: 'Hola, quiero contratar el plan Retainer de RAI',
ctaHeading: '¿Listo para impulsar tu negocio con IA?',
ctaSubtitle: 'Agenda una llamada de 30 minutos. Sin obligación. Solo para ver si es fit.',
ctaSchedule: 'Agendar ahora',
ctaWhatsapp: 'Enviar WhatsApp',
ctaWaMsg: 'Hola, vi la landing de Revolucional.AI y quiero agendar una llamada',
footerTagline: 'Implementación de IA con respaldo legal para clínicas, prácticas y negocios.',
footerServicesHeading: 'Servicios',
footerServices: ['Diagnóstico', 'Implementación', 'Soporte'],
footerLegalHeading: 'Legal',
footerLegal: ['Aviso de privacidad', 'Términos', 'LFPDPPP'],
footerContactHeading: 'Contacto',
footerEmail: '📧 hello@revolucional.ai',
footerWaLabel: '📱 WhatsApp: ',
footerWaMsg: 'Hola, vengo de la landing de Revolucional.AI',
footerLocation: '📍 Juárez, México',
copyright: '© 2026 Revolucional.AI | Implementación de IA con respaldo legal',
},
en: {
nav: { team: 'Team', demos: 'Demos', ofertas: 'Plans', contacto: 'Contact' },
badge: 'AI + LEGAL',
heroLine1: 'Power',
heroLine2: 'your business',
heroLine3: 'with AI',
heroSubtitle: 'AI implementation backed by legal expertise. For clinics, practices and border businesses. Without compromising privacy, compliance or regulations.',
ctaDemo: 'Book a demo',
ctaHow: 'See how it works',
heroCardSubtitle: 'Legal AI Implementation',
teamHeading: 'Who we are',
fernandoName: 'Fernando Alberto Ríos',
fernandoRole: 'Attorney • Corporate, Tax, Customs • 20+ years',
fernandoBio: 'Expertise in Mexican and border corporate law. Specialist in legal compliance for AI — LFPDPPP (Mexican data protection law), COFEPRIS, IMMEX regulations.',
fernandoTags: ['Legal', 'Border', 'Compliance'],
crackName: 'Crackgilio',
crackRole: 'AI Engineer • Tech Stack • Startups',
crackBio: 'Master’s in AI applications. Technical stack: n8n, Vapi, APIs, LLM models. Deep knowledge of Mexican border clinics and businesses.',
crackTags: ['AI', 'Tech', 'Startups'],
valueProps: [
{ title: 'Legal + Technical', text: 'The only team that handles both AI AND legal compliance on the border' },
{ title: 'Local experience', text: 'We know clinics, businesses and Mexico-U.S. regulations' },
{ title: 'Fast implementation', text: 'From idea to production in weeks, not months' },
],
demosHeading1: 'The demos',
demosHeading2: 'that change the game',
waTitle: 'WhatsApp ChatBot',
waText: 'Smart lead-qualification automation. The visitor asks, the AI agent replies instantly, books the appointment automatically.',
impactLabel: 'Typical impact',
waImpact1: '+30% qualified leads',
waImpact2: '-60% response time',
waCTA: 'Try it live →',
waMsg: 'Hi, I want to try RAI’s WhatsApp bot',
voiceTitle: 'AI Voice Receptionist',
voiceText: 'Answers every call. Bilingual, without awkward pauses, naturally. Books appointments, sends confirmations, notifies you.',
voiceImpact1: 'Recovers MXN $20K-90K',
voiceImpact2: 'in no-shows / month',
voiceCTA: 'Call and try it →',
ofertasHeading1: 'Three ways',
ofertasHeading2: 'to get started',
checkupTitle: 'Legal Checkup',
checkupSubtitle: '+ AI Assessment',
checkupDesc: 'Privacy review + operational compliance',
checkupPrice: '$25K',
checkupPeriod: 'MXN • 2 weeks',
checkupList: ['LFPDPPP + COFEPRIS review', 'AI-ready operational analysis', 'Legal + technical report', 'ROI + legal-first plan'],
checkupCTA: 'Get started',
implTitle: 'Implementation',
implBadge: 'MOST POPULAR',
implDesc: 'Full setup + production ready',
implPrice: '$60K',
implPeriod: 'MXN • up to $180K • 1-2 weeks',
implList: ['Full setup + integration', 'Training for your team', '7 days of 24/7 support', 'LFPDPPP kit'],
implCTA: 'Start now →',
retainerTitle: 'Retainer',
retainerDesc: 'Ongoing support + optimization',
retainerPrice: '$15K',
retainerPeriod: 'MXN/month • up to $45K',
retainerList: ['Dedicated technical support', 'Monthly optimization', 'Impact reports', 'Up-to-date compliance'],
retainerCTA: 'Sign up',
retainerMsg: 'Hi, I want to sign up for RAI’s Retainer plan',
ctaHeading: 'Ready to power your business with AI?',
ctaSubtitle: 'Book a 30-minute call. No obligation. Just to see if it’s a fit.',
ctaSchedule: 'Book now',
ctaWhatsapp: 'Send WhatsApp',
ctaWaMsg: 'Hi, I saw the Revolucional.AI landing page and I want to book a call',
footerTagline: 'AI implementation backed by legal expertise for clinics, practices and businesses.',
footerServicesHeading: 'Services',
footerServices: ['Assessment', 'Implementation', 'Support'],
footerLegalHeading: 'Legal',
footerLegal: ['Privacy notice', 'Terms', 'LFPDPPP'],
footerContactHeading: 'Contact',
footerEmail: '📧 hello@revolucional.ai',
footerWaLabel: '📱 WhatsApp: ',
footerWaMsg: 'Hi, I came from the Revolucional.AI landing page',
footerLocation: '📍 Juárez, Mexico',
copyright: '© 2026 Revolucional.AI | AI implementation backed by legal expertise',
},
};

function RAILogo({ className = 'w-8 h-10' }) {
return (
<svg viewBox="295 68 90 122" className={className} role="img" aria-label="RAI">
<defs>
<linearGradient id="raiShieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#3b82f6" />
<stop offset="100%" stopColor="#06b6d4" />
</linearGradient>
<linearGradient id="raiBoltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#ec4899" />
<stop offset="100%" stopColor="#f97316" />
</linearGradient>
<clipPath id="raiShieldClip">
<path d="M 305 90 L 305 120 Q 305 160 340 180 Q 375 160 375 120 L 375 90 L 340 80 L 305 90 Z" />
</clipPath>
</defs>
<path d="M 305 90 L 305 120 Q 305 160 340 180 Q 375 160 375 120 L 375 90 L 340 80 L 305 90 Z" fill="url(#raiShieldGrad)" />
<path d="M 347 82 L 306 130 L 337 130 L 326 170 L 375 118 L 347 118 Z" fill="url(#raiBoltGrad)" transform="rotate(90 340 130)" clipPath="url(#raiShieldClip)" />
<circle cx="340" cy="80" r="6" fill="#eab308" />
</svg>
);
}

function RAIShieldIcon({ className = 'w-8 h-10' }) {
return (
<svg viewBox="295 68 90 122" className={className} role="img" aria-label="Escudo RAI">
<defs>
<linearGradient id="raiShieldOnlyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" stopColor="#3b82f6" />
<stop offset="100%" stopColor="#06b6d4" />
</linearGradient>
</defs>
<path d="M 305 90 L 305 120 Q 305 160 340 180 Q 375 160 375 120 L 375 90 L 340 80 L 305 90 Z" fill="url(#raiShieldOnlyGrad)" />
<circle cx="340" cy="80" r="6" fill="#eab308" />
</svg>
);
}

function RAIBoltIcon({ className = 'w-8 h-10' }) {
return (
<svg viewBox="295 68 90 122" className={className} role="img" aria-label="Rayo RAI">
<defs>
<linearGradient id="raiBoltOnlyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#ec4899" />
<stop offset="100%" stopColor="#f97316" />
</linearGradient>
</defs>
<path d="M 347 82 L 306 130 L 337 130 L 326 170 L 375 118 L 347 118 Z" fill="url(#raiBoltOnlyGrad)" transform="rotate(90 340 130)" />
</svg>
);
}

export default function RAILanding() {
const [expandedFAQ, setExpandedFAQ] = useState(null);
const [lang, setLang] = useState('es');
const t = content[lang];

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
<div className="flex items-center gap-2">
<RAILogo className="w-7 h-9" />
<span className="text-2xl font-black gradient-text">RAI</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
<a href="#team" className="hover:text-white transition">{t.nav.team}</a>
<a href="#demos" className="hover:text-white transition">{t.nav.demos}</a>
<a href="#ofertas" className="hover:text-white transition">{t.nav.ofertas}</a>
<a href="#contacto" className="hover:text-white transition">{t.nav.contacto}</a>
<button
onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
className="border border-white/20 rounded-full px-3 py-1 text-xs font-bold hover:bg-white/10 transition"
aria-label="Switch language"
>
{lang === 'es' ? 'EN' : 'ES'}
</button>
</nav>
<button
onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
className="md:hidden border border-white/20 rounded-full px-3 py-1 text-xs font-bold hover:bg-white/10 transition"
aria-label="Switch language"
>
{lang === 'es' ? 'EN' : 'ES'}
</button>
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
{t.badge}
</span>
</div>

<h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
<span className="gradient-text">{t.heroLine1}</span>
<br />
<span className="gradient-text">{t.heroLine2}</span>
<br />
{t.heroLine3}
</h1>

<p className="text-xl text-gray-400 mb-8 font-light max-w-lg">
{t.heroSubtitle}
</p>

<div className="flex flex-col sm:flex-row gap-4">
<a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition flex items-center gap-2 w-fit">
{t.ctaDemo} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
</a>
<a href="#demos" className="inline-block border-2 border-gray-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white hover:bg-white/5 transition">
{t.ctaHow}
</a>
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
<RAILogo className="w-16 h-20 mx-auto mb-4 drop-shadow-lg" />
<p className="text-sm font-bold">RAI</p>
<p className="text-xs text-gray-200 mt-2">{t.heroCardSubtitle}</p>
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
<span className="gradient-text">{t.teamHeading}</span>
</h2>

<div className="grid md:grid-cols-2 gap-8 mb-12">
{/* Fernando */}
<div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition overflow-hidden">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4"></div>
<h3 className="text-2xl font-bold mb-2">{t.fernandoName}</h3>
<p className="text-sm text-gray-400 mb-4">{t.fernandoRole}</p>
<p className="text-gray-300 mb-4">
{t.fernandoBio}
</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">{t.fernandoTags[0]}</span>
<span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">{t.fernandoTags[1]}</span>
<span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">{t.fernandoTags[2]}</span>
</div>
</div>
</div>

{/* Crackgilio */}
<div className="group relative bg-gradient-to-br from-pink-900/20 to-orange-900/20 border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition overflow-hidden">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition"></div>
<div className="relative z-10">
<div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full mb-4"></div>
<h3 className="text-2xl font-bold mb-2">{t.crackName}</h3>
<p className="text-sm text-gray-400 mb-4">{t.crackRole}</p>
<p className="text-gray-300 mb-4">
{t.crackBio}
</p>
<div className="flex gap-2 flex-wrap">
<span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full">{t.crackTags[0]}</span>
<span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">{t.crackTags[1]}</span>
<span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">{t.crackTags[2]}</span>
</div>
</div>
</div>
</div>

{/* Value Props */}
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
<RAIShieldIcon className="w-8 h-10 mb-3" />
<p className="font-bold mb-2">{t.valueProps[0].title}</p>
<p className="text-sm text-gray-400">{t.valueProps[0].text}</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
<Phone className="w-8 h-8 text-cyan-400 mb-3" />
<p className="font-bold mb-2">{t.valueProps[1].title}</p>
<p className="text-sm text-gray-400">{t.valueProps[1].text}</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition">
<RAIBoltIcon className="w-8 h-10 mb-3" />
<p className="font-bold mb-2">{t.valueProps[2].title}</p>
<p className="text-sm text-gray-400">{t.valueProps[2].text}</p>
</div>
</div>
</div>
</section>

{/* Demos */}
<section id="demos" className="py-20 border-t border-white/10">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl font-black mb-16">
<span className="gradient-text">{t.demosHeading1}</span> {t.demosHeading2}
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
<h3 className="text-2xl font-bold">{t.waTitle}</h3>
</div>

<p className="text-gray-300 mb-6">
{t.waText}
</p>

<div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
<p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{t.impactLabel}</p>
<p className="text-xl font-bold">{t.waImpact1}</p>
<p className="text-xs text-gray-400">{t.waImpact2}</p>
</div>

<a href={waLink(t.waMsg)} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition">
{t.waCTA}
</a>
</div>
</div>

{/* Voice */}
<div className="group relative">
<div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative bg-black border border-white/20 rounded-2xl p-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full flex items-center justify-center">
<Zap className="w-6 h-6" />
</div>
<h3 className="text-2xl font-bold">{t.voiceTitle}</h3>
</div>

<p className="text-gray-300 mb-6">
{t.voiceText}
</p>

<div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
<p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{t.impactLabel}</p>
<p className="text-xl font-bold">{t.voiceImpact1}</p>
<p className="text-xs text-gray-400">{t.voiceImpact2}</p>
</div>

<a href={CALL_LINK} className="w-full inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition">
{t.voiceCTA}
</a>
</div>
</div>
</div>
</div>
</section>

{/* Ofertas */}
<section id="ofertas" className="py-20 border-t border-white/10">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-4xl font-black mb-16">
<span className="gradient-text">{t.ofertasHeading1}</span> {t.ofertasHeading2}
</h2>

<div className="grid md:grid-cols-3 gap-6">
{/* Legal Checkup + IA Assessment */}
<div className="group relative bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/60 transition overflow-hidden">
<div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

<h3 className="text-2xl font-bold mb-1 relative z-10">{t.checkupTitle}</h3>
<p className="text-blue-300 text-xs font-bold mb-3 relative z-10">{t.checkupSubtitle}</p>
<p className="text-gray-400 text-sm mb-6 relative z-10">{t.checkupDesc}</p>

<div className="mb-8 relative z-10">
<div className="text-5xl font-black gradient-text">{t.checkupPrice}</div>
<p className="text-gray-400 text-sm mt-2">{t.checkupPeriod}</p>
</div>

<ul className="space-y-3 mb-8 text-sm relative z-10">
{t.checkupList.map((item) => (
<li key={item} className="flex items-start gap-2 text-gray-300">
<span className="text-blue-400 font-bold mt-1">→</span>
<span>{item}</span>
</li>
))}
</ul>

<a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center border border-blue-400/50 text-blue-300 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition relative z-10">
{t.checkupCTA}
</a>
</div>

{/* Implementación - FEATURED */}
<div className="group relative md:scale-105 z-10">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
<div className="relative bg-black border border-white/30 rounded-2xl p-8 h-full flex flex-col">
<div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-black px-4 py-2 rounded-full w-fit mb-6">
{t.implBadge}
</div>

<h3 className="text-3xl font-bold mb-3">{t.implTitle}</h3>
<p className="text-gray-300 text-sm mb-8">{t.implDesc}</p>

<div className="mb-10">
<div className="text-6xl font-black gradient-text">{t.implPrice}</div>
<p className="text-gray-400 text-sm mt-2">{t.implPeriod}</p>
</div>

<ul className="space-y-3 mb-10 text-sm flex-1">
{t.implList.map((item) => (
<li key={item} className="flex items-start gap-2 text-gray-200">
<span className="text-cyan-400 font-bold mt-1">→</span>
<span>{item}</span>
</li>
))}
</ul>

<a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition">
{t.implCTA}
</a>
</div>
</div>

{/* Retainer */}
<div className="group relative bg-gradient-to-br from-yellow-900/30 to-transparent border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400/60 transition overflow-hidden">
<div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 group-hover:opacity-40 transition"></div>

<h3 className="text-2xl font-bold mb-3 relative z-10">{t.retainerTitle}</h3>
<p className="text-gray-400 text-sm mb-6 relative z-10">{t.retainerDesc}</p>

<div className="mb-8 relative z-10">
<div className="text-5xl font-black gradient-text">{t.retainerPrice}</div>
<p className="text-gray-400 text-sm mt-2">{t.retainerPeriod}</p>
</div>

<ul className="space-y-3 mb-8 text-sm relative z-10">
{t.retainerList.map((item) => (
<li key={item} className="flex items-start gap-2 text-gray-300">
<span className="text-yellow-400 font-bold mt-1">→</span>
<span>{item}</span>
</li>
))}
</ul>

<a href={waLink(t.retainerMsg)} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center border border-yellow-400/50 text-yellow-300 py-3 rounded-lg font-semibold hover:bg-yellow-500/10 transition relative z-10">
{t.retainerCTA}
</a>
</div>
</div>
</div>
</section>

{/* CTA */}
<section id="contacto" className="py-20 border-t border-white/10">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-5xl font-black mb-6 gradient-text">{t.ctaHeading}</h2>
<p className="text-xl text-gray-400 mb-10">
{t.ctaSubtitle}
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition">
{t.ctaSchedule}
</a>
<a href={waLink(t.ctaWaMsg)} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-gray-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:border-white transition">
{t.ctaWhatsapp}
</a>
</div>
</div>
</section>

{/* Footer */}
<footer className="bg-black border-t border-white/10 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<RAILogo className="w-6 h-8" />
<span className="text-white font-black gradient-text">RAI</span>
</div>
<p className="text-sm text-gray-400">{t.footerTagline}</p>
</div>
<div>
<p className="font-semibold text-white mb-4">{t.footerServicesHeading}</p>
<ul className="space-y-2 text-sm text-gray-400">
<li><a href="#ofertas" className="hover:text-white">{t.footerServices[0]}</a></li>
<li><a href="#ofertas" className="hover:text-white">{t.footerServices[1]}</a></li>
<li><a href="#ofertas" className="hover:text-white">{t.footerServices[2]}</a></li>
</ul>
</div>
<div>
<p className="font-semibold text-white mb-4">{t.footerLegalHeading}</p>
<ul className="space-y-2 text-sm text-gray-400">
<li><a href="/aviso-de-privacidad.html" className="hover:text-white">{t.footerLegal[0]}</a></li>
<li><a href="/terminos.html" className="hover:text-white">{t.footerLegal[1]}</a></li>
<li><a href="https://www.ordenjuridico.gob.mx/Documentos/Federal/html/wo125102.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">{t.footerLegal[2]}</a></li>
</ul>
</div>
<div>
<p className="font-semibold text-white mb-4">{t.footerContactHeading}</p>
<p className="text-sm text-gray-400">{t.footerEmail}</p>
<p className="text-sm text-gray-400">{t.footerWaLabel}<a href={waLink(t.footerWaMsg)} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">{WHATSAPP_DISPLAY}</a></p>
<p className="text-sm text-gray-400">{t.footerLocation}</p>
</div>
</div>
<div className="border-t border-gray-800 pt-8 text-sm text-center text-gray-500">
<p>{t.copyright}</p>
</div>
</div>
</footer>
</div>
);
}
