// https://vike.dev/Head

import React from "react";
import logoUrl from "../assets/logo.svg";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
