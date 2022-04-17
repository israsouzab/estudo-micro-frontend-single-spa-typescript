import { BrowserRouter, Link } from 'react-router-dom'

type AppProps = {
   name: string
}

const App = ({ name }: AppProps): JSX.Element => {
   return (
      <BrowserRouter>
         <header>
            <h1>{name}</h1>
            <nav>
               <ul>
                  <li>
                     <Link to='/'>Home</Link>
                  </li>
                  <li>
                     <Link to='/react-single-spa'>React Single Spa</Link>
                  </li>
                  <li>
                     <Link to='/react-lazy-load'>React Lazy Load</Link>
                  </li>
                  <li>
                     <Link to='/react-multiples'>React Multiples</Link>
                  </li>
                  <li>
                     <Link to='/react-route'>React Routes</Link>
                  </li>
               </ul>
            </nav>
         </header>
      </BrowserRouter>
   )
}

export default App