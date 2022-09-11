export interface IUserResponse {
  user: {
    username: string;
    email: string;
    id: string;
    token: string;
    expiresIn: number;
  }
}
