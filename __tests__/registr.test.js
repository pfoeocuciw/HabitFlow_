import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Registration Page (registr.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../registr.html');
        const html = fs.readFileSync(filePath, 'utf8');
        // Не выполняем встроенные скрипты, так как тестируем только разметку
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        // Можно сразу вызвать done, так как скрипты не выполняются
        done();
    });

    test('должен отображаться заголовок "Registration"', () => {
        const heading = document.querySelector('h1');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toMatch(/Registration/i);
    });

    test('форма регистрации содержит поля first-name, last-name, email, password, confirm-password', () => {
        expect(document.getElementById('first-name')).toBeInTheDocument();
        expect(document.getElementById('last-name')).toBeInTheDocument();
        expect(document.getElementById('email')).toBeInTheDocument();
        expect(document.getElementById('password')).toBeInTheDocument();
        expect(document.getElementById('confirm-password')).toBeInTheDocument();
    });
});
