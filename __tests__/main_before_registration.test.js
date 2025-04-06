import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Main Before Registration Page (main_before_registration.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../main_before_registration.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице присутствует секция с информацией и кнопка "Start"', () => {
        expect(document.querySelector('.hero-container')).toBeInTheDocument();
        const startLink = document.querySelector('.hero--info a');
        expect(startLink).toBeInTheDocument();
        expect(startLink.textContent).toMatch(/Start/i);
    });
});
