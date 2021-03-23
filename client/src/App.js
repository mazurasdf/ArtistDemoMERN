import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import AllArtists from './views/AllArtists';
import NewArtist from './views/NewArtist';
import {Router} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [artists, setArtists] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/artists")
      .then(res=>{
        setArtists(res.data.artists);
        setLoaded(true);
      })
      .catch(err=>console.log(err))
  },[loaded])

  const onDeleteHandler = (_id) => {
    axios.delete(`http://localhost:8000/api/artists/${_id}`)
      .then(res => {
        console.log(res);
        setLoaded(false);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Router>
        <NewArtist path="/artists/new" setLoaded={setLoaded}/>
        <AllArtists path="/artists/" artists={artists} onDeleteHandler={onDeleteHandler}/>
      </Router>
    </div>
  );
}

export default App;
