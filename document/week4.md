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

### 2. react.js 4주차 Day 2
- 리액트 라우터 파라미터(parameter)
    - https://www.coursera.org/learn/front-end-react/lecture/WOooU/react-router-parameters
- 싱글페이지 만들기 연습 part 2
    - https://www.coursera.org/learn/front-end-react/supplement/39mcF/exercise-instructions-single-page-applications-part-2
- 풀이
    - https://www.coursera.org/learn/front-end-react/lecture/Mvhcl/exercise-video-single-page-applications-part-2

- **강좌 내용 메모**
    - 리액트 라우터를 썼을 때 가장 장점 중 하나는 **컴포넌트 별로 url을 지정할 수 있다는 것**이 아닐까? 한 페이지에 url을 지정하는게 아닌 컴포넌트별로 url을 지정한다는 것이 굉장한 이점으로 느껴진다. 게다가 url을 통해 매개변수를 전달하고 그 매개변수에 따른 뷰를 보여줄 수 있는 것. 이게 SPA인가..
    - react router을 사용하여 route에 매개변수를 전달하는 방법은 path를 지정할 때 ```menu/:id```이런 식으로 지정하면 된다. 콜론으로 시작하는 매개변수를 사용하여 경로를 지정하면, 그 다음에 오는 모든 내용이 React Route에 의해 매개변수로 해석이 된다.
    - react route는 컴포넌트에 3가지 props를 전달한다. 그 3가지는 match, location, history.
        - match : 자체 내부 속성으로 내부에 경로 매개변수를 포함하는 것.
- **실습 내용 분석**
    - 실습에서는 DishDetailComponent에 SPA를 통합시킨다. url의 route parameter를 DishDetailComponent에 보낼것이다..
    - 실습을 다 하고 나서는, URL 내에서 경로 매개 변수를 사용하여 구성 요소에 정보를 전달할 수 있도록 React 라우터 구성의 경로를 구성합니다.(네이버 번역)
    - **detail**
        - 먼저, MenuComponent에 Route parameter를 세팅한다. >> 각 dish를 눌렀을 때 DishDetail에 파라미터가 전달될 수 있도록 세팅
            - onClick는 Link가 그 역할을 대신하는듯?? 아.. 그게 아니고 새로 렌더링이 된다. Link를 클릭하면 해당 경로에 해당하는 컴포넌트가 라우팅 되는데, 이때 재 렌더링이 일어나는듯..
            - **이거 생각보다 엄청 복잡하네** 이렇게 만들 수 있는게 대단한듯..
        - MainComponent.js는 DishDetail을 보여줄 수 있도록 세팅한다.
        - DishDetailComponent는 SPA로 변경하여서, Link를 클릭하여 DishDetail이 보여질 때, 이미지와 comment가 보여질 수 있도록 처리함
    - **핵 심 >** 라우팅은 한곳에서만 관리하면 되는듯! 알아서 다 찾아간다.

### 3. react.js 4주차 Day 3
- 리액트 라우터 과제 Task 1-3
    - https://www.coursera.org/learn/front-end-react/peer/ptyN7/react-router-and-single-page-applications

- 이번엔 과제만
- Objectives and Outcomes
    - 제공된 AboutComponent를 단일 페이지 응용프로그램에 통합한다.
    - RenderLeader() 함수를 통해 [RenderLeader]라는 새로운 기능 구성요소를 actstrap <Media> 구성요소를 사용하여 특정 지시선의 세부 정보를 렌더링하는 AboutComponent.js에 추가함
    - 위에서 구현한 <RenderLeader> 구성 요소를 사용하여 정보 페이지의 리더 목록을 구성하고 렌더링함.
- Task 1
    - AboutComponent를 SPA로 합쳐라.
        - 먼저 AboutComponent를 다운받고 components 폴더에 넣어라.
        - MainComponent.js파일에 SPA로 AboutComponent를 통합시켜라. navigation bar와 footer에 링크를 클릭하면 AboutComponent를 나타낼 수 있도록 하여라
        >> 이건 별거 아니였음 exact 라우터로 /aboutus를 추가해주면 됨. 기본이라 상관 없음 아직
- Task 2
    - <RenderLeader> 라는 이름을 가진 새로운 functional component를 구현해라. RenderLeader() function을 만들어서.
        - ```RenderLeader()``` function은 leader의 상세를 파라미터로 받는다.
        - leader 정보를 파라미터로 받아 ```RenderLeader()```function을 구현하고 reactstrap의 <Media> component를 사용하여 아래 스크린샷에 보여지는것처럼 leader 정보를 render해라.
        - AboutComponent에서 <RenderLeader> 컴포넌트를 이용하능하게 만들어라.(**파파고** >>그러면 AboutComponent에서 사용할 수 있는 <RenderLeader> 구성 요소를 사용할 수 있습니다.)
        >> 음.. 어떻게 되었는데, leader 하나를 SPA 식으로 만드는건 음.. 좀 이해가 안된다. RenderLeader라는 함수형 컴포넌트를 만들고 반복 시켰는데 완성이 되어 버렸다. 어려운 과제는 아니었는데 뭔가 의도한게 제대로 나한테 적용되지 않은거 같아서 좀 그렇다.
