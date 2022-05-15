# Vanilla JS SPA 과제 테스트용 템플릿

과제 테스트 대비해서 만들어놨던 모듈 템플릿

#### StateManager

- 리덕스의 간단한 버전을 구현
- `createStore()`로 store를 만들고, `getState()`, `dispatch()`로 read, write

#### Reducer

- 리덕스에서 reducer 작성하듯 쓰면 됨

#### VDom

- createElement(type, props, ...children)
- 가상돔은 아님. 돔을 편하게 만들기 위한 헬퍼 모듈

```js
  type: string;
  props: {
    ...attributes,
    on: {
      [event type]: [event handler],
    },
    data: {
      // 여기 있는 애들은 dataset에 저장
    }
  };
  child: 어떤 타입이든 ㄱㅊ. DOM이 아니면 TextNode로 만들어서 append함
```

#### Components

- 항상 `Component(state, dispatch, props)` 꼴로 만들 것.

- `App` 컴포넌트에서 시작해 `state`, `dispatch`를 쭉쭉 내려준다.
- 리렌더링될 때 마다 새로운 state, dispatch를 반환 받아야함. `render()`함수에서 해주자.
- 기본 기능만 구현된 모듈이기 때문에, 컴포넌트 바깥에서 억지로 dispatch 해야하는 상황을 위해 store를 만든 위치에서 `dispatchEffect = (action) => store.dispatch(action)`를 export 할 수 있음.

#### Utils

- `throttle`, `debounce`: 최적화 요구사항
- `memoize`: 캐싱 요구사항

#### 보완해야할 것

- input에 입력 후, 전체 앱이 리렌더링 되면 포커스가 풀림
- State Manager 미들웨어 구현: 그냥 때려박아도 되긴 함. 하지만 좀 더 선언적인 코드를 위해..
  - local storage
  - api 요청
- Router 구현
- 근데 이제 과제 테스트 볼 일 없을 거 같아서 안할듯
