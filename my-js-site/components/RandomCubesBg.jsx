"use client";

import { useEffect, useRef } from "react";

export default function RandomCubesBg() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const init = () => {
      if (window.Color4Bg && window.Color4Bg.RandomCubesBg) {
        initialized.current = true;
        new window.Color4Bg.RandomCubesBg({
          dom: "box",
          colors: ["#dedede", "#d4d4d4", "#e8e8e8", "#ebebeb"],
          loop: true,
        });
      } else {
        // Script not ready yet, retry in 100ms
        setTimeout(init, 100);
      }
    };

    init();
  }, []);

  return (
    <div
      id="box"
      style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
}