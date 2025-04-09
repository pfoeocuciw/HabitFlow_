import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Habit Tracker Page (habit_tracker.html)', () => {
    let dom, document;

    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../habit_tracker.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('отображается заголовок привычки и контейнер трекера', () => {
        expect(document.getElementById('habit-title')).toBeInTheDocument();
        expect(document.getElementById('habit-tracker')).toBeInTheDocument();
    });
});
