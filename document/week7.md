# react.js 7주차 진행 보고서

### 1. react.js 7주차 Day 1

- Redux 액션
https://www.coursera.org/learn/front-end-react/lecture/hUr1y/redux-actions

- 리덕스 리듀서 설정하기
https://www.coursera.org/learn/front-end-react/supplement/PYeZk/exercise-instructions-combining-reducers

- 풀이
https://www.coursera.org/learn/front-end-react/lecture/moj5l/exercise-video-combining-reducers

**개요**
- 이번주에는.. 어떻게 state의 부분을 reducer들로 분리하여 관리하는지, 그리고 전체 state를 관리하기 위해 서로 결합시킬 수 있는지를 배울 것이다.

- exercise detail
    - 우선 기존에 reducer.js를 분리시켜서, 각각 하나의 컴포넌트?로 바꿔버린다.
    - 지금은 데이터를 외부에서 받아오는게 아니라 shared폴더에 있는걸 받아오는데.. 이렇게 되면 각 데이터를 받아오는 파일을 하나씩 만들어야된다는거 아닌감?
    - 그러고 configureStore.js에서 하나로 합친다. combineReducers라는 함수로.
    - 그렇다면 action 매개변수가 하는 역할은 뭐지..? 다음 강의 때 쓰나? -> **그렇다**
    
- conclusions
    - In this exercise we have learnt to split the reducer into multiple reducers that manage partial state, and then combine them together.