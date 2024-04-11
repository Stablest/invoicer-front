import { IsNotEmpty, IsString } from "class-validator";

export class AuthDTO {
  @IsNotEmpty()
  @IsString()
  accessToken?: string;

  constructor(accessToken?: string) {
    this.accessToken = accessToken;
  }
}
