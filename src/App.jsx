import { useEffect, useState } from 'react'
import './App.css'


var PAGE_SIZE = 25;
function App() {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(PAGE_SIZE);
  var arr;
  const onLoad = () => {
     arr = []
    for (let i = 1; i <= page; i++) {
      arr.push(i)
      setState([ ...state ]);
      setState([i]);
      // state.push(i)
    }
    console.log({ state, arr });

  }

  useEffect(() => {
    // PAGE_SIZE += 25;
    onLoad()

  }, [page])

  const scrollTOEnd = () => {
    setPage(page + 25)

  }

  window.onscroll = () => {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    }{
      scrollTOEnd()
    }

  }

  return (
    <div className="App">
     <main>
       <div>
          {state.map(e => (
              <h3>Masai Student {e}</h3>
          ))}
       </div>
     </main>
    </div>
  )
}

export default App
