import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { Parallax } from 'react-parallax';

function App() {
  const image1 = "https://i.imgur.com/CLUakBD.jpg";
  const image2 = "https://i.pinimg.com/originals/cc/9a/5e/cc9a5ed90c789090c432d614a55223f9.jpg";
  const image3 = "https://3.bp.blogspot.com/-lG8D-6m-WbA/TzQLkqm-rTI/AAAAAAAABqc/7b8ja6uhzu4/s1600/Winter+imitation.jpg";
  const image4 = "https://t1.daumcdn.net/cfile/blog/244C80505523281105";
  const inlineStyle = {
    background : '#fff',
    left : '50%',
    top : '50%',
    position : 'absolute',
    padding : '20px',
    transform : 'translate(-50%, -50%)',
  }
  return (
    <div className="App">
      <Header />
      <Parallax bgImage={image1} strength={600}>
        <div style={{ height : 700 }}>
          <div style={inlineStyle}>HTML inside the parallax</div>
        </div>
      </Parallax>

      <h1>ㅣㅣㅣ</h1>
      <Parallax bgImage={image2} blur={{ min: -1, max: 5 }}>
        <div style={{ height : 700 }}>
          <div style={inlineStyle}>Dynamic blur</div>
        </div>
      </Parallax>
      <h1>ㅣㅣㅣ</h1>

      <Parallax bgImage={image3} strength={-200}>
        <div style={{ height : 700 }}>
          <div style={inlineStyle}>Reverse direction</div>
        </div>
      </Parallax>
      <h1>ㅣㅣㅣ</h1>

      <Parallax 
        bgImage={image4} strength={200} >
        <div style={{ height : 700 }}>
          <div style={inlineStyle}>Render prop</div>
        </div>
      </Parallax>
      <h1>ㅣㅣㅣ</h1>

      <div style={{ height : '100vh' }}></div>

    </div>
  );
}

export default App;
