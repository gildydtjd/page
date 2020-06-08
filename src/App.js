import React from 'react';
import './App.css';
import Header from './header/Header';
import { Parallax } from 'react-parallax';

function App() {
  const image1 = "https://i.imgur.com/CLUakBD.jpg";
  const image2 = "https://i.pinimg.com/originals/cc/9a/5e/cc9a5ed90c789090c432d614a55223f9.jpg";
  const image3 = "https://3.bp.blogspot.com/-lG8D-6m-WbA/TzQLkqm-rTI/AAAAAAAABqc/7b8ja6uhzu4/s1600/Winter+imitation.jpg";
  const image4 = "https://4.bp.blogspot.com/-BwDj-C2u_eY/TzQL0bpuqmI/AAAAAAAABsA/tSMWV1g2Ilo/s1600/Red+autumn+morning.jpg";
  const inlineStyle = {
    background : '#fff',
    left : '50%',
    top : '50%',
    position : 'absolute',
    padding : '20px',
    transform : 'translate(-50%, -50%)',
    fontSize : '30px',
  }
  const size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }

  return (
    <div className="App">
      <Header />
      <Parallax bgImage={image1} strength={600}>
        <div style={{ minHeight: '100vh' }}>
          <div style={inlineStyle}>Web Portfolio</div>
        </div>
      </Parallax>

      <div style={{ display : 'flex' ,minHeight: '100vh' , borderSpacing : '0' }}>
        <div style={{ minHeight: '100vh' , width : size.width/2 , backgroundColor : '#0067a3'}}>
          <h2 style={{textAlign: 'right' , padding : '10%'}}>
            <span style={{ display: 'block', fontSize: '24px',  opacity: '.5', speak: 'none' }}>Intro</span>
            <span style={{ display: 'block', fontSize: '64px', paddingBottom: '.25em', position : 'relative'}}>About myself</span>
          </h2>
          <div style={{ marginLeft: 'auto' , maxwidth: '35em'}} >
          <p style={{marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px'}}> 웹개발을 시작한 경기도의 아들 28살 길용성입니다.</p>

          </div>
        </div>

        <div style={{ minHeight: '100vh' , width : size.width/2 , backgroundColor : 'black' }}>
        <h2 style={{textAlign: 'left' , padding : '10%'}}>
            <span style={{ display: 'block', fontSize: '24px',  opacity: '.5', speak: 'none' }}>Skills</span>
            <span style={{ display: 'block', fontSize: '64px', paddingBottom: '.25em', position : 'relative'}}>What I can do</span>
          </h2>
        </div>
      </div>

      <Parallax bgImage={image2} blur={{ min: -1, max: 5 }}>
        <div style={{ height : 700 }}>
          <div style={inlineStyle}>Dynamic blur</div>
        </div>
      </Parallax>

      <Parallax bgImage={image3} strength={-200}>
        <div style={{ height : 700 }}>
          <div style={inlineStyle}>Reverse direction</div>
        </div>
      </Parallax>

      <Parallax bgImage={image4} strength={200} >
        <div style={{ height : 700 }}>
          <div style={inlineStyle}>Render prop</div>
        </div>
      </Parallax>

      <div style={{ height : '100vh' }}></div>
    </div>
  );
}

export default App;
