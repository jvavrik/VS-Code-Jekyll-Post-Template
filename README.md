# Jekyll Post Template README

JPT was created a a quick way to generate a post in a Jekyll workspace easily, autofilling header information for the new post file and auto-saving it to either _posts or _drafts. 

## Features

To create a new draft that will be saved in the '_drafts' folder, simply open the Command Palette (**`Ctrl+Shift+P`**) and type **`New Draft`** followed by **`Enter`**

To create a new post that will be saved in the '_posts' folder, simple ipen the Command Palette (**`Ctrl+Shift+P`**) and type **`New Post`** followed by **`Enter`**

Both of these will create a new filed named **MM-dd-YY**, and created a pre-filled date and time stamp in the header of the post, along with other pre-filled data.

Save the file that was created and it will be automatically saved to the correct folder. You'll need to rename it to include the proper title.

## Using JPT Locally

1. Clone this repo
2. Install vsce if not already installed `npm i -g vsce`
3. Run `vsce package`
4. A file called `jekyllposttemplate-{current.version.number}.vsix` should be in  your root workspace folder.
5. In VS Code, select Extensions (**`Ctrl+Shift+X`**)
6. Expand the ellipsis on the top right, and select **Install from VSIX...**
7. Find your VSIX file, double click.
8. Enjoy.

## Known Issues & To-dos

- JPT currently only works with an active workspace in VC Code.
- There doesn't seem to be a way to add arguments to Command Palette commands, this would be perfect for creating a template with a title, since there is currently no way of auto-seeding a title.

## Release Notes

Initial Release.

### 0.0.1

Initial release. Local use only.

**Enjoy!**
