import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUserResponse} from "./user-response.type";

@Injectable()
export class UserService {
  private token = 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmRlIiwiaWF0IjoxNjYyMzEyNzU4LCJleHAiOjE2NjIzOTkxNTh9.5hgnum12B_pXt7QeHlxOZrxOcdhgtniLWC35MaXK8vA';

  public constructor(private httpClient: HttpClient) {

  }

  public async loadUser(): Promise<IUserResponse> {
    const response: IUserResponse = await this.httpClient.get<IUserResponse>('http://localhost:3000/user', {
      headers: {
        Authorization: this.token,
      }
    }).toPromise();

    console.log(response);

    this.processResponse(response);

    return response;
  }

  public async updateUser(updateUserDto: any): Promise<void> {
    const response = await this.httpClient.put<IUserResponse>('http://localhost:3000/update-user', {user: updateUserDto}, {
      headers: {
        Authorization: this.token,
      }
    }).toPromise();

    this.processResponse(response);
  }

  public async login(loginUserDto: any): Promise<void> {
    const response = await this.httpClient.post<IUserResponse>('http://localhost:3000/login', {user: loginUserDto}).toPromise();

    this.processResponse(response)
  }


  private processResponse(response: IUserResponse): void {
    // TODO: Should be saved globally, not here.
    this.token = `Token ${response.user.token}`;
  }
}
