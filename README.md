# react를 이용한 포트폴리오 사이트 만들기

## 설치
1. 폴더를 만들고 리액트를 설치 `npx create-react-app 프로젝트 이름`
2. git에 업로드


## 트러블 슈팅
<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,   
윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로    이루어지는데, Git이 이 둘 중 어느 쪽을 선택할지 혼란이 온 것이다.      

해결방법   
`git config --global core.autocrlf true // 시스템 전체에 적용`   
`git config core.autocrlf true // 해당 프로젝트에만 적용`   

에러 메시지 끄기
`git config --global core.safecrlf false`
</details>
