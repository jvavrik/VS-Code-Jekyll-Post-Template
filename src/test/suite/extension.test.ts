import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { generateDateString, getTwoDigitMonth } from '../../utilities';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Utility Tests', () => {
		const testDate = new Date("2019-8-16");
		assert.strictEqual("08", getTwoDigitMonth(testDate.getMonth()));
		assert.strictEqual("2019-08-16", generateDateString(testDate));
	});
});
