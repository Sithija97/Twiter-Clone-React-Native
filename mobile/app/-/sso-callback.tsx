import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function SSOCallback() {
  useEffect(() => {
    WebBrowser.maybeCompleteAuthSession();
  }, []);
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;
  if (isSignedIn) return <Redirect href="/(tabs)" />;
  return null;
}
