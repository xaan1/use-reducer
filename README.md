React Hooks waxay kuu oggolaanayaan inaad isticmaasho sifooyin sida state iyo saameynta dhinac (side effects) gudaha qaybaha shaqooyinka (function components) adigoon isticmaalin fasallo. Hooks waxay hagaajiyaan xulashada iyo dib-u-isticmaalka qaybo (components) iyo sifooyinka guud. Halkan waxaa ah sharaxaad iyo tusaalooyin ku saabsan Hooks-ka ugu caansan ee React:

1. useState
useState waxaa loo isticmaalaa in lagu abuuro state gudaha qaybaha shaqooyinka.

Tusaale:
jsx
Copy code
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
Faa'iidada: Waxay kuu oggolaanaysaa inaad ku darto state gudaha qaybaha shaqooyinka iyada oo aan loo baahnayn fasallo.




2. useEffect
useEffect waxaa loo isticmaalaa in lagu maareeyo saameynta dhinac (side effects) sida soo dirista xogta (data fetching), dhageysiga dhacdooyinka (event listeners), iyo cusboonaysiinta DOM-ka.

Tusaale:
jsx
Copy code
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
Faa'iidada: Waxay kuu oggolaanaysaa inaad maareyso saameynta dhinac oo aad qabato falal dheeraad ah marka component-ka isbeddelo.







3. useContext
useContext waxaa loo isticmaalaa in lagu isticmaalo macnaha guud (context) gudaha qaybaha.

Tusaale:
jsx
Copy code
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am styled by theme context!</button>;
}
Faa'iidada: Waxay kuu oggolaanaysaa inaad si fudud ugu isticmaalato context gudaha qaybaha adigoon isticmaalin Context.Consumer.








4. useReducer
useReducer waxaa loo isticmaalaa in lagu maareeyo state adag oo leh falal (actions).

Tusaale:
jsx
Copy code
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
Faa'iidada: Waxay ku habboon tahay maareynta state adag iyo qaabaynta falalka (actions) si la mid ah Redux.









5. useCallback
useCallback waxaa loo isticmaalaa in lagu abuuro xasuus gooni ah (memoized) oo loogu talagalay shaqooyinka si aysan dib ugu abuurmin ilaa xuduudaha ku tiirsan (dependencies) aysan is beddelin.

Tusaale:
jsx
Copy code
import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <button onClick={handleClick}>Click me</button>;
}
Faa'iidada: Waxay yareysaa xusuusta iyo cusboonaysiinta aan loo baahnayn marka aad ku isticmaasho callbacks gudaha qaybaha.





6. useMemo
useMemo waxaa loo isticmaalaa in lagu abuuro xasuus gooni ah (memoized) oo loogu talagalay qiimaha xisaabta si aysan dib ugu xisaabtamin ilaa xuduudaha ku tiirsan (dependencies) aysan is beddelin.

Tusaale:
jsx
Copy code
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ a, b }) {
  const result = useMemo(() => {
    return a + b; // Tusaale ahaan xisaab adag
  }, [a, b]);

  return <div>Result: {result}</div>;
}
Faa'iidada: Waxay hagaajisaa waxqabadka adiga oo yareynaya xisaabinta aan loo baahnayn.









7. useRef
useRef waxaa loo isticmaalaa in lagu abuuro tilmaamo joogto ah (mutable) gudaha qaybaha.

Tusaale:
jsx
Copy code
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
Faa'iidada: Waxay kuu oggolaanaysaa inaad ku isticmaasho tilmaamo si aad ugu adeegto macluumaad joogto ah sida DOM elements.

8. useLayoutEffect
useLayoutEffect waxaa loo isticmaalaa sida useEffect laakiin waxay dhacdaa ka hor inta muuqaalka la sawirin (paint). Waxaa badanaa loo isticmaalaa in wax laga beddelo DOM-ka.

Tusaale:
jsx
Copy code
import React, { useState, useLayoutEffect } from 'react';

function LayoutEffectExample() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10);
    }
  }, [value]);

  return <div>{value}</div>;
}
Faa'iidada: Waxay kuu oggolaanaysaa inaad qabato falal ka hor inta muuqaalka la sawirin (paint).

9. useDebugValue
useDebugValue waxaa loo isticmaalaa in la siiyo magac macluumaad wax sixid (debugging).

Tusaale:
jsx
Copy code
import React, { useState, useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // Custom hook oo wata useDebugValue
  useDebugValue(isOnline ? 'Online' : 'Offline');

  // Wax kale...
  return isOnline;
}
Faa'iidada: Waxay ka caawisaa sixidda (debugging) adiga oo siinaya magac ku saabsan xaaladda ama macluumaadka aad rabto inaad aragto.

Kuwani waa qaar ka mid ah Hooks-ka ugu caansan ee React oo wata tusaalooyin iyo faa'iidooyinkooda. Ma jiraan waxyaabo kale oo gaar ah oo aad rabto inaad wax ka ogaato?






