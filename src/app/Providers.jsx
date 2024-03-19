// app/providers.tsx
"use client";
// import { ContextProvider } from "@/utils/Context";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextThemesProvider>
      {/* <ContextProvider> */}
      <NextUIProvider>{children}</NextUIProvider>
      {/* </ContextProvider> */}
    </NextThemesProvider>
  );
}
