import './App.css'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

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
