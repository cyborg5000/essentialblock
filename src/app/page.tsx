import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

// Code split heavy interactive components for better performance
const HeroVisual = dynamic(() => import("@/components/HeroVisual"), {
  loading: () => (
    <div className="relative h-[300px] sm:h-[360px] md:h-[520px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
    </div>
  ),
});

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => (
    <div className="space-y-6 animate-pulse">
      <div className="h-12 bg-white/70 rounded-lg"></div>
      <div className="h-12 bg-white/70 rounded-lg"></div>
      <div className="h-32 bg-white/70 rounded-lg"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden section-sheen py-20 md:py-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-0 left-[-10%] h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.7),transparent_55%)]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs sm:text-sm font-medium text-ink shadow-sm animate-fade-in">
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  Essential Block Studio
                </div>
                <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-ink animate-fade-in-delay-1">
                  Turn every brand touchpoint into revenue.
                </h1>
                <p className="mt-6 text-base sm:text-lg text-ink-muted leading-relaxed animate-fade-in-delay-2">
                  We combine data-backed marketing strategy with premium gifting programs to drive measurable
                  growth — so every dollar builds pipeline and strengthens client relationships.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
                  <Link
                    href="#contact"
                    className="btn-primary px-8 py-4 rounded-full text-center font-medium flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <span>Get Your Free Brand Audit</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#services"
                    className="btn-outline px-8 py-4 rounded-full text-center font-medium flex items-center justify-center gap-2"
                  >
                    <span>See How We Work</span>
                    <span className="inline-block" aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
                  {[
                    { label: "Client satisfaction", value: "98%" },
                    { label: "Projects shipped", value: "500+" },
                    { label: "Average ROI", value: "3x" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="glass-panel rounded-2xl px-4 py-3 text-center shadow-sm"
                    >
                      <p className="text-lg font-semibold text-ink">{stat.value}</p>
                      <p className="text-xs text-ink-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="glass-panel rounded-[32px] p-4 md:p-6">
                  <HeroVisual />
                </div>
                <div className="absolute -bottom-6 left-6 hidden sm:block rounded-2xl bg-white/90 px-4 py-3 shadow-lg border border-white/70">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">Signature</p>
                  <p className="text-sm font-semibold text-ink">Strategy • Story • Gifts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logo Bar */}
        {/* TODO: Replace with real client logos */}
        <section className="relative overflow-hidden py-16 bg-paper">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <p className="text-center text-sm uppercase tracking-[0.2em] text-ink-muted mb-10">
                Trusted by leading brands
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {[
                  "Acme Corp",
                  "Horizon Group",
                  "Vertex Labs",
                  "Summit Inc",
                  "Pinnacle Co",
                  "Atlas Partners",
                ].map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center justify-center rounded-2xl border border-line bg-white/60 px-6 py-5 hover-scale"
                  >
                    <span className="text-sm font-medium text-ink-muted/60">{brand}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pain Points */}
        <section className="relative overflow-hidden py-24 bg-sand">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-8%] right-[-6%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-4%] h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-5xl text-ink">Sound familiar?</h2>
              </div>
            </AnimatedSection>
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  text: "Your marketing team is stretched thin, running campaigns that look good but don\u2019t move pipeline.",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  text: "Your corporate gifts end up forgotten — generic, impersonal, and wasted budget.",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  ),
                },
                {
                  text: "You know brand experience matters, but you don\u2019t have the bandwidth to make it strategic.",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
              ].map((pain, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="rounded-[24px] border border-white/70 bg-white/90 p-8 shadow-lg hover-lift h-full">
                    <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center mb-5">
                      {pain.icon}
                    </div>
                    <p className="text-ink-muted leading-relaxed">{pain.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <p className="mt-12 max-w-3xl mx-auto text-center text-ink-muted text-lg leading-relaxed">
              Essential Block exists because we&apos;ve seen these patterns hundreds of times. We replace
              scattered efforts with a unified strategy that turns every touchpoint into measurable growth.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative overflow-hidden py-24 bg-paper">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 left-[-8%] h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">Our capabilities</p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink">
                  A boutique team with enterprise-grade results.
                </h2>
                <p className="mt-4 text-ink-muted text-lg">
                  Essential Block is built to serve brands that want clarity, momentum, and a signature presence.
                  Every engagement blends marketing science with tactile brand moments.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Strategic marketing",
                  "Brand storytelling",
                  "Executive gifting",
                  "Campaign orchestration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid lg:grid-cols-2 gap-8">
              <article
                id="marketing"
                className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-xl"
              >
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.3em] text-ink-muted">Marketing</p>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink">
                    Strategic marketing systems that build demand and deepen loyalty.
                  </h3>
                  <p className="mt-4 text-ink-muted">
                    We architect campaigns that blend brand positioning, performance marketing, and content that turns
                    attention into action.
                  </p>
                  <ul className="mt-6 space-y-4 text-ink-muted">
                    {[
                      "Audience research and competitive positioning",
                      "Creative campaign planning and rollout",
                      "Content systems for social, email, and web",
                      "SEO and performance optimization",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-primary font-medium"
                  >
                    See Marketing Results
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>

              <article
                id="corporate-gifts"
                className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-xl"
              >
                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-secondary/25 blur-3xl" />
                <div className="relative">
                  <p className="text-sm uppercase tracking-[0.3em] text-ink-muted">Gifting</p>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl text-ink">
                    Corporate gifting programs that turn relationships into rituals.
                  </h3>
                  <p className="mt-4 text-ink-muted">
                    From executive welcome kits to VIP thank-yous, we design premium gifting experiences that feel
                    personal, elevated, and unmistakably on-brand.
                  </p>
                  <ul className="mt-6 space-y-4 text-ink-muted">
                    {[
                      "Curated gift collections and fulfillment",
                      "Premium branded merchandise programs",
                      "Event gifting and activation suites",
                      "Recognition and milestone gifting",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-secondary font-medium"
                  >
                    Browse Gift Collections
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Brand Storytelling",
                  text: "Editorial-level narratives and visuals that clarify your positioning and elevate your voice.",
                },
                {
                  title: "Lifecycle Campaigns",
                  text: "Seasonal and evergreen campaigns that guide audiences from awareness to advocacy.",
                },
                {
                  title: "VIP Experience Design",
                  text: "White-glove experiences for executives, partners, and high-value clients.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-white/80 p-6 shadow-sm"
                >
                  <h4 className="font-display text-xl text-ink">{item.title}</h4>
                  <p className="mt-3 text-ink-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="relative overflow-hidden py-20 bg-ink">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[30%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute bottom-[-20%] right-[20%] h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative text-center">
            <AnimatedSection scale>
              <h2 className="font-display text-3xl md:text-4xl text-white max-w-3xl mx-auto">
                Ready to see what strategic marketing and gifting can do for your brand?
              </h2>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 bg-white text-ink px-8 py-4 rounded-full font-medium shadow-lg hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
              >
                <span>Book a Free Strategy Call</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative overflow-hidden py-24 bg-sand">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-6%] left-[60%] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[55%] h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">Why Essential Block</p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink">
                  A partnership designed to feel calm, clear, and remarkably effective.
                </h2>
                <p className="mt-4 text-ink-muted text-lg">
                  We operate like an extension of your leadership team. Strategy, execution, and fulfillment live
                  under one roof so every detail is consistent, intentional, and measurable.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Discover",
                      text: "Brand audit, audience insights, and a clear growth roadmap.",
                    },
                    {
                      step: "02",
                      title: "Design",
                      text: "Campaign architecture, creative direction, and gifting concepts.",
                    },
                    {
                      step: "03",
                      title: "Deliver",
                      text: "Launch, measure, and continuously refine for momentum.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="h-10 w-10 rounded-full bg-primary/15 flex items-center justify-center text-sm font-semibold text-primary">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-ink">{item.title}</p>
                        <p className="text-ink-muted">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass-panel rounded-3xl p-8">
                  <h3 className="font-display text-2xl text-ink">Results that feel bespoke</h3>
                  <p className="mt-3 text-ink-muted">
                    We specialize in executive-level experiences that scale. Every deliverable is designed to feel
                    handcrafted, even at enterprise volume.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {[
                      { label: "Avg. campaign lift", value: "42%" },
                      { label: "Repeat engagement", value: "86%" },
                      { label: "Strategic partners", value: "75+" },
                      { label: "Years in market", value: "10+" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-2xl bg-white/80 px-4 py-3">
                        <p className="text-lg font-semibold text-ink">{stat.value}</p>
                        <p className="text-xs text-ink-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* TODO: Replace with real client testimonial */}
                <blockquote className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-lg">
                  <p className="text-ink-muted italic">
                    &ldquo;Essential Block delivered an elevated brand experience across marketing and gifting. Our clients
                    felt seen, and our pipeline grew immediately.&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-ink">
                    Sarah Chen, VP Marketing, National Retail Brand
                  </footer>
                </blockquote>
                {/* TODO: Replace with real testimonial */}
                <blockquote className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-lg">
                  <p className="text-ink-muted italic">
                    &ldquo;The ROI from their gifting program alone justified our entire marketing spend.
                    Essential Block doesn&apos;t just deliver campaigns — they deliver results you can measure.&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-ink">
                    Michael Torres, Director of Sales, Growth Tech Inc
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="relative overflow-hidden py-24 bg-paper">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-[-6%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-[-8%] right-[-4%] h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">Ideal partners</p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink">
                Built for leaders who want growth without the overhead
              </h2>
              <p className="mt-4 text-ink-muted text-lg">
                We partner with mid-market and enterprise brands who want measurable growth without the overhead
                of a large agency.
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Marketing Leaders",
                  text: "VPs and CMOs who need a strategic partner to execute campaigns that actually move pipeline.",
                },
                {
                  title: "HR & People Teams",
                  text: "Leaders who want employee recognition and gifting programs that feel personal, not transactional.",
                },
                {
                  title: "Sales Organizations",
                  text: "Teams looking to strengthen client relationships through memorable brand touchpoints and gifting.",
                },
                {
                  title: "Founders & Executives",
                  text: "Decision-makers who value brand experience as a growth lever and want a single partner for it all.",
                },
              ].map((client, index) => (
                <AnimatedSection key={client.title} delay={index * 0.1}>
                  <div className="rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-lg hover-lift h-full">
                    <h3 className="font-display text-xl text-ink">{client.title}</h3>
                    <p className="mt-3 text-ink-muted text-sm leading-relaxed">{client.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden py-24 bg-sand">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-6%] right-[40%] h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-[-8%] left-[50%] h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <h2 className="font-display text-3xl md:text-5xl text-ink text-center">
                  Frequently Asked Questions
                </h2>
              </AnimatedSection>
              <div className="mt-12 space-y-4">
                {[
                  {
                    q: "What marketing services does Essential Block offer?",
                    a: "We offer full-spectrum marketing services including audience research, competitive positioning, creative campaign planning, content systems for social, email, and web, and SEO and performance optimization. Every engagement is built around your growth goals, so you get strategy and execution under one roof.",
                  },
                  {
                    q: "How does the corporate gifting program work?",
                    a: "We start by understanding your audience and objectives, then curate premium gift collections tailored to your brand. From executive welcome kits to VIP thank-yous, we handle creative direction, sourcing, branding, and fulfillment so every gift feels personal and on-brand.",
                  },
                  {
                    q: "What makes Essential Block different from other agencies?",
                    a: "Most agencies do marketing or gifting. We do both, strategically. By combining data-backed marketing with premium gifting programs under one roof, every brand touchpoint is consistent, intentional, and measurable. You get a boutique team with enterprise-grade results.",
                  },
                  {
                    q: "How do I get started with Essential Block?",
                    a: "Book a free strategy call and we\u2019ll start with a brand audit to understand your goals, audience, and current efforts. From there, we\u2019ll design a tailored roadmap covering marketing strategy, gifting programs, or both \u2014 with clear timelines and measurable outcomes.",
                  },
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group rounded-2xl border border-white/70 bg-white/90 shadow-sm"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-ink list-none [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span
                        className="ml-4 flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-ink-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden py-24 bg-paper">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-[-6%] h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute bottom-[-12%] right-[-4%] h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-ink-muted">Let&apos;s build</p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink">
                  Let&apos;s build your growth engine
                </h2>
                <p className="mt-4 text-ink-muted text-lg">
                  Tell us about your goals and we&apos;ll design a marketing and gifting strategy tailored to your
                  audience, timeline, and growth targets.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Strategy-led creative direction",
                    "Full-service campaign execution",
                    "Premium gifting logistics and fulfillment",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-ink-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/70 shadow-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
