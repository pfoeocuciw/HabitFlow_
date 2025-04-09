import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Forgot Password Page (forgot_password.html)', () => {
    let dom, document;

    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../forgot_password.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице отображается заголовок "Reset password"', () => {
        const heading = document.querySelector('h1');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toMatch(/Reset password/i);
    });

    test('форма сброса пароля содержит поле reset-email', () => {
        expect(document.getElementById('reset-email')).toBeInTheDocument();
    });
});
