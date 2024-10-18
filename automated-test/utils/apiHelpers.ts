import { APIRequestContext } from "@playwright/test";

export async function loginAndGetToken(request: APIRequestContext, email: string, password: string, reg_id: string) {
    const response = await request.post('/api/login', {
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
  