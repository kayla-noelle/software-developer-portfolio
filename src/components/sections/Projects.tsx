import { RevealOnScroll } from "../RevealOnScroll";
// Resume Section will change it to Projects Section
export default function Projects() {
  return(
    <section id="projects" className="py-16 flex flex-col items-center justify-center p-8 bg-stone-50 dark:bg-stone-900">
      <RevealOnScroll>
        <h2 className="text-gray-900 dark:text-white text-4xl font-bold mb-8">Projects</h2>
      <p className="text-gray-900 dark:text-white text-lg max-w-3xl text-center">
        Currently Under Construction ⚒️
      </p>
      </RevealOnScroll>
    </section>
  )
}