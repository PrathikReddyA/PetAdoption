import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [ page, setPage ] = useState('/')
  function onNav( event ){
    event.preventDefault();
    const target = event.target.getAttribute('href');
    console.log(target);
    setPage(target);
  }
  return (
    <div className="app">
      <a class="skiplink" id="skipLink" page={page} onNav={onNav} href = "#main" onClick={onNav}>Skip to Content</a>
      <Header onNav={onNav}/>
      <Main page={page} onNav={onNav} className="main" id="#main"/>
      <Footer/>
    </div>
  );
}

export default App;
