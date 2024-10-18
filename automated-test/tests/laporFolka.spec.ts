import { test } from '@appetize/playwright';
import { LoginPage } from '../pages/mobile/login';

test.use({
    config: {
        publicKey: process.env.APPETIZE_KEY,
        device: process.env.DEVICE,
        osVersion: process.env.OS_VERSION
    }
});

test('Login Using Valid Credential', async ({ session }) => {
    const loginPage = new LoginPage(session);
    await loginPage.allowPermissions();
    await loginPage.tapLoginButton();
    await loginPage.enterEmail('admin@example.com');
    await loginPage.enterPassword('password');
    await loginPage.tapNextButton();
});

test('Login Using Invalid Email', async ({ session }) => {
    const loginPage = new LoginPage(session);
    await loginPage.allowPermissions();
    await loginPage.tapLoginButton();
    await loginPage.enterEmail('admin123@example.com');
    await loginPage.enterPassword('password123');
    await loginPage.tapNextButton();
    await loginPage.invalidEmailMessage();
});

test('Login Using Invalid Password', async ({ session }) => {
    const loginPage = new LoginPage(session);
    await loginPage.allowPermissions();
    await loginPage.tapLoginButton();
    await loginPage.enterEmail('admin@example.com');
    await loginPage.enterPassword('password123456');
    await loginPage.tapNextButton();
    await loginPage.invalidPasswordMessage();
});
