import { RevealOnScroll } from "../RevealOnScroll";
import { TerminalSkills } from "../TerminalSkills";
export default function About() {
    return (
      <section id="about" className="py-16 bg-stone-50 dark:bg-stone-900 min-h-screen flex items-center justify-center">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">About Me</h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className=" text-left text-gray-900 dark:text-gray-300 mb-6">
              I am a meticulous, precise Front End Developer with a strong background in graphic design. After earning my B.A. in Graphic Design from San Diego State University, I kicked off my career working with cross-functional teams on branding, publications, and digital experiences. In 2021, I leveled up my technical skills by completing a Full Stack Engineering bootcamp with Thinkful, which cemented my passion for software development. Today, I combine design with my engineering discipline to build clean, intuitive interfaces and user-focused products that look great and work even better. When I'm off the clock, I'm still usually feeding that same love of problem-solving whether that’s solving Wordle, Sudoku, or crossword puzzles or getting lost into a good mystery novel. When I finally need a break from all the puzzles, you'll find me at the gym resetting my brain!💪
            </p>
            </div>
            <div className ="mt-6">
              <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-4">Skills</h3>
              <TerminalSkills /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all">
              <h3 className=" text-left text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-left text-gray-900 dark:text-gray-300 space-y-2">
                <li>
                  <strong>B.A. in Graphic Design</strong> - San Diego State University, (2014-2019)
                </li>
                <li>
                  <strong>Full-Stack Engineering</strong> - Thinkful, (2021)
                </li>
              </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover hover:-translate-y-1 transition-all">
              <h3 className="text-left text-gray-900 dark:text-gray-300 text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-white-400">
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300">Front End Developer at Tubby Todd (DEC 2021-NOV 2025)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">Ensured quality and performance of Shopify based e-commerce platform through developing and deploying scripts.
                    Conducted extensive testing to validate new features, troubleshoot bugs, and maintain site stability across devices and browsers
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300">Social Media Graphic Design Representative at ReviewBoost (FEB 2021-DEC 2021)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">At Review Boost, I created branded social content, digital assets, and visual templates used across multiple marketing channels. I partnered with the marketing team to support campaigns with eye-catching, conversion-friendly graphics.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300 ">Graphic Designer at Preserve Magazine (OCT 2019-JUL 2021)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">As the sole designer for a lifestyle publication, I owned everything from layout design and editorial visuals to brand assets and print production. Working directly with the magazine’s founder, I shaped the visual direction of each issue and brought every edition to life with clean, cohesive design.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300 ">Graphic Designer at Museum of Man (FEB 2020-APR 2020)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">At the Museum of Man, I produced exhibition visuals, print collateral, and digital designs that supported community-focused programming. I worked within established brand guidelines while helping evolve the museum’s visual language.
                </p>
                </div>
                <div>
                  <h4 className="text-left font-semibold text-gray-900 dark:text-gray-300 ">Graphic Designer Intern at City of Carlsbad (JUL 2019-AUG 2019)</h4>
                <p className="text-left text-gray-900 dark:text-gray-300">I supported the city’s in-house design team by creating marketing materials, event graphics, social content, and community outreach collateral. I collaborated with multiple departments to keep designs clear, accessible, and on brand.
                </p>
                </div>
              </div>
              </div>
            </div>
          </div>
          </RevealOnScroll>
      </section>

    );
  }
  