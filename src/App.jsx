import './App.css'

import Content from './layouts/Content'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'

function App() {

  return (
    <div className="container-fluid p-0">
        <Header />
        <div className='row container m-auto'>
          <Content />
          <Sidebar />
        </div>
        <Footer />
    </div>
  )
}

export default App
