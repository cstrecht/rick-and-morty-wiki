import { useRef, useEffect } from "react";

export default function useEffectOnce(effect) {
  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);

  //step 1 - Initially, this doesn't happen, because the effectCalled const is false. There are no render.
  if (effectCalled.current) {
    renderAfterCalled.current = true; //.current = access the value
  }
  //step 2 - useEffect will execute. This will only execute the first time around. Once the effectCalled is true(line 23), the if statement above (line 13) will execute.
  useEffect(() => {
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true; //the effect is now running!
    }
    //step 3 - This way, the original const destroyFunc was undefined. Now, it receives the effect.
    // Best part is that it only renders ONCE! That's why we're using this instead of useState :)

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);
}
