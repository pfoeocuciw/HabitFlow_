import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Main After Registration Page (main_after_registration.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../main_after_registration.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице отображается логотип и навигация', () => {
        expect(document.querySelector('.logo')).toBeInTheDocument();
        expect(document.querySelector('nav')).toBeInTheDocument();
    });
});
