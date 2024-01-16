
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import RowPost from './components/RowPost/RowPost'
import {originals,ComedyMovies,ActionMovies,Documentaries,HorrorMovies,RomanceMovies} from './urls'


function App() {
  

  return (
    <div>
     <NavBar/>
     <Banner/>
     <RowPost title='Netflix Originals' url={RomanceMovies} />
     <RowPost title='Action Movies' url={ActionMovies} isSmall/>
     <RowPost title='Documentaries' url={Documentaries} isSmall/>
     <RowPost title='Horror Movies' url={HorrorMovies} isSmall/>
     <RowPost title='Comedy Movies' url={ComedyMovies} isSmall/>
     <RowPost title='Thrillers' url={originals} isSmall/>
    </div>
  )
}

export default App
