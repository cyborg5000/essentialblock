import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
                  Strategic marketing that feels timeless. Corporate gifting that feels personal.
                </h1>
                <p className="mt-6 text-base sm:text-lg text-ink-muted leading-relaxed animate-fade-in-delay-2">
                  We help ambitious brands create momentum through precision strategy, editorial storytelling, and
                  curated gifting programs that make every relationship feel intentional. Built for leaders who want
                  measurable growth and unforgettable brand touchpoints.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
                  <Link
                    href="#contact"
                    className="btn-primary px-8 py-4 rounded-full text-center font-medium flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <span>Start a Project</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="#services"
                    className="btn-outline px-8 py-4 rounded-full text-center font-medium flex items-center justify-center gap-2"
                  >
                    <span>Explore Services</span>
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
                    Plan a marketing sprint
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
                    Curate your collection
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
                <blockquote className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-lg">
                  <p className="text-ink-muted italic">
                    “Essential Block delivered an elevated brand experience across marketing and gifting. Our clients
                    felt seen, and our pipeline grew immediately.”
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-ink">CMO, National Retail Brand</footer>
                </blockquote>
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
                  Ready to make your next move feel unforgettable?
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
