/**
 * This script demonstrates file system operations such as creating folders, creating and modifying files, renaming files and folders,
 * reading file content, and deleting files and folders.
 */

const fs = require('fs'); // Importing the Node.js file system module
const path = require('path'); // Importing the Node.js path module

/**
 * Creates a new folder.
 * @param {string} folderName - The name of the folder to be created.
 */
fs.mkdir('folder', (err) => {
  if (err) {
    console.error(err); // Log any errors
    return;
  }
  console.log('Folder created successfully');
}); 

/**
 * Renames a folder.
 * @param {string} oldFolderName - The current name of the folder.
 * @param {string} newFolderName - The new name for the folder.
 */
function renameFolder(oldFolderName, newFolderName) {
    try {
        fs.renameSync(oldFolderName, newFolderName); // Synchronously rename the folder
        console.log('Folder renamed successfully');
    } catch (err) {
        console.error('Error renaming folder:', err);
    }
}

// Example usage:
const oldFolderName = './folder'; // Old folder name
const newFolderName = './new_folder'; // New folder name
renameFolder(oldFolderName, newFolderName);

/**
 * Creates a new file with JSON data.
 * @param {string} folderName - The relative path to the folder.
 * @param {string} fileName - The name of the file to be created.
 * @param {object} data - The JSON data to be written into the file.
 */
const folderName = './folder'; // Relative path to the folder
const fileName = 'exa.txt'; // Name of the file
const myObject = { 
    emp_id: 1,
    name: 'John',
    age: 30,
    city: 'Nagpur',
};
const jsonString = JSON.stringify(myObject);
const filePath = path.join(folderName, fileName);

fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    } 
    console.log('File Uploaded Successfully');
    console.log('Object written to file successfully');
});

/**
 * Reads the contents of a folder.
 * @param {string} folderName - The name of the folder to be read.
 */
fs.readdir(folderName, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    console.log('Files inside the folder:');
    files.forEach(file => {
        console.log(file);
    });
});

/**
 * Reads the contents of a file.
 * @param {string} filePath - The path to the file.
 */
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

/**
 * Updates the content of a file.
 * @param {string} filePath - The path to the file.
 */
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        jsonData.name = 'Alice';
        const updatedJsonString = JSON.stringify(jsonData);
        fs.writeFile(filePath, updatedJsonString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('Name updated successfully');
            console.log('Updated Object:', jsonData);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

/**
 * Renames a file.
 * @param {string} oldFileName - The current name of the file.
 * @param {string} newFileName - The new name for the file.
 */
const oldFileName = 'exa.txt'; // Old name of the file
const newFileName = 'example.txt'; // New name of the file
const oldFilePath = path.join(folderName, oldFileName);
const newFilePath = path.join(folderName, newFileName);

fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});

/**
 * Deletes the content of a file.
 * @param {string} filePath - The path to the file.
 */
fs.writeFile(filePath, '', 'utf8', (err) => {
    if (err) {
        console.error('Error deleting file content:', err);
        return;
    }
    console.log('Content of the file deleted successfully');
});

/**
 * Deletes a folder.
 * @param {string} folderName - The name of the folder to be deleted.
 */
fs.rmdir(folderName, { recursive: true }, (err) => {
    if (err) {
        console.error('Error deleting folder:', err);
        return;
    }
    console.log('Folder deleted successfully');
});
