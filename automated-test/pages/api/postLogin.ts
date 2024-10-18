import { APIRequestContext } from '@playwright/test';

export class postLogin {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(email: string, password: string, reg_id: string) {
    const response = await this.request.post('/api/login', {
      form: {
        email,
        password,
        reg_id
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const responseBody = await response.json();
    return responseBody.data.token;
  }
}
