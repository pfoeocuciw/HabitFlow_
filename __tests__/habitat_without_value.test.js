import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Habitat Without Value Page (habitat_without_value.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../habitat_without_value.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице отображается сообщение о том, что привычек нет', () => {
        const message = document.querySelector('.container_2 h1');
        expect(message).toBeInTheDocument();
        expect(message.textContent).toMatch(/You don't have any habits/i);
    });
});
