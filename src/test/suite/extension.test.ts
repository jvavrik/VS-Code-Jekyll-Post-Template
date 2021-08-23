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
		assert.strictEqual(getTwoDigitMonth(testDate.getMonth()),"08");
		assert.strictEqual(generateDateString(testDate), "2019-08-16");
	});

	test('Extension should exist', () => {
		const extension = vscode.extensions.getExtension('JV.JekyllPostTemplate');
		assert.ok(extension);
	});

	test('Extension should register two commands', () => {
		vscode.commands.getCommands(true)
		  .then(commands => commands.filter(command => command.startsWith('jekyllposttemplate')))
		  .then(commands => {
			assert.strictEqual(commands.length === 2, true);
		  });
	  });
});
