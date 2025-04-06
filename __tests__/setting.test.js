import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Settings Page (settings.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../settings.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице присутствует форма настроек с id "settings-form"', () => {
        const form = document.getElementById('settings-form');
        expect(form).toBeInTheDocument();
    });

    test('форма настроек содержит поля: first-name, last-name, age, gender, email', () => {
        expect(document.getElementById('first-name')).toBeInTheDocument();
        expect(document.getElementById('last-name')).toBeInTheDocument();
        expect(document.getElementById('age')).toBeInTheDocument();
        expect(document.getElementById('gender')).toBeInTheDocument();
        expect(document.getElementById('email')).toBeInTheDocument();
    });
});
