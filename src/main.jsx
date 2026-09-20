import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Icon = ({ name, size = 18 }) => {
  const common = { width:size, height:size, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:'1.8', strokeLinecap:'round', strokeLinejoin:'round', 'aria-hidden':'true' };
  const paths = {
    flask: <><path d="M9 3h6"/><path d="M10 3v6.2L4.6 18a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M7 16h10"/></>,
    arrowDown: <><path d="M12 5v14"/><path d="m6 13 6 6 6-6"/></>,
    arrowUp: <><path d="M12 19V5"/><path d="m6 11 6-6 6 6"/></>,
    arrowRight: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    git: <><path d="M9 7v6"/><path d="M15 11V7"/><path d="M9 13a3 3 0 1 0 6 0V9"/><circle cx="9" cy="5" r="2"/><circle cx="15" cy="5" r="2"/><circle cx="12" cy="18" r="2"/><path d="M9 15v1a3 3 0 0 0 3 3"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
    brain: <><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.5A3.5 3.5 0 0 0 4 12a3.5 3.5 0 0 0 2 3.1V16a3 3 0 0 0 3 3h.5"/><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.5a3.5 3.5 0 0 1 2 3.5 3.5 3.5 0 0 1-2 3.1V16a3 3 0 0 1-3 3h-.5"/><path d="M12 4v16"/><path d="M7 9h2M15 9h2M7 14h2M15 14h2"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    spark: <><path d="m12 3 1.2 5.8L19 10l-5.8 1.2L12 17l-1.2-5.8L5 10l5.8-1.2L12 3Z"/><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
};

const projects = [
 {id:'EXP-01',title:'Customer Churn Prediction',type:'PREDICTIVE ALCHEMY',desc:'A machine-learning pipeline that transforms customer behavior into actionable churn predictions.',result:'84% accuracy',stack:'Python · SQL · XGBoost · Scikit-learn · Power BI',url:'https://github.com/Anas9402/customer-churn-analysis-and-prediction'},
 {id:'EXP-02',title:'AI-Powered Spam Detection',type:'TEXT PURIFICATION',desc:'An NLP classification system that identifies suspicious emails using preprocessing and machine learning.',result:'94% accuracy · 0.92 F1',stack:'Python · NLP · Scikit-learn · TF-IDF',url:'https://github.com/Anas9402'},
 {id:'EXP-03',title:'Hybrid Log Classification',type:'MULTI-STAGE INFERENCE',desc:'A hybrid classifier combining regex rules, BERT embeddings and an LLM fallback for automated log processing.',result:'Rule → BERT → LLM',stack:'FastAPI · BERT · LLaMA · Groq API · Python',url:'https://github.com/Anas9402'},
 {id:'EXP-04',title:'Mobile Sales Intelligence',type:'VISUAL INTELLIGENCE',desc:'An interactive dashboard for exploring sales performance, revenue trends and business KPIs.',result:'Interactive KPI dashboard',stack:'Power BI · Excel · Data Analysis',url:'https://github.com/Anas9402'}
];
const skills=[['Python','Core language & automation','code'],['SQL','Data extraction & analysis','database'],['Machine Learning','Prediction & classification','brain'],['NLP','Text understanding','spark'],['Generative AI','LLMs & intelligent apps','spark'],['Power BI','Business intelligence','database'],['FastAPI','AI/ML backend APIs','code'],['Git & GitHub','Version control','git']];

function App(){
 const [loading,setLoading]=useState(true),[menu,setMenu]=useState(false),[active,setActive]=useState('home');
 useEffect(()=>{const t=setTimeout(()=>setLoading(false),1400); const s=()=>{const y=scrollY+180; let c='home'; ['home','about','lab','experiments','journey','contact'].forEach(id=>{const e=document.getElementById(id);if(e&&e.offsetTop<=y)c=id});setActive(c)};addEventListener('scroll',s,{passive:true});return()=>{clearTimeout(t);removeEventListener('scroll',s)}},[]);
 const go=id=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
 return <>
  {loading&&<div className="loader"><div className="loader-inner"><div className="sigil"><Icon name="flask" size={34}/></div><p className="mono">ALCHEMY LAB // BOOT SEQUENCE</p><div className="progress"><span/></div><div className="boot-grid mono"><span>DATA SOURCE</span><b>CONNECTED</b><span>PYTHON ENGINE</span><b>ONLINE</b><span>ML ENGINE</span><b>ONLINE</b><span>GENAI CORE</span><b>ONLINE</b></div></div></div>}
  <div className="noise"/>
  <nav className="nav"><button className="brand" onClick={()=>go('home')}><span className="brand-mark"><Icon name="flask" size={17}/></span> ANAS<span className="gold">.LAB</span></button><div className={'nav-links '+(menu?'open':'')}>{['home','about','lab','experiments','journey','contact'].map(x=><button key={x} className={active===x?'active':''} onClick={()=>go(x)}>{x}</button>)}</div><button className="menu-btn" onClick={()=>setMenu(!menu)}><Icon name={menu?'close':'menu'}/></button></nav>
  <main>
   <section id="home" className="hero section-pad"><div className="orb orb-a"/><div className="orb orb-b"/><div className="hero-copy"><div className="eyebrow"><span className="dot"/> ALCHEMIST PROFILE // DS-GENAI</div><h1>ANAS<br/><em>ATHAR</em></h1><p className="hero-title">THE <span>DATA ALCHEMIST</span></p><p className="lead">I transform raw data into intelligent solutions — one experiment at a time.</p><div className="hero-actions"><button className="btn primary" onClick={()=>go('experiments')}>ENTER THE LAB <Icon name="arrowDown" size={17}/></button><a className="btn ghost" href="https://github.com/Anas9402" target="_blank" rel="noreferrer"><Icon name="git" size={17}/> GITHUB <Icon name="arrowRight" size={16}/></a></div><div className="hero-meta mono"><span>LOCATION // INDIA</span><span>FOCUS // DATA · AI · GENAI</span><span>STATUS // BUILDING</span></div></div><div className="hero-art"><div className="alchemy-ring ring-1"/><div className="alchemy-ring ring-2"/><div className="alchemy-ring ring-3"/><div className="profile-frame"><img src="/profile.png" alt="Anas Athar" className="profile-image"/><div className="profile-scan"/></div><div className="profile-label mono"><span>ANAS ATHAR</span><small>DATA ALCHEMIST</small></div><div className="particle p1"/><div className="particle p2"/><div className="particle p3"/><div className="particle p4"/></div></section>
   <section id="about" className="section-pad section-dark"><div className="section-head"><span className="section-no">01</span><div><p className="kicker">THE ALCHEMIST</p><h2>Every dataset hides a story.</h2></div></div><div className="about-grid"><div className="about-quote">My job is to <span>uncover it.</span></div><div className="about-text"><p>I’m Anas Athar, an MCA student focused on Data Science and Generative AI. I enjoy turning messy data, machine learning models and modern AI tools into practical products.</p><p>My toolkit spans Python, SQL, machine learning, NLP, Power BI, FastAPI and LLM-based applications. I learn by building — and every project is another experiment.</p><div className="stats"><div><b>04+</b><span>FEATURED EXPERIMENTS</span></div><div><b>94%</b><span>BEST CLASSIFICATION ACCURACY</span></div><div><b>01</b><span>MISSION: BUILD INTELLIGENCE</span></div></div></div></div></section>
   <section id="lab" className="section-pad"><div className="section-head"><span className="section-no">02</span><div><p className="kicker">THE LAB</p><h2>My alchemy toolkit.</h2></div></div><div className="skill-grid">{skills.map(([n,d,i],x)=><div className="skill-card" key={n}><span className="skill-index">0{x+1}</span><div className="skill-icon"><Icon name={i}/></div><h3>{n}</h3><p>{d}</p><div className="card-line"/></div>)}</div></section>
   <section id="experiments" className="section-pad section-dark"><div className="section-head"><span className="section-no">03</span><div><p className="kicker">EXPERIMENT CHAMBER</p><h2>Proof, not promises.</h2></div></div><div className="project-list">{projects.map(p=><article className="project" key={p.id}><div className="project-no mono">{p.id}</div><div className="project-main"><p className="kicker">{p.type}</p><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.stack.split(' · ').map(t=><span key={t}>{t}</span>)}</div></div><div className="project-result"><small>RESULT</small><strong>{p.result}</strong><a href={p.url} target="_blank" rel="noreferrer">VIEW ARTIFACT <Icon name="arrowRight" size={15}/></a></div></article>)}</div></section>
   <section id="journey" className="section-pad"><div className="section-head"><span className="section-no">04</span><div><p className="kicker">THE JOURNEY</p><h2>From learner to builder.</h2></div></div><div className="timeline"><div className="timeline-item"><span>2022 — 2025</span><div><h3>Bachelor of Computer Applications</h3><p>Built the foundation in programming, databases and software development.</p></div></div><div className="timeline-item"><span>2025 — PRESENT</span><div><h3>Master of Computer Applications</h3><p>Focused on Data Science and Generative AI at University of Lucknow.</p></div></div><div className="timeline-item"><span>SEP — DEC 2025</span><div><h3>Data Science Intern · CodeAlpha</h3><p>Worked with datasets, preprocessing, ML models and visualizations using Python and Scikit-learn.</p></div></div><div className="timeline-item current"><span>NOW</span><div><h3>Building intelligent systems</h3><p>Exploring NLP, LLMs, RAG, AI APIs and production-ready ML applications.</p></div></div></div></section>
   <section id="contact" className="contact section-pad section-dark"><div className="contact-card"><div><p className="kicker">FINAL TRANSMISSION</p><h2>Have a problem<br/><em>worth solving?</em></h2><p>Send it to the lab. Let’s turn the raw material into something intelligent.</p></div><div className="contact-actions"><a
  className="btn primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=anasathar9139@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <Icon name="mail" size={17}/>
  CONTACT THE ALCHEMIST
</a><a className="btn ghost" href="https://www.linkedin.com/in/anas-athar-aa0a85270/" target="_blank" rel="noopener noreferrer">LINKEDIN <Icon name="arrowRight" size={16}/></a><a className="resume" href="https://drive.google.com/uc?export=download&id=17PWciZJahr0X3pfcaEcbKyIL_AXETVAq" target="_blank" rel="noopener noreferrer"><Icon name="download" size={16}/> DOWNLOAD RESUME</a></div></div></section>
  </main>
  <footer><span>© 2026 ANAS ATHAR // ALCHEMY LAB</span><span className="mono">RAW DATA IN · INTELLIGENCE OUT</span><button onClick={()=>go('home')} aria-label="Back to top"><Icon name="arrowUp" size={16}/></button></footer>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
