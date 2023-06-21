import AppNavigation from "./navigation/appNavigation";
import { NativeWindStyleSheet } from "nativewind";

export default function App() {
  return <AppNavigation />;
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
