import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>Kayla Chavez</h1>
        <p>Front End Developer | Shopify Engineer | Creative Tech</p>
      </header>

      <main>
        {/*About Section */}
        <section>
          <h2>About Me</h2>
          <p>I'm a front end developer focused on React, Shopify, and creating seamless user experiences. I blend my background in design with techical skills problem solving to build performant, accessible, and user friendly digital products.</p>
        </section>
      </main>

    </div>
  )
}

export default App
