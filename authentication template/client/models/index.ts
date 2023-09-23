export interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export interface IAuthInitialState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
