import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  useTheme,
} from "@mui/material/styles";
import React, { ReactNode } from "react";
import { useMemo } from "react";


import typography from "./typography";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const defaultTheme = useTheme();
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      ...defaultTheme,
      typography
    }), []
  )
  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider