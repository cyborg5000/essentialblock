import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Code split heavy interactive components for better performance
// HeroVisual uses framer-motion heavily, so we lazy load it
const HeroVisual = dynamic(() => import("@/components/HeroVisual"), {
  loading: () => (
    <div className="relative h-[300px] sm:h-[350px] md:h-[500px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
    </div>
  ),
});

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => (
    <div className="space-y-6 animate-pulse">
      <div className="h-12 bg-gray-200 rounded-lg"></div>
      <div className="h-12 bg-gray-200 rounded-lg"></div>
      <div className="h-32 bg-gray-200 rounded-lg"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,0,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,255,0.05),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6 animate-fade-in">
                ✨ <span className="font-medium">Transform Your Brand</span> ✨
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Where <span className="text-primary font-extrabold">Strategic Marketing</span> Meets{" "}
                <span className="text-secondary font-extrabold">Memorable Gifting</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We help <span className="font-semibold">ambitious brands stand out</span> through <span className="font-semibold">powerful marketing strategies</span> and 
                <span className="font-semibold"> thoughtfully curated corporate gifts</span> that create lasting impressions. 
                Experience the perfect blend of <span className="underline decoration-primary decoration-2 underline-offset-2">creativity</span> and <span className="underline decoration-secondary decoration-2 underline-offset-2">impact</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="btn-primary px-8 py-4 rounded-full text-center font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Start Your Journey</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="btn-outline px-8 py-4 rounded-full text-center font-medium hover:bg-gray-50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Explore Services</span>
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                      <div className={`bg-gradient-to-br ${i % 2 === 0 ? 'from-primary/70 to-blue-400' : 'from-secondary/70 to-purple-400'} w-full h-full`}></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Trusted by <span className="font-bold text-base">500+</span> growing brands
                </p>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium py-1 px-4 bg-primary/5 rounded-full">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-4">
              <span className="relative inline-block">
                Comprehensive Solutions
              </span>{" "}
              for Growth
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine <span className="font-semibold">cutting-edge marketing strategies</span> with <span className="font-semibold">premium corporate gifting</span> to create 
              powerful brand experiences that drive <span className="underline decoration-primary decoration-2 underline-offset-2">measurable results</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Marketing Services */}
            <article id="marketing" className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-primary">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Marketing Solutions</h3>
              <p className="text-gray-600 mb-6">
                Data-driven marketing strategies that amplify your brand&apos;s voice and drive meaningful engagement.
              </p>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Targeted Digital Marketing Campaigns</span> that connect with your ideal audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Strategic Brand Development</span> to build a memorable identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Expert Social Media Management</span> for consistent engagement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Engaging Content Creation</span> that resonates with your audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Advanced SEO Optimization</span> for increased visibility</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group px-5 py-2 rounded-full bg-primary/5 hover:bg-primary/10"
              >
                Discover More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </article>

            {/* Corporate Gifts */}
            <article id="corporate-gifts" className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-secondary">
              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Corporate Gifts</h3>
              <p className="text-gray-600 mb-6">
                Thoughtfully curated gift collections that strengthen relationships and leave lasting impressions.
              </p>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Bespoke Branded Merchandise</span> that elevates your brand identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Luxury Gift Collections</span> for high-value relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Memorable Event Giveaways</span> that attendees will cherish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">Personalized Recognition Gifts</span> to celebrate achievements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span><span className="font-medium">VIP Client Appreciation Sets</span> that strengthen business relationships</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center text-secondary font-medium hover:text-secondary-dark transition-colors group px-5 py-2 rounded-full bg-secondary/5 hover:bg-secondary/10"
              >
                Explore Collections
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium py-1 px-4 bg-primary/5 rounded-full">Why Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-4">
              The <span className="relative inline-block">
                Essential Block Difference
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We bring together <span className="font-semibold">strategic thinking</span>, <span className="font-semibold">creative excellence</span>, and <span className="font-semibold">premium gifting</span>{" "}
              to deliver <span className="underline decoration-primary decoration-2 underline-offset-2">exceptional results</span> for your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-100">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Over a <span className="font-semibold">decade of experience</span> delivering measurable results for brands across industries.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-100">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Holistic Approach</h3>
              <p className="text-gray-600">
                <span className="font-semibold">Seamlessly integrating</span> marketing and gifting strategies for <span className="font-semibold">maximum brand impact</span>.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-sm hover:shadow-md border border-gray-100">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                <span className="font-semibold">Data-driven strategies</span> that consistently deliver <span className="font-semibold">outstanding ROI</span> for our clients.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-3">Success Stories</span>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="relative inline-block">
                    Trusted by Industry Leaders
                  </span>
                </h3>
                <p className="text-gray-600 mb-8">
                  Join hundreds of <span className="font-semibold">successful brands</span> who have transformed their marketing and gifting strategies with Essential Block.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <p className="font-bold text-3xl text-primary">98%</p>
                    <p className="text-sm text-gray-600">Client Satisfaction</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <p className="font-bold text-3xl text-primary">500+</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                    <p className="font-bold text-3xl text-primary">3x</p>
                    <p className="text-sm text-gray-600">Average ROI</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <blockquote className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative">
                  <div className="absolute -top-3 -left-3 bg-primary/10 rounded-full p-2">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &ldquo;Essential Block <span className="font-semibold">transformed our brand presence</span> with their strategic approach and thoughtful gifting solutions.&rdquo;
                  </p>
                  <footer className="font-medium">
                    Marketing Director, <span className="text-primary">Fortune 500 Company</span>
                  </footer>
                </blockquote>
                <blockquote className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative">
                  <div className="absolute -top-3 -left-3 bg-secondary/10 rounded-full p-2">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    &ldquo;Their <span className="font-semibold">integrated approach</span> to marketing and corporate gifts has helped us <span className="font-semibold">build stronger relationships</span> with our clients.&rdquo;
                  </p>
                  <footer className="font-medium">
                    CEO, <span className="text-secondary">Tech Startup</span>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-3">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-2">
                <span className="relative inline-block">
                  Transform Your Brand
                </span> Today
              </h2>
              <p className="text-gray-600 text-lg">
                Ready to <span className="font-semibold">elevate your brand</span> with strategic marketing and impactful corporate gifts? 
                Let&apos;s create something <span className="underline decoration-primary decoration-2 underline-offset-2">extraordinary</span> together.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
