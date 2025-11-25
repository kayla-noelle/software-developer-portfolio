import { RevealOnScroll } from "../RevealOnScroll";


export default function Contact() {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900 py-20">
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-gray-900 dark:text-white text-4xl font-bold mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div className="relative">
              <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-900 dark:text-gray-300 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..." />
            </div>
            <div className="relative">
              <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-900 dark:text-gray-300 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@example.com" />
            </div>
            <div className="relative">
              <textarea 
              id="message" 
              name="message" 
              required 
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-gray-900 dark:text-gray-300 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your message..." />
            </div>
            <button 
            type="submit" 
            className="w-full bg-[#20BF55] text-white px-6 py-3 rounded text-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(32,191,85,0.4)]">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
      </section>
    );
  }