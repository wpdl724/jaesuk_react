/* 라우터 설정은 첫번째 JSX파일 App.jsx에서 보통 이루어진다 */
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
/* 컴포넌트 불러오기 */
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Intro from './components/Intro'
import Nick from './components/Nick'
function App() {

  return (
    <div id="wrap">
      <Header />
      {/* 링크 주소에 따라 컴포넌트 변경하는 위치는 전체를 브라우저 라우터로 묶고 시작해야 한다 */}
      {/* 브라우저라우터 시작위치 */}
      <main>
        {/* github page로 리액트로 작업한 프로젝트를 배포할때 github 저장소명이 github 특징상 주소에 가장 먼저 표시되기 때문에 라우터 경로 시작도 basename속성을 이용해서 저장소명을 시작값으로 설정해야한다 */}
        <BrowserRouter basename='jaesuk_react'>
        {/* 링크설정 */}
        <nav>
          <Link to ="/">유재석</Link>
          <Link to ="intro">인적사항</Link>
          <Link to ="nick">별명&특징</Link>
        </nav>
        {/* 라우터 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="intro" element={<Intro />} />
          <Route path="nick" element={<Nick />} />
        </Routes>
        </BrowserRouter>
      </main>
      
      {/* 브라우저라우터 종료위치 */}
      <Footer />
    </div>
  )
}

export default App
