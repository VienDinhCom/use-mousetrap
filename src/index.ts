import { useEffect, useRef } from 'react';
import mousetrap, { ExtendedKeyboardEvent } from 'mousetrap';

type Keys = string | string[];
type Action = 'keypress' | 'keydown' | 'keyup';
type Callback = (event: ExtendedKeyboardEvent, combo: string) => unknown;

/** Binds a specified keyboard command to a callback method (https://craig.is/killing/mice) */
export function useMousetrap(keys: Keys, callback: Callback, action?: Action) {
  let callbackRef = useRef<Callback>(callback);

  useEffect(() => {
    mousetrap.bind(
      keys,
      (event, combo) => {
        if (typeof callbackRef.current === 'function') {
          callbackRef.current(event, combo);
        }
      },
      action
    );

    return () => {
      mousetrap.unbind(keys);
    };
  }, [keys, action]);
}

export default useMousetrap;
