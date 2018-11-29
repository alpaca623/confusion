# react.js 6주차 진행 보고서

### 1. react.js 6주차 Day 1
- Redux 설정하기
https://www.coursera.org/learn/front-end-react/supplement/OyUO4/exercise-instructions-introduction-to-redux

- 풀이
https://www.coursera.org/learn/front-end-react/lecture/2Dxmi/exercise-video-introduction-to-redux

**Exercise**
- detail
    - redux를 사용하기 위해서는 redux를 받아야 한다.
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