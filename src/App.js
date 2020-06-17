import React from 'react';
import './App.css';
import Header from './header/Header';
import { Parallax } from 'react-parallax';
import Footer from './footer/Footer';

function App() {
  const image1 = "./Img/Note1.webp";
  const image2 = "./Img/dragon.jpg"
  const image3 = "./Img/back.webp"
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
      <Parallax bgImage={image1} strength={400}>
        <div style={{ minHeight: '100vh' }}>
          <div style={inlineStyle}>
            <img src={image2} style={{ width : '150px' , borderRadius : '70%' , float : 'left'}}></img>
            <h2 style={{width : '600px'}}>
              <p style={{ marginTop : '20px' , fontWeight : 800}}>NAME : 길용성</p>
              <p>AGE : 28</p>
              <p>ADDRESS : 경기도 남양주시</p>
              <p>EMAIL : gildydtjd@naver.com</p>
            </h2>
          </div>
          
        </div>
      </Parallax>

      <div style={{ display : 'flex' ,minHeight: '100vh' , borderSpacing : '0' }}>
        <div style={{ minHeight: '100vh' , width : size.width/2 , backgroundColor : '#fff'}}>
            <img src="./Img/my_self1.jpg" style={{width : '100%' , height : '600px' , marginTop : '80px'}}></img>
          <h2 style={{textAlign: 'right' , padding : '8% 10%'}}>
            <span style={{ display: 'block', fontSize: '24px',  opacity: '.5', speak: 'none' , color : 'black'}}>Intro</span>
            <span style={{ textAlign: 'center', letterSpacing: '3px',  color: 'black' , fontSize : '15px', fontWeight : '700'}}>
              디자인의 가장 중요한 역할은 가치를 창조하는 것이라 여깁니다.
              좋은 디자인이 반드시 좋은 결과로 연결된다고 생각하지는 않습니다.
              그림을 그려내는 것뿐만이 아닌, 더 큰 가치를 생각하고자 합니다.</span>
          </h2>
          
          <div style={{ marginLeft: 'auto' , maxWidth: '50%'}} >
          {/* <p style={{marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px'}}> 웹개발을 시작한 경기도의 아들 28살 길용성입니다.</p> */}

          </div>
        </div>

        <div style={{ minHeight: '100vh' , width : size.width/2 , backgroundColor : '#18306d' }}>
        <h2 style={{textAlign: 'left' , padding : '10%'}}>
            <span style={{ display: 'block', fontSize: '24px',  opacity: '.5', speak: 'none' }}>Skills</span>
            <span style={{ display: 'block', fontSize: '64px', paddingBottom: '.25em', position : 'relative'}}>What I can do</span>
            <ul style={{ textAlign : 'center', display : 'grid' , padding : '10%'}}>
            <li style={{ display : 'inlineBlock', fontSize : "30px", border : "2px solid #fff", color : 'white', padding: '10px 18px', letterSpacing: '5px', margin: '0 20px 20px 0'}}>React.js</li>
            <li style={{ display : 'inlineBlock', fontSize : "30px", border : "2px solid #fff", color : 'white', padding: '10px 18px', letterSpacing: '5px', margin: '0 20px 20px 0'}}>JavaScript</li>
            <li style={{ display : 'inlineBlock', fontSize : "30px", border : "2px solid #fff", color : 'white', padding: '10px 18px', letterSpacing: '5px', margin: '0 20px 20px 0'}}>HTML</li>
            <li style={{ display : 'inlineBlock', fontSize : "30px", border : "2px solid #fff", color : 'white', padding: '10px 18px', letterSpacing: '5px', margin: '0 20px 20px 0'}}>CSS</li>
            <li style={{ display : 'inlineBlock', fontSize : "30px", border : "2px solid #fff", color : 'white', padding: '10px 18px', letterSpacing: '5px', margin: '0 20px 20px 0'}}>STS</li>
            <li style={{ display : 'inlineBlock', fontSize : "30px", border : "2px solid #fff", color : 'white', padding: '10px 18px', letterSpacing: '5px', margin: '0 20px 20px 0'}}>MYSQL</li>
            </ul>
          </h2>
        </div>
      </div>

      <div style={{ display : 'flex' , height : '480px' , borderSpacing : '0' }}>
      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#fff' }}>
        <img style={{ width : '100%'}} src="./Img/my_self2.jpg"></img>
      </div>
      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#fff',textAlign:'center' }}>
        <h2 style={{ color: '#d49c80' , letterSpacing: '10px' , font: '600 40px Montserrat, sans-serif', marginTop : '130px'  , marginBottom: '50px' }}>PORTFOLIO</h2>
        <p style={{ color: '#000' , fontSize : '15px', fontWeight : '700'}}> 한걸음 한걸음 나아가는 프로그래머 "길용성" 의 <br></br> 포트폴리오 입니다.</p>
        <a href='https://github.com/gildydtjd' style={{ display: 'block', textAlign: 'center' , letterSpacing: '2px', transition: 'all .4s ease', font: 'italic 600 14px Droid Serif', marginTop : '70px', fontSize : '20px'}}> View More</a>
        </div>
      </div>

      <div style={{ display : 'flex' , height : '600px', borderSpacing : '0' }}>
      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#fff'}}>
      <h2 style={{ color: '#d49c80' , letterSpacing: '10px' , font: '600 40px Montserrat, sans-serif', marginTop : '130px'  , marginBottom: '50px' }}>DayOff</h2>
        <p style={{ color: 'black' , fontSize : '15px', fontWeight : '700'}}> 기존의 여성 쇼핑몰을 Spring boot 와 <br></br> React 를 통해 구현한 5인 프로젝트 입니다. <br>
        
        </br> 이 프로젝트에서 전체 UI와 상품 카테고리를 통한 리스트를 뿌려주는 업무 및 <br></br> 관리자의 상품관리를 맡았습니다.</p>
        <a href='https://github.com/gildydtjd/DayOff' style={{ display: 'block', textAlign: 'center' , letterSpacing: '2px', transition: 'all .4s ease', font: 'italic 600 14px Droid Serif', marginTop : '70px', fontSize : '20px'}}> View More</a>
      </div>

      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#AFEEEE', textAlign:'center' }}>
        <img style={{ width :'40%' , height : '500px', padding : '5%'}} src='./Img/dayoff.jpg'></img>
        <img style={{ width :'40%' , height : '500px', padding : '5%'}} src='./Img/dayoff01.jpg'></img>
      </div>
      </div>

      <Parallax bgImage={image3} strength={200}>
        <div style={{ minHeight: '100vh' }}>
        </div>
      </Parallax>

      <Footer/>
    </div>
  );
}

export default App;
