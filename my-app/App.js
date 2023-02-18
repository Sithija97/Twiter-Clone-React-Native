import React from 'react';
import './src/config/firebase'
import RootNavigation from './src/navigation/index'
import { ThemeProvider } from 'react-native-elements';


export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}