import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Login Page (registration.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../registration.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('должен отображаться заголовок "Welcome Back!"', () => {
        const heading = document.querySelector('h1');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toMatch(/Welcome Back!/i);
    });

    test('форма входа содержит поля для email и password', () => {
        expect(document.getElementById('login-email')).toBeInTheDocument();
        expect(document.getElementById('login-password')).toBeInTheDocument();
    });
});
