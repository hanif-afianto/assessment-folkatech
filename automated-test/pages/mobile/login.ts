import { expect, Locator } from '@playwright/test';

export class LoginPage {
    private session: any;

    constructor(session: any) {
        this.session = session;
    }

    async allowPermissions() {
        await this.session.tap({
            element: {
                attributes: {
                    'text': 'Allow',
                    'class': 'android.widget.Button',
                    'resource-id': 'com.android.permissioncontroller:id/permission_allow_button',
                },
            },
            appId: "com.google.android.permissioncontroller",
        });
    }

    async tapLoginButton() {
        await this.session.tap({
            element: {
                attributes: {
                    'content-desc': "Log in",
                    'class': "android.widget.Button",
                },
            },
            appId: "id.go.kemenpppa.sapa",
        });
    }

    async enterEmail(email: string) {
        await this.session.tap({
            element: {
                attributes: {
                    'hint': "Nomor Ponsel atau Email",
                    'class': "android.widget.EditText",
                },
            },
            appId: "id.go.kemenpppa.sapa",
        });

        await this.session.type(email);
    }

    async enterPassword(password: string) {
        await this.session.tap({
            element: {
                attributes: {
                    'hint': "Password",
                    'class': "android.widget.EditText",
                },
            },
            appId: "id.go.kemenpppa.sapa",
        });

        await this.session.type(password);
    }

    async tapNextButton() {
        await this.session.tap({
            element: {
                attributes: {
                    'content-desc': "Selanjutnya",
                    'class': "android.widget.Button",
                },
            },
            appId: "id.go.kemenpppa.sapa",
        });
    }
    
    async invalidEmailMessage() {
        await expect(this.session).toHaveElement({
            attributes: {
                'content-desc': 'Email atau nomor telepon yang dimasukkan tidak ditemukan.',
                'class': 'android.view.View',
            },
        });
    }

    async invalidPasswordMessage() {
        await expect(this.session).toHaveElement({
            attributes: {
                'content-desc': 'Password yang anda masukkan salah.',
                'class': 'android.view.View',
            },
        });
    }
}
