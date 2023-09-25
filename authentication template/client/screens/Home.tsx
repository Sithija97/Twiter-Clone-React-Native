import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { reset } from "../store/auth/authSlice";
import { createTask, getTasks } from "../store/tasks/taskSlice";

export const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => state.auth);
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);

  const handleLogout = () => {
    dispatch(reset());
    navigation.navigate("Login");
  };

  const fetchTasks = async () => {
    await dispatch(getTasks()).then((data) => console.log(data.payload));
  };

  const AddTask = async () => {
    await dispatch(createTask());
  };

  useEffect(() => {
    fetchTasks();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Welcome ${auth.user?.name}`}</Text>
      <View style={styles.addTask}>
        <Button title="Add Tasks" onPress={AddTask} />
      </View>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  addTask: {
    marginBottom: 20,
  },
});
