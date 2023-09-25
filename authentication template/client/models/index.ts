export interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export interface Task {
  _id: string;
  user: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAuthInitialState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface ITaskInitialState {
  tasks: Task[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
