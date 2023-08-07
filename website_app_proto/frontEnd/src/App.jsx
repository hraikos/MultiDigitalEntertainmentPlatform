import { Route, BrowserRouter, Routes} from 'react-router-dom'
import homePage from './homePage'
import ebookPage from './WebForms/ebookForm'
import videoGamePage from './WebForms/videoGameForm'
import musicPage from './WebForms/musicForm'
import moviePage from './WebForms/movieForm'
import Login from './login'
import table from './WebForms/table'
function App() {

  return (
      <Routes>
          <Route path='/' element={Login()}/>
          <Route path='homepage' element={homePage()}/>
          <Route path="ebook" element={ebookPage()} />
          <Route path="music" element={musicPage()} />
          <Route path="movie" element={moviePage()} />
          <Route path="videogame" element={videoGamePage()} />
          <Route path='table' element={table()}/>
      </Routes>
  )

}

export default App
