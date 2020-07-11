import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
export default class Body extends Component {
  
  render() {
  const image1 = "./Img/Note1.webp";
  const image2 = "./Img/dragon.jpg"
  const image3 = "./Img/turn.jpg"
  const inlineStyle = {
    background : '#fff',
    left : '50%',
    top : '50%',
    position : 'absolute',
    padding : '20px',
    transform : 'translate(-50%, -50%)',
    fontSize : '30px',
    borderRadius : '3%',
    borderBottom : '2px solid #c9c9c9',
  }

  const size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
    return (
      <div>
        <Parallax bgImage={image1} strength={600} style={{ zIndex : "-1"}}>
        <div style={{ minHeight: '100vh' }}>
          <div style={inlineStyle}>
            <img src={image2} alt="" style={{ width : '150px' , borderRadius : '70%' , float : 'left'}}></img>
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
            <img src="./Img/my_self1.jpg" alt="" style={{width : '100%' , height : '600px' , marginTop : '80px'}}></img>
          <h2 style={{textAlign: 'right' , padding : '8% 10%'}}>
            <span style={{ display: 'block', fontSize: '24px',  opacity: '.5', speak: 'none' , color : 'black'}}>Intro</span>
            <span style={{ textAlign: 'center', letterSpacing: '3px',  color: 'black' , fontSize : '15px', fontWeight : '700'}}>
                손으로 10초면 충분히 할 수 있는 일을
                컴퓨터로 하루 종일 프로그래밍해서 자동으로 수행할 때,
                나는 더할 나위 없이 큰 <span style={{color:'green', fontWeight:'800'}} >행복 </span>을 느낀다. <br/>
                - Douglas Noel Adams
                <br/><br/>
                저는 원하는 모든 걸 만들어 낼 수 있는 프론트앤드 개발자가 <span style={{color:'red', fontWeight:'800'}}>꿈</span> 입니다.
              </span>
          </h2>
          
          <div style={{ marginLeft: 'auto' , maxWidth: '50%'}} >
          </div>
        </div>

        <div style={{ minHeight: '100vh' , width : size.width/2 , backgroundColor : '#253854' }}>
        <h2 style={{textAlign: 'left' , padding : '10%'}}>
            <span style={{ display: 'block', fontSize: '24px', speak: 'none' }}>Skills</span>
            <span style={{ display: 'block', fontSize: '64px', paddingBottom: '.25em'}}>What I can do</span>
            <ul style={{ textAlign : 'center', display : 'grid' , padding : '10%'}}>
            <li style={{ display : 'inlineBlock', fontSize : "30px", border : "2px solid #fff", color : 'white', padding: '10px 18px', letterSpacing: '5px', margin: '0 20px 20px 0'}}>JAVA</li>
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
        <img alt="" style={{ width : '100%'}} src="./Img/my_self2.jpg"></img>
      </div>
      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#fff',textAlign:'center' }}>
        <h2 style={{ color: '#d49c80' , letterSpacing: '10px' , font: '600 40px Montserrat, sans-serif', marginTop : '130px'  , marginBottom: '50px' }}>PORTFOLIO</h2>
        <p style={{ color: '#000' , fontSize : '15px', fontWeight : '700'}}> 한걸음 한걸음 나아가는 프로그래머 "길용성" 의 <br></br> 포트폴리오 입니다.</p>
        <a href='https://github.com/gildydtjd' rel="noopener noreferrer" target="_blank" style={{ display: 'block', textAlign: 'center' , letterSpacing: '2px', transition: 'all .4s ease', font: 'italic 600 14px Droid Serif', marginTop : '70px', fontSize : '20px'}}> View More</a>
        </div>
      </div>

      <div style={{ display : 'flex' , height : '600px', borderSpacing : '0' }}>
      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#fff'}}>
      <h2 style={{ color: '#d49c80' , letterSpacing: '10px' , font: '600 40px Montserrat, sans-serif', marginTop : '130px'  , marginBottom: '50px' }}>DayOff</h2>
        <p style={{ color: 'black' , fontSize : '15px', fontWeight : '700'}}> 기존의 여성 쇼핑몰을 Spring boot 와 <br></br> React 를 통해 구현한 5인 프로젝트 입니다. <br>
        
        </br> 이 프로젝트에서 전체 UI와 상품 카테고리를 통한 리스트를 뿌려주는 업무 및 <br></br> 관리자의 상품관리를 맡았습니다.</p>
        <a href='https://github.com/gildydtjd/DayOff' rel="noopener noreferrer" target="_blank" style={{ display: 'block', textAlign: 'center' , letterSpacing: '2px', transition: 'all .4s ease', font: 'italic 600 14px Droid Serif', marginTop : '70px', fontSize : '20px'}}> View More</a>
      </div>

      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#d0e1e1', textAlign:'center' }}>
        <img alt="" style={{ width :'45%' , height : '90%', padding : '2.5%'}} src='./Img/dayoff.jpg'></img>
        <img alt="" style={{ width :'45%' , height : '90%', padding : '2.5%'}} src='./Img/dayoff01.jpg'></img>
      </div>
      </div>

      <div style={{ display : 'flex' , height : '600px', borderSpacing : '0' }}>
      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#e6f5ff'}}>
        <img alt="" style={{ width :'80%' , height : '500px', padding : '5%'}} src='./Img/coromong.PNG'></img>
      </div>

      <div style={{ minHeight: '100%' , width : size.width/2 , backgroundColor : '#FFF', textAlign:'center' }}>
      <h2 style={{ color: '#d49c80' , letterSpacing: '10px' , font: '600 40px Montserrat, sans-serif', marginTop : '130px'  , marginBottom: '50px' }}>Coromong</h2>
        <p style={{ color: 'black' , fontSize : '15px', fontWeight : '700'}}> 코로나로 지친 그대들이여!<br></br> 실시간 코로나현황, 병원, 마스크판매처를 알려주는 <br></br> 코로몽을 통해 코로나를 이겨내세요!<br></br></p>
        <a href='https://github.com/gildydtjd/Coromong' rel="noopener noreferrer" target="_blank" style={{ display: 'block', textAlign: 'center' , letterSpacing: '2px', transition: 'all .4s ease', font: 'italic 600 14px Droid Serif', marginTop : '70px', fontSize : '20px'}}> View More</a>
      </div>
      </div>

      <Parallax bgImage={image3} strength={600} style={{zIndex : "-1"}}>
        <div style={{ minHeight: '80vh'}}>
        <div style={inlineStyle}>
        <h2 style={{width : '500px'}}>
          <p style={{ fontSize:"13px", fontWeight : 800}}>어제 만든 코드가 오늘봐도 괜찮으면, 발전이 없는 것이다.</p>
          <p>Email : gildydtjd@naver.com</p>
          <p>Phone : 010-3094-1587</p>
          {/* <p>Kakao : <a href='https://open.kakao.com/o/srvKs2kc' rel="noopener noreferrer" target="_blank"> https://open.kakao.com/o/srvKs2kc </a></p> */}
          </h2>
        </div>
        </div>
      </Parallax>
      </div>
    )
  }
}
