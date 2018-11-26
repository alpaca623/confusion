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


### 3. react.js 5주차 Day 3
- 제어되지 않는 컴포넌트 (Uncontrolled Components)
https://www.coursera.org/learn/front-end-react/lecture/ivOeR/uncontrolled-components
- 제어되지 않는 컴포넌트 만들기 연습
https://www.coursera.org/learn/front-end-react/supplement/Q3UOZ/exercise-instructions-uncontrolled-forms
- 풀이
https://www.coursera.org/learn/front-end-react/lecture/PENVh/exercise-video-uncontrolled-forms

**강의 내용 정리**

- Controlled component를 쓰지 않을만한 간단한 형태를 원하는 경우도 있을 것이다. 그런 간단한 형태를 만드는 방법을  unControlled component라고 한다.
- 방식은 여러가지가 있는거 같은데, 다음과 같은 방식들이 우선 있다.
    - DOM 자체에 의해 처리되도록 내버려 두는 경우
    - DOM 양식 요소에 연관된 참조를 이용해서 처리
    __(아래는 해석)__
    - 관리 구성 요소 내에서 양식을 구현하는 것이 이상적입니다.
    - 때때로 이 접근은 너무 지루할 수 있다.
    - 제어되지 않는 구성요소 접근 방식을 사용하면 양식 데이터를 DOM 자체에서 처리할 수 있습니다.

- **exercise 정리**
    - 로그인 폼을 reactStrap의 Modal을 이용하여 만들고, 아이디와 패스워드를 받는 form을 unControlled component를 이용하여 데이터를 처리한다.
    - 데이터 자체를 이름으로 구분하여, submit 함수에 전달한다. this.username 이런 식으로, 그리고 input element중 하나인 innerRef를 이용하여 데이터를 전달함.