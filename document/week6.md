# react.js 6주차 진행 보고서

### 1. react.js 6주차 Day 1
- Redux 설정하기
https://www.coursera.org/learn/front-end-react/supplement/OyUO4/exercise-instructions-introduction-to-redux

- 풀이
https://www.coursera.org/learn/front-end-react/lecture/2Dxmi/exercise-video-introduction-to-redux

**Exercise**
- detail
    - redux를 사용하기 위해서는 redㅍux를 받아야 한다.
    - 먼저 Redux 폴더를 만든다. 이 폴더에 모든 redux 관련 파일들을 만들 것이다.
    - 먼저 reducer기능을 만들기 위해 reducer.js파일을 만든다. 이 파일의 역할은 '환원기' 역할이다. `환원기`가 뭐지?
    - **다음**
    - reducer.js에서 하는 일은, 기존의 MainComponent.js에서 하던 일중, 데이터를 받아 변수에 넣는 부분을 가져왔다.(initialState 변수) -> 이로써 state에 데이터를 저장하는 부분을 MainComponent.js에서 빼버렸다.
        - 이걸로 봐서, reducer.js는 데이터를 모아놓는 곳으로 볼 수 있다.(우선)
        - 그리고 export로 state를 리턴시킨다. 아직 매개변수의 action은 뭔지 모름, 단 어플리케이션을 초기화 할 시에는 state가 비어있을 수도 있으므로, 샘플 데이터?를 넣어 놓는거같다. 여기서는 initialState를 넣는다.
    - **다음으로**
    - configureStore.js에서 하는일은.. 뭔가 저장소 같다.
        - 이게 redux에서 제공하는 함수로 store를 만드는거같은데(SPA의 개념에서 나온 store), 음.. 하는일은 별로 없다.(그런거같다)
        - 저장소를 만들어서 그 저장소를 리턴한다.
    - **다음**
    - App.js
        - 이제 만들었던 저장소를 어플리케이션에 전달을 시킨다.
        - 먼저 store를 import 해서 데이터를 가져온다.
            1. react-redux에서 제공하는 Provider를 이용하여 앱에 집어 넣는다.
            ```javascript
                <Provider store={store}>
                    ...
                </Provider>
            ```
    - **다음**
    - MainComponent.js
        - react-router-dom에서 withRouter를 import 시킴.
        - react-redux에서 connect를 import 시킴
        - **강의내용** 마지막 단계는 react-redux의 Connect를 사용하여 React 애플리케이션을 Redux Store에 연결하는 것입니다.
        - 여기서 좀 에러.. 이거 함수들 이해 해야됨
        ```javascript
        export default withRouter(connect(mapStateToProps)(Main));
        ```
    - 우선 작동이 된다. ```withRouter```함수, ```connect``` 함수 이해 필요

### 2. react.js 6주차 Day 2

- 리덕스 폼 (React Redux Forms)에 대한 이해
https://www.coursera.org/learn/front-end-react/lecture/7wwtA/react-redux-forms

- React Redux Form 설치 및 사용하기
https://www.coursera.org/learn/front-end-react/supplement/vQeQs/exercise-instructions-react-redux-form

- 풀이
https://www.coursera.org/learn/front-end-react/lecture/JiE6F/exercise-video-react-redux-form

- Exercise
    - 이번 exercise에서는 react-redux-form을 이용해서 더 쉽게 form을 지원할 수 있도록 controlled form을 변환할 것이다.
    
    - detail
        1. react-redux-form을 install하고 설정한다.
        2. react-redux-form을 사용하여 controlled form을 구현한다.

        - 먼저 yarn으로 인스톨을 한다. 다음, ContactComponent.js를 열어, haneldSubmit를 다시 쓴다.
        - 다음, 폼 소스를 수정한다.
        - 기존에는 그냥 폼을 썼지만, 이제는 `react-redux-form`에서 제공하는 LocalForm을 사용한다.
            - 새로 추가된 내용을 참고
            ```javascript
            <Control.text model=".first" ~~ />
            ```
        - 소스 길이가 좀 줄었다.. 왜 그런지는 풀이를 보고 더 이어서 써야겠음.
        - **풀이**
        - 여기서 react-redux-form을 사용하게 되면서 생짜로 만들었던 handleInputChange, handleBlur은 필요가 없어졌다. 이 부분은 react-redux-form이 관리를 해주기 때문이라고 한다..
        - Q. 어떻게 이게 controlled form으로 동작하는거지..? 
        - 여기서 모델은 name의 역할을 하는것같다. key 값을 지정하는거같은데 앞에 .을 붙여야하나보다..

        - `<Control.text ~>` 이 부분은 input box를 대체한다. 이부분이 controlled form을 가능하게 해주는 부분같다.

        - **토요일날 싹 다 한번 다시 해봐야겟다**

### 3. react.js 6주차 Day 3

- 리덕스 폼 밸리데이션 (React Redux Form Validation)
https://www.coursera.org/learn/front-end-react/supplement/PSbMZ/exercise-instructions-react-redux-form-validation

- 풀이
https://www.coursera.org/learn/front-end-react/lecture/tgjuC/exercise-video-react-redux-form-validation

- detail
    - form에 validation을 추가하는 exercise
    - react-redux-form을 사용하여 만든다.

    - 흠.. 좋은데..우선 자동으로 처리해주는게 매우 편리하다

### 4. react.js 6주차 Day 4

- 리액트 리덕스 폼 과제
https://www.coursera.org/learn/front-end-react/peer/qp3A0/react-forms-and-redux

- 충 격.. 첫번째 Task1이 이해가 안되었다..
    - 흠.. 버튼 하나도 컴포넌트가 될 수 있다.. 클래스 컴포넌트를 만들라는데 이걸 어떻게 만들어야될지 전혀 감이 안잡혔었다.
    - ->>>> 처음에 했던 나의 생각 : 1. 버튼을 만들고. 2. 버튼에 onClick 이벤트를 이용하여 Modal 창을 띄운다. 이생각을 하니까 아무것도 되지 않았음.. 뭘 어떻게 해야되는건지

    - 결론 : comment 밑에다가 클래스컴포넌트를 렌더링 시킨다..그리고 그 안에서 버튼render 시키는거다..