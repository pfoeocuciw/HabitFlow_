import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

describe('Profile Page (profile.html)', () => {
    let dom, document;
    beforeEach((done) => {
        const filePath = path.resolve(__dirname, '../profile.html');
        const html = fs.readFileSync(filePath, 'utf8');
        dom = new JSDOM(html, { runScripts: "outside-only" });
        document = dom.window.document;
        done();
    });

    test('на странице отображается приветствие и секция привычек', () => {
        expect(document.getElementById('profile-greeting')).toBeInTheDocument();
        expect(document.getElementById('habits-list')).toBeInTheDocument();
    });
});
