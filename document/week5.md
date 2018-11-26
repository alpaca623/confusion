# react.js 5주차 진행 보고서

### 1. react.js 5주차 Day 1
- 제어된 폼 (Controlled Forms) 컴포넌트
https://www.coursera.org/learn/front-end-react/lecture/RYDaq/controlled-forms

- 제어된 폼 만들기 연습
https://www.coursera.org/learn/front-end-react/supplement/oHw3Z/exercise-instructions-controlled-forms

- 풀이
https://www.coursera.org/learn/front-end-react/lecture/2AfDn/exercise-video-controlled-forms

- **내용**
    - controlled components을 어떻게 디자인 할 것인지에 대해서 배울 것이다.
    - 이 exercise를 통해 controlled form을 디자인할 수 있게 될 것이다.

- **풀이 내용 해석**
    - 우선 Contact component를 클래스 형태로 변경해주어야 함. 그래야 controlled form을 사용할 수 있음 -> 왜지?? 정확히 이해 못함
    - **변경된 내용 detail**
        - class형태로 변경한 Contact 컴포넌트에 생성자를 만들고, state를 만든다. 각 입력폼 데이터를 저장할 속성을 지정함.
        - 우선 reactstrap에서 폼을 제공해주는데, 그 폼을 이용하면 된다. 

### 2. react.js 5주차 Day 2
- 제어된 폼 벨리데이션 연습
https://www.coursera.org/learn/front-end-react/supplement/9GSIO/exercise-instructions-controlled-form-validation
- 풀이
https://www.coursera.org/learn/front-end-react/lecture/ezz4V/exercise-video-controlled-form-validation

#### **Controlled Form Validation**
- Exercise Objectives and Outcomes.
    - 간단한 from validation 형태를 만들고 설정할 수 있다.
- 실제로 contrlled from을 사용해보는 exercise인데, 음.. react에서 controlled from의 핵심은 실시간으로 form을 추적하는 것같다. 일반 바닐라로 하는것보다 더 편하다! 그게 핵심. 어찌됐든 validation처리를 다 해줘야 하지만 편하다.. touched의 의미를 아직은 잘 모르겠지만.. 활성 상태를 의미하는건가? focus가 잡혀 있는지??
    - 위에건 좀 추적 해봐야 겠따
    - 추적 결과 >>>