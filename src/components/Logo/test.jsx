/* import { useState } from 'react';*/
import "./ComponentName.css";
import { useEffect } from "react";

export function ComponentName() {
  // code executé à chaque render
  useEffect(() => {
    // Code a executer en fonction du 2eme paramètre

    return () => {
      //Code a executer une seule fois lors du retrait du DOM du composant
    };
  }, []);
  return <>{booleanValue && <MyComponent />}</>;
}
