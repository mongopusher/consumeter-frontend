import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUserResponse} from "./user-response.type";
import * as dayjs from 'dayjs';
import {Dayjs} from "dayjs";

@Injectable()
export class UserService {
  public constructor(private httpClient: HttpClient) {

  }

  public isLoggedIn(): boolean {
    /* take a look at:
        https://codecraft.tv/courses/angular/routing/router-guards/
        https://blog.angular-university.io/angular-jwt-authentication/
    */
    return dayjs().isBefore(this.getExpiration());
  }

  public async loadUser(): Promise<IUserResponse> {
    const response: IUserResponse = await this.httpClient.get<IUserResponse>('http://localhost:3000/user').toPromise();

    this.processResponse(response);

    return response;
  }

  public async updateUser(updateUserDto: any): Promise<void> {
    const response = await this.httpClient.put<IUserResponse>('http://localhost:3000/update-user', {user: updateUserDto}).toPromise();

    this.processResponse(response);
  }

  public async login(loginUserDto: any): Promise<IUserResponse> {
    const response = await this.httpClient.post<IUserResponse>('http://localhost:3000/login', {user: loginUserDto}).toPromise();

    this.processResponse(response);

    return response;
  }

  public async createUser(createUserDto: any): Promise<IUserResponse> {
    const response = await this.httpClient.post<IUserResponse>('http://localhost:3000/create-user', {user: createUserDto}).toPromise();

    this.processResponse(response);

    return response;
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');

  }


  private processResponse(response: IUserResponse): void {
    const expiresAt = dayjs().add(response.user.expiresIn, 'second')

    localStorage.setItem('token', response.user.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    console.log('Login successful. You will be automatically logged out:', expiresAt.format('DD.MM.YYYY-HH:mm:ss'));
  }

  private getExpiration(): Dayjs | undefined {
    const expiration = localStorage.getItem('expires_at');
    if (expiration === null) {
      return undefined;
    }
    const expiresAt = JSON.parse(expiration);
    return dayjs(expiresAt);
  }
}
