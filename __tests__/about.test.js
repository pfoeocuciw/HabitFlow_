import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('About Page (about.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../about.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице отображается заголовок "Nice to meet you!"', () => {
        const heading = document.querySelector('.about_container h1');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toMatch(/Nice to meet you!/i);
    });
});
