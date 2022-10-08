
import './App.css';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Projects from './components/pages/Projects';

function App() {

  const [showModal, setShowModal] = useState(false);

  return (

    <div>
      <div className=''>

        <main className='p-[50px] bg-white dark:bg-slate-800'>

          <div className=" sm:px-8">

            <div className="mx-auto max-w-7xl lg:px-8">

              <div className="relative px-4 sm:px-8 lg:px-12">

                <div className="mx-auto max-w-2xl lg:max-w-5xl">

                  <Navigation />

                 
                  <Projects />

                </div>
              </div>
            </div>
          </div>
        </main>



      </div>
    </div>
  )
}

export default App
