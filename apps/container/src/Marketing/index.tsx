// providing types for remotes loaded at runtime is complicated
// because TS expects types to be available at **compile time**. There are
// some solutions out there but they require somehow sharing the types via
// a separate npm package or deployed tarball which would need to be redeployed
// whenever types change to not cause errors in the host application. That kind
// of frailty does not seem to be a good idea.
//
// @ts-ignore-next-line
import { mount } from "marketing/Marketing";
import { useEffect, useRef } from "react";

const Marketing = () => {
  console.log("heyy");
  const rootRef = useRef(null);

  useEffect(() => {
    mount(rootRef.current);
  }, [rootRef]);

  return <div ref={rootRef} />;
};

export default Marketing;
