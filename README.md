#단계별 진행상황 리스트

### 1. react.js 2주차 Day 1
https://www.coursera.org/learn/front-end-react/supplement/Cb0se/exercise-instructions-configuring-your-react-application
- React 앱 설정
    - yarn을 이용하여 bootstrap, reactstrap, react-popper을 추가함
    - index.js에 bootstrap.min.css를 import 시킴
    - App.js에 Navigation Bar 추가함

### 2. react.js 2주차 Day 2
https://www.coursera.org/learn/front-end-react/supplement/996so/exercise-instructions-react-components-part-1
- React Component Part 1
    - Menu Component를 추가한다.
    - 추가한 Menu Component를 App.js에 추가함
    > **컴포넌트를 만들고 정의하는데 목적이 있음**
    > <상세 내용>
    > 1. 제공되는 image.zip을 받아 images 파일들을 받아서 public/asset 경로에 저장한다.
    > 1. src폴더 안에 component 폴더를 만든다.(component들 저장용)
    > 1.  제공된 소스를 보고 MenuComponent.js를 만들어 component 폴더에 저장한다.
    > 1. App.js파일에 만들었던 MenuComponent.js를 import 시킨다.
    > 1. App.css의 내용을 전부 지운다.

### 3. react.js 2주차 Day 3
https://www.coursera.org/learn/front-end-react/supplement/8YC7e/exercise-instructions-react-components-part-2
- React Components Part 2
    - Make use of the Card component to display a list of items.
    - Use the Card component to display detailed information.
    > **state와 props를 이용하여 컴포넌트에 데이터를 전달하는 것에 집중**
    > 배운 내용들은 아래와 같다.
    > 1. App.js에서 dishes를 props로 전달
    > 1. MenuComponent.js에서 props로 받은 dishes를 map으로 분리, 각각 Card 하나로 만들어서 display 한다.
    > 1. 각 카드에 onClick 이벤트를 추가함 >> 클릭이벤트가 발생할 시 setState함수가 동작하기 때문에 재 re-rendering이 일어난다. 클릭한 dish의 데이터가 state에 저장됨
    - __좀 더 깊게__
        1. 클릭이 일어나면 this.onDishSelect(dish) 함수가 동작함.
        1. onDishSelect(dish) 함수는 setState를 하여 selectedDish의 값을 변경한다.
        1. 그럼 아래의 코드에 있는  this.state.selectedDish의 값이 변경되어 아래코드에서 ```this.renderDish(this.state.selectedDish)``` 부분이 다시 실행된다.
        ```javascript {.class1 .class}
            return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
        ```
        4. state의 변화로 인해 생기는 부분을 잘 캐치해놔야 함
        