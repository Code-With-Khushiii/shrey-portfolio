import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Product Manager with 4+ years building SaaS and AI-native products across growth, analytics, and customer operations, driving a 12% revenue lift, 38% conversion gains, and 25% DAU growth through experimentation and UX optimization. Owned customer-facing healthcare platforms, delivering 30% adoption growth, 75% customer-base expansion, and 45% recurring revenue increase using KPI playbooks and onboarding analytics. Shipped LLM/agent workflows reducing manual operational effort by 40%+, including GTM automation (85%+ lead qualification), AI voice ops (70%+ call automation, 90%+ booking completion), and LLM grading (80% higher accuracy, 95% faster evaluation).";

  const experience = [
    {
      company: "Samp Surad Group",
      role: "AI Product Manager – Innovation and Internal Automation",
      location: "Jersey City, NJ",
      dates: "Jul. 2025 – Present",
      highlights: [
        "Led end-to-end AI product strategy, shipping agent-based workflows that reduced GTM and analytics effort by 40%+.",
        "Built AI-powered GTM/RevOps workflows using n8n, HubSpot API, Python, SQL, and LLMs to scale lead sourcing, scoring, personalization, and outreach execution.",
        "Deployed an LLM chatbot vertically trained on internal documentation and knowledge bases, delivering accurate real-time client responses and reducing support dependency by 70%+"
      ]
    },
    {
      company: "NYU IT",
      role: "Associate Product Manager – Product Analytics & Development",
      location: "New York, USA",
      dates: "May. 2024 – May. 2025",
      highlights: [
        "Engineered automated ETL and KPI reporting with Python, SQL, Tableau, cutting manual reporting by 45% and improving reporting speed by 50%.",
        "Owned experimentation and performance measurement (KPIs, OKRs, A/B tests), translating insights into feature prioritization and roadmap updates across internal platforms.",
        "Led sprint planning and execution (backlog, user stories, release coordination), improving on-time delivery by 35% and increasing release predictability."
      ]
    },
    {
      company: "Noetic Technologies",
      role: "Product Manager – Customer Success & SaaS Operations",
      location: "Mumbai, India",
      dates: "Jun. 2022 – Aug. 2023",
      highlights: [
        "Owned end-to-end product strategy and delivery for a customer engagement and scheduling SaaS platform serving 10+ enterprise healthcare clients, increasing adoption and active user engagement by 30%.",
        "Launched invite and referral growth loops that expanded the customer base by 75% and drove a 45% increase in recurring SaaS revenue through measurable network effects.",
        "Crafted KPI playbooks and dashboards tracking onboarding completion, invite acceptance, repeat engagement, and cohort retention, reducing churn by 60% and improving onboarding efficiency.",
        "Translated customer feedback and support insights into roadmap priorities and release scopes, improving feature adoption and lowering recurring customer issues across key workflows.",
        "Identified monetization and upsell opportunities using user-behavior analytics and sales inputs, delivering feature expansions that produced a 55% uplift in ARR."
      ]
    },
    {
      company: "Bewakoof Brands Pvt. Ltd.",
      role: "Product Manager – Business Analytics & Cloud Operations",
      location: "Mumbai, India",
      dates: "Jun. 2021 – Jun. 2022",
      highlights: [
        "Engineered 38% improvement in conversion rates and 12% increase in overall revenue by diagnosing funnel drop-offs, prioritizing UX fixes, and executing A/B-tested journey optimizations across web and mobile.",
        "Increased retention by 35% and daily active users (DAUs) by 25% over two quarters by launching reactivation experiments, referral mechanics, and friend-invite growth loops.",
        "Lifted repeat purchase frequency by 30% and improved engagement by 20% through behavior analytics, cohort tracking, and iterative checkout enhancements.",
        "Drove 17% increase in average order value (AOV) by shipping personalized recommendation experiences in collaboration with analytics and marketing teams, improving click-through rates on featured collections."
      ]
    }
  ];

  const projects = [
    {
      title: "GTMFlow",
      subtitle: "Autonomous GTM Orchestration | Travel & Healthcare",
      category: "AI/Automation",
      introduction: "Built and established an agent-driven GTM orchestration platform, automating 85%+ of lead-to-qualification execution across SDR workflows.",
      problem: "Manual lead qualification and outreach processes created bottlenecks in SDR workflows, limiting scalability and increasing operational overhead.",
      objective: "Automate 85%+ of lead-to-qualification execution to improve throughput and reduce manual GTM overhead.",
      methodology: [
        "Orchestrated enrichment, scoring, routing, and follow-ups in a single workflow using n8n and AI agents.",
        "Integrated with HubSpot API and other CRM systems for seamless data flow.",
        "Implemented LLM-based personalization for outreach at scale."
      ],
      results: [
        "Automated 85%+ of lead-to-qualification execution across SDR workflows.",
        "Improved qualification-to-meeting throughput significantly.",
        "Reduced manual GTM overhead through agent-driven orchestration."
      ],
      conclusion: "Demonstrated how AI agents can transform GTM operations, delivering scalable lead qualification with minimal human intervention."
    },
    {
      title: "ANDREA – AI Voice Receptionist",
      subtitle: "Wellness First Dental Clinic",
      category: "AI/Voice",
      introduction: "Built a multi-agent LLM voice receptionist with n8n automation for appointment intake, scheduling, and confirmations end-to-end.",
      problem: "Dental clinics faced high call volumes and missed appointments due to manual scheduling processes and limited reception hours.",
      objective: "Automate inbound call handling and appointment scheduling to improve patient experience and reduce no-shows.",
      methodology: [
        "Developed multi-agent LLM voice system using n8n automation.",
        "Integrated with ElevenLabs and Vapi for natural voice interactions.",
        "Connected to clinic scheduling systems for real-time availability and confirmations."
      ],
      results: [
        "Automated 70%+ inbound calls with 90%+ booking completion across 100+ simulated conversations.",
        "Enabled 24/7 appointment scheduling without human intervention.",
        "Significantly reduced no-shows through automated confirmations."
      ],
      conclusion: "Showcased the potential of AI voice agents in healthcare, delivering seamless patient experiences while reducing operational costs."
    },
    {
      title: "AI Examination Grading Platform",
      subtitle: "Tata ClassEdge Collaboration",
      category: "AI/Education",
      introduction: "Developed and deployed an LLM-powered grading system using LLaMA + Vertex AI, structuring prompts and evaluation pipelines for scalable assessment.",
      problem: "Manual grading of examinations was time-consuming, inconsistent, and couldn't scale with growing student populations.",
      objective: "Create an automated grading system that matches or exceeds human accuracy while dramatically reducing evaluation time.",
      methodology: [
        "Deployed LLaMA models on Google Vertex AI for scalable inference.",
        "Engineered structured prompts and evaluation pipelines for consistent scoring.",
        "Implemented targeted fine-tuning for subject-specific grading accuracy."
      ],
      results: [
        "Improved scoring accuracy by 80% and accelerated evaluation speed by 95% versus manual grading.",
        "Enabled scalable assessment for large student populations.",
        "Reduced educator workload while maintaining grading consistency."
      ],
      conclusion: "Proved that LLM-powered grading can transform educational assessment, delivering faster, more accurate evaluations at scale."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Languages & Libraries',
      skills: ['Python', 'SQL (MySQL, PostgreSQL, Snowflake)', 'Java', 'C++', 'Pandas', 'NumPy', 'SciPy']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & BI',
      skills: ['Tableau', 'Power BI', 'Looker', 'Google Analytics', 'Excel']
    },
    {
      icon: Users,
      title: 'AI / GenAI & Automation',
      skills: ['Vertex AI', 'LLaMA', 'OpenAI APIs', 'Prompt Engineering', 'NLP Pipelines', 'Agentic Workflows', 'n8n', 'ElevenLabs', 'Vapi']
    },
    {
      icon: Lightbulb,
      title: 'Cloud & Engineering',
      skills: ['AWS (S3, Redshift, Lambda)', 'GCP (BigQuery, Vertex AI)', 'Airflow', 'Jira', 'Confluence', 'Figma', 'Notion', 'HubSpot CRM', 'Salesforce']
    }
  ];

  const education = [
    {
      school: "New York University, Tandon School of Engineering",
      degree: "Master of Science, Management of Technology",
      location: "New York, USA",
      dates: "Aug. 2023 – May. 2025"
    },
    {
      school: "NMIMS University",
      degree: "Bachelor of Technology, Computer Science Engineering",
      location: "Mumbai, India",
      dates: "Jun. 2017 – May. 2021"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">SHREY KAMDAR</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              SHREY KAMDAR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Product Manager | AI & GTM Products | Customer-Centric Growth
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              NEW YORK, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔧 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'REVENUE LIFT', value: '12%', detail: 'Through UX optimization' },
              { label: 'CONVERSION GAIN', value: '38%', detail: 'Funnel optimization' },
              { label: 'GTM AUTOMATION', value: '85%+', detail: 'Lead qualification' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              AI-native product leader blending technical depth with growth strategy to ship products that scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Growth & Analytics',
                detail: 'Drove 12% revenue lift, 38% conversion gains, and 25% DAU growth through experimentation and data-driven optimization.'
              },
              {
                icon: Rocket,
                title: 'AI/LLM Workflows',
                detail: 'Shipped agent-based workflows reducing manual effort by 40%+, including GTM automation, AI voice ops, and LLM grading systems.'
              },
              {
                icon: Lightbulb,
                title: 'Customer-Centric',
                detail: 'Delivered 30% adoption growth and 75% customer-base expansion in healthcare SaaS through KPI playbooks and onboarding analytics.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Building SaaS and AI-native products across growth, analytics, and customer operations.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              AI automation, voice operations, and intelligent grading systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Technical toolkit for AI product development and growth operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's build AI-native products that drive growth and customer value.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+15163220440"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (516) 322-0440
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/shreykamdar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:shreykapplications@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                shreykapplications@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Shrey Kamdar · Product Manager | AI & GTM Products.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;