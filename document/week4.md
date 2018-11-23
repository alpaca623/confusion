# react.js 4주차 진행 보고서

### 1. react.js 4주차 Day 1
- 싱글페이지 어플리케이션(SPA) 이해하기
https://www.coursera.org/learn/front-end-react/lecture/QjWIv/single-page-applications

- 싱글페이지 만들기 연습 part 1
https://www.coursera.org/learn/front-end-react/supplement/CmStz/exercise-instructions-single-page-applications-part-1

- 풀이
https://www.coursera.org/learn/front-end-react/lecture/vdABh/exercise-video-single-page-applications-part-1

####**object**
- SPA(single page application) understand

> 강의에서 알려주는 SPA의 문제점은 4가지가 있는데,
> 1. 검색엔진에 최적화가 되어 있지 않다.
> 2. 클라이언트 쪽에서 얼마만큼의 분량을 책임지게 하는가?
> 3. 기록을 유지하는 방법(앞 뒤 버튼으로 페이지를 이동할 범위가 정해지지 않는다.)
> 4. 분석데이터를 수집하는게 어렵다.

- 위에거는 참고하고, 과제는 다음과 같다.
    - **object**
        - React 라우터를 활용하여 단일 페이지 응용 프로그램 개발 가능
        - React 라우터 지원을 사용하여 다양한 페이지를 탐색 할 수있는 방법을 제공하십시오.
    - detail analysis
        - ContactComponent가 추가됨. 이 컴포넌트는 presentational component로 구분할 수 있다.
        - json data에 변화를 줌. 기존 dishes.js에서 4개의 파일로 분리. 각각 dishes / comments / promotions / leaders.
        - 분리된 데이터들을 각각 spa로 구성한다는 의미 같다.. HomeComponent.js를 업데이트 한다. 
            - 데이터들을 받아 각 배열 중 featured 값이 true인것을 찾아 display 시킨다.
        - MainComponent.js의 HomePage함수에 변경을 준다. 이렇게 하면 HomeComponent.js에서 전달된 데이터들이 각각 RenderCard에 전달되고 dish, promotion, leader가 각각 카드로 render된다.
        - 각각의 카드가 SPA인듯.?
