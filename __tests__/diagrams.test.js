import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Diagrams Page (diagrams.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../diagrams.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        dom.window.addEventListener('load', done);
    });

    test('отображается заголовок для выбора привычки для диаграммы', () => {
        const heading = document.querySelector('.container_2 h1');
        expect(heading.textContent).toMatch(/Choose one habit/i);
    });

    test('на странице присутствуют элементы для диаграмм и выбора привычек', () => {
        expect(document.querySelector('.diagrams-content')).toBeInTheDocument();
        expect(document.querySelector('.habit-selection')).toBeInTheDocument();
    });
});
