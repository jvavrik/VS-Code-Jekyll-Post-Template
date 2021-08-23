// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { generateDateString } from './utilities';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let directoryPath = "";
	if (vscode.workspace.workspaceFolders !== undefined) {
		directoryPath = vscode.workspace.workspaceFolders[0].uri.path;

		//temp hack
		directoryPath = directoryPath.substr(1, directoryPath.length);
	}
	else {
		vscode.window.showErrorMessage("Working folder not found, open a folder an try again");
	}
	const currentDate = new Date();
	const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
	const dateForTitle = generateDateString(currentDate);

	const defaultText = "---\n" +
		"layout: single\n" +
		"title:  \"Article Title\"\n" +
		"date:   " + dateForTitle + " " + currentTime + " -0500\n" +
		"categories: jekyll\n" +
		"author_profile: true\n" +
		"---";

	let newPost = vscode.commands.registerCommand('jekyllpostautotemplate.newpost', () => {
		const newDraft = vscode.Uri.parse('untitled:' + path.join(directoryPath+'\\_posts', dateForTitle + '.md'));
		vscode.workspace.openTextDocument(newDraft).then(document => {
			const edit = new vscode.WorkspaceEdit();
			edit.insert(newDraft, new vscode.Position(0, 0), defaultText);
			return vscode.workspace.applyEdit(edit).then(success => {
				if (success) {
					vscode.window.showTextDocument(document);
				} else {
					vscode.window.showInformationMessage('Error!');
				}
			});
		});
	});

	context.subscriptions.push(newPost);

	let newDraft = vscode.commands.registerCommand('jekyllpostautotemplate.newdraft', () => {
		const newDraft = vscode.Uri.parse('untitled:' + path.join(directoryPath+'\\_drafts', dateForTitle + '.md'));
		vscode.workspace.openTextDocument(newDraft).then(document => {
			const edit = new vscode.WorkspaceEdit();
			edit.insert(newDraft, new vscode.Position(0, 0), defaultText);
			return vscode.workspace.applyEdit(edit).then(success => {
				if (success) {
					vscode.window.showTextDocument(document);
				} else {
					vscode.window.showInformationMessage('Error!');
				}
			});
		});
	});

	context.subscriptions.push(newDraft);
}

// this method is called when your extension is deactivated
export function deactivate() { }
