# react를 이용한 포트폴리오 사이트 만들기
리액트(React)는 UI를 구축하기 위한 자바스크립트 라이브러리로, 컴포넌트 기반 아키텍처와 가상 DOM을 활용하여 빠르고 재사용 가능한 웹 애플리케이션을 개발하는 데 사용됩니다.   
   
JSX 문법을 통해 UI를 정의하며, 단방향 데이터 흐름을 통해 데이터 관리를 단순화하고 예측 가능한 애플리케이션을 구축하는데 도움을 줍니다. 또한 리액트는 컴포넌트 생명주기를 제공하여 컴포넌트의 생명주기 동안 필요한 작업을 수행할 수 있도록 합니다.   
   
리액트는 활발한 커뮤니티와 다양한 생태계를 가지고 있어, 웹 애플리케이션을 빠르고 효율적으로 개발할 수 있는 강력한 도구입니다.   
   
## 작업 순서
1. 리액트 설치
2. 쓸모없는 파일 정리하기(APP.js, index.js제외)
3. git에 업로드
4. [lenis 사이트](https://github.com/studio-freight/lenis)

## 설치
1. react 설치 `npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

### GSAP
GSAP(GreenSock Animation Platform)은 JavaScript 기반의 강력한 애니메이션 라이브러리로, 웹페이지 및 웹 애플리케이션에서 다양한 동적 애니메이션 효과를 쉽게 구현할 수 있게 해주는 도구입니다.    
   
GSAP은 직관적이고 강력한 API를 제공하며, CSS, SVG, DOM 요소, 캔버스 등을 대상으로 애니메이션을 만들 수 있어 개발자들이 웹사이트와 앱의 사용자 경험을 향상시키는데 사용됩니다.   

### lenis
lenis는 Javascript로 작성된 오픈 소스 웹 프레임워크입니다. 이 프레임워크는 웹 애플리케이션 및 API를 개발하기 위해 사용됩니다. lenis.js는 경량화되고 빠른 속도로 동작하며, 간단한 문법과 구조를 제공하여 개발자가 쉽게 웹 애플리케이션을 구축할 수 있도록 도와줍니다.   

### Firebase 호스팅 설정
1. firebase 사이트 이동 [사이트 바로가기](https://firebase.google.com/?hl=ko)   
2. 로그인 후 새 프로젝트 만들기   
3. 호스팅 설정 : Firebase CLI 설치 -> 프로젝트 초기화 -> Firebase 호스팅에 배포   
4. '.firebaserc', 'firebase.json'파일이 생기고 배포한 사이트 확인 
   
## 트러블 슈팅
<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,   
윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로   이루어지는데, Git이 이 둘 중 어느 쪽을 선택할지 혼란이 온 것이다. 

해결방법   
`git config --global core.autocrlf true // 시스템 전체에 적용`   
`git config core.autocrlf true // 해당 프로젝트에만 적용`   

에러 메시지 끄기
`git config --global core.safecrlf false`
</details>
