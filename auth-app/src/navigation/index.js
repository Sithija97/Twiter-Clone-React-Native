import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import UserStack from "./usetStack";
import AuthStack from "./authStack";

export default RootNavigation = () => {
    const { user } = useAuthentication()

    return user ? <UserStack /> : <AuthStack />
}