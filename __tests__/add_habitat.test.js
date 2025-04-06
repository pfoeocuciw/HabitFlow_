import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Add Habit Page (add_habitat.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../add_habitat.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице отображается форма добавления привычки', () => {
        expect(document.querySelector('.form-section')).toBeInTheDocument();
    });

    test('форма содержит поля: habit-name, habit-category, habit-description, habit-frequency, habit-end-date', () => {
        expect(document.getElementById('habit-name')).toBeInTheDocument();
        expect(document.getElementById('habit-category')).toBeInTheDocument();
        expect(document.getElementById('habit-description')).toBeInTheDocument();
        expect(document.getElementById('habit-frequency')).toBeInTheDocument();
        expect(document.getElementById('habit-end-date')).toBeInTheDocument();
    });
});
