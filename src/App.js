import React from 'react';
import './App.css';
import Header from './header/Header';
import { Parallax } from 'react-parallax';
import Footer from './footer/Footer';
import Atyping from './header/Atyping';

function App() {
  const image1 = "https://i.imgur.com/CLUakBD.jpg";
  const image2 = "./Img/dragon.jpg"
  const inlineStyle = {
    background : '#fff',
    left : '50%',
    top : '50%',
    position : 'absolute',
    padding : '20px',
    transform : 'translate(-50%, -50%)',
    fontSize : '30px',
    borderRadius : '3%',
    borderBottom : '2px solid #c9c9c9'
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
          <div style={inlineStyle}>
            <img src={image2} style={{ width : '150px' , borderRadius : '70%' , float : 'left'}}></img>
            <h2 style={{width : '600px'}}>
              <p style={{ marginTop : '20px' , fontWeight : 800}}>NAME : 길용성</p>
              <p>AGE : 28</p>
              <p>ADRESS : 경기도 남양주시</p>
              <p>EMAIL : gildydtjd@naver.com</p>
            </h2>
          </div>
          
        </div>
      </Parallax>

      <div style={{ display : 'flex' ,minHeight: '100vh' , borderSpacing : '0' }}>
        <div style={{ minHeight: '100vh' , width : size.width/2 , backgroundColor : '#0067a3'}}>
          <h2 style={{textAlign: 'right' , padding : '10%'}}>
            <span style={{ display: 'block', fontSize: '24px',  opacity: '.5', speak: 'none' }}>{Atyping({info1:"Intro"})}</span>
            <span style={{ display: 'block', fontSize: '64px', paddingBottom: '.25em', position : 'relative'}}>About myself</span>
          </h2>
          
          <div style={{ marginLeft: 'auto' , maxwidth: '35em'}} >
          {/* <p style={{marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px'}}> 웹개발을 시작한 경기도의 아들 28살 길용성입니다.</p> */}

          </div>
        </div>

        <div style={{ minHeight: '100vh' , width : size.width/2 , backgroundColor : 'black' }}>
        <h2 style={{textAlign: 'left' , padding : '10%'}}>
            <span style={{ display: 'block', fontSize: '24px',  opacity: '.5', speak: 'none' }}>{Atyping({info1:"Skills"})}</span>
            <span style={{ display: 'block', fontSize: '64px', paddingBottom: '.25em', position : 'relative'}}>What I can do</span>
          </h2>
        </div>
      </div>

      <div style={{ minHeight: '100vh'}}></div>
      <Footer/>
    </div>
  );
}

export default App;
