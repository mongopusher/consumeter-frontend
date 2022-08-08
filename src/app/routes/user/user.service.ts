import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUserResponse} from "./user-response.type";

@Injectable()
export class UserService {
  private token = "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbWlyYWRvIiwiZW1haWwiOiJ1cnMuZ3JhbXNhbGxAd2ViLmRlIiwiaWF0IjoxNjU5OTY4NjQxLCJleHAiOjE2NjAwNTUwNDF9.P5FeP5YQ2mIkYq9mCE9xF6sPBE_tLwKj-nr0tkBj4AU";

  public constructor(private httpClient: HttpClient) {

  }

  public async loadUser(): Promise<IUserResponse> {
    const response: IUserResponse = await this.httpClient.get<IUserResponse>('http://localhost:3000/user', {
      headers: {
        Authorization: this.token,
      }
    }).toPromise();

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


  private processResponse(response: IUserResponse): void {
    // TODO: Should be saved globally, not here.
    //this.token = response.user.token;
  }
}
