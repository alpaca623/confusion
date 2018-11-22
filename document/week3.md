# react.js 3주차 진행 보고서

### 1. react.js 3주차 Day 1
https://www.coursera.org/learn/front-end-react/supplement/k92ZA/exercise-instructions-presentational-and-container-components
- Presentational & Container 컴포넌트 만들기 연습
    - 내 react app에 presentational and container 컴포넌트를 만든다.
    - presentational component가 내 앱에 신경을 쓸 수 있게 만들 수 있다.
    - Enable container components to deal with the state, provide the data and handle user interactions.( 컨테이너 구성 요소가 상태를 처리하고 데이터를 제공하고 사용자 상호작용을 처리 할 수 있게 한다. )

> 여기서 빡센 부분이 등장하는데, DishDetail 부분을 구현해야 한다. 직접..

> 여기서 presentational component부분과, container component를 만들어야 하는데,
- presentational component는 DishDetailComponent.js, MenuComponent.js가 그 역할을 한다. 말 그대로 보여지는 역할.
- MainComponent.js가 container component 역할을 한다. container의 역할을 하는데, 그 음.. 데이터를 전달해준다.. 통로 역할이라고 할 수 있겠다.


### 2. react.js 3주차 Day 2, Day 3
https://www.coursera.org/learn/front-end-react/supplement/wiObL/exercise-instructions-functional-components
- functional component 구현하기
- Illustrate the reimplementation of presentational components as pure functional components

> 디자인 요소만 제일 힘들었다.. functional component를 구현하는 것은 어렵지 않았다. DishDetailComponent.js의 RenderDish, RenderComments 함수가 functional component이다. 각각의 역할은 선택된 dish의 세부 내용을 한 번 더 컴포넌트화 시켜서 보여주게 된다. 

> 여기서 포인트로 짚을만한 것들은 아래와 같다. 
1. es6문법 -> 매개변수로 객체의 각 요소를 매칭해서 를 받을 수 잇다. & http://mollangk.tistory.com/29 -> spread 연산자 확인
1. 컴포넌트를 분리시켜서 함수형으로 만드는 것은 개인의 역량일듯..


### 3. react.js 3주차 Day 4
https://www.coursera.org/learn/front-end-react/supplement/dLbRz/exercise-instructions-header-and-footer
- Header and Footer 추가
- 가상 Dom 이해

> 디자인이 안먹음.. 이상함.. 우선 지금 중요한게 아니라서 그냥 넘어감.. >> App.css를 import 하지 않아서 생긴 문제. 처리됨