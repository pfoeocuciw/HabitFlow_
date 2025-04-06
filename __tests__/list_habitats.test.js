import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('List Habitats Page (list_habitats.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../list_habitats.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице отображается список привычек или сообщение о их отсутствии', () => {
        expect(document.querySelector('.habit-list')).toBeInTheDocument();
    });
});
