const fs = require('fs');
const path = require('path');

// Relative path to the folder
const folderName = './folder';

/**
 * Create a new folder.
 * @param {string} folderName - The name of the folder to create.
 */

function createFolder(folderName) {
    const fs = require('fs');

    fs.mkdir(folderName, (err) => {
        if (err) {
            console.error('Error creating folder:', err);
            return;
        }
        console.log('Folder created successfully');
    });
} 

/*
const folderName = './folder';
createFolder(folderName);
*/

/**
 * Create a file and write an object to it.
 * @param {string} folderName - The name of the folder where the file will be created.
 * @param {string} fileName - The name of the file to create.
 * @param {Object} objectData - The object to write to the file.
 */
function createFileWithObject(folderName, fileName, objectData) {
    const fs = require('fs');
    const path = require('path');

    const jsonString = JSON.stringify(objectData);
    const filePath = path.join(folderName, fileName);

    fs.writeFile(filePath, jsonString, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        } 
        console.log('File Uploaded Successfully');
        console.log('Object written to file successfully');
    });
}

/*
const folderName = './folder';
const fileName = 'example.json';
const myObject = {};
createFileWithObject(folderName, fileName, myObject);
*/


/**
 * Read the contents of the folder.
 * @param {string} folderName - The name of the folder to read.
 */
function readFolderContents(folderName) {
    const fs = require('fs');

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
} 

/*const folderName = './folder';
readFolderContents(folderName);*/


//Add the object in the file 
/**
 * Synchronously appends an object to a JSON file.
 * @param {string} filePath - The path to the JSON file.
 * @param {Object} objectData - The object to append to the JSON file.
 */

function appendObjectToJSONFileSync(filePath, objectData) {
    try {
        // Read existing data from JSON file
        const data = fs.readFileSync(filePath, 'utf8');
        let jsonData;

        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            // If the file is empty or not valid JSON, initialize an empty array
            jsonData = [];
        }

        // If jsonData is not an array, initialize it as an empty array
        if (!Array.isArray(jsonData)) {
            jsonData = [];
        }

        // Check if an object with the same emp_id already exists
        const existingObject = jsonData.find(obj => obj.emp_id === objectData.emp_id);
        if (existingObject) {
            console.log(`An object with emp_id ${objectData.emp_id} already exists.`);
            return;
        }

        // Append the new object to the existing data
        jsonData.push(objectData);

        // Write the updated data back to the JSON file
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        console.log('Object appended to JSON file successfully.');
    } catch (err) {
        console.error('Error appending object to JSON file:', err);
    }
}

const newObject = {
    emp_id: 1,
    name: 'sakshi',
    age: 20,
    city: 'Hyderabad',
};

const filePath = path.join(folderName, fileName);

// Call the function to append the new object to the JSON file
appendObjectToJSONFileSync(filePath, newObject);


/**
 * Read the contents of the file.
 * @param {string} filePath - The path to the file to read.
 */
function readFileContents(filePath) {
    const fs = require('fs');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
}
 
/*const filePath = './folder/example.json';
readFileContents(filePath);*/




/**
 * Read a specific object from the file based on employee ID.
 * @param {string} filePath - The path to the JSON file.
 * @param {number} empId - The employee ID to search for.
 */
function readObjectByEmpId(filePath, empId) {
    const fs = require('fs');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            if (!Array.isArray(jsonData)) {
                console.error('Data read from file is not in expected format (an array):', jsonData);
                return;
            }

            function displayDetailsByEmpId(empId) {
                const foundObject = jsonData.find(obj => obj.emp_id === empId);
                if (foundObject) {
                    console.log(`Name: ${foundObject.name}, City: ${foundObject.city}`);
                } else {
                    console.log(`Employee with ID ${empId} not found.`);
                }
            }

            displayDetailsByEmpId(empId);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}

/*const filePath = './folder/example.json';
const empId = 1;
readObjectByEmpId(filePath, empId);*/


/**
 * Update the object in the file.
 * @param {string} filePath - The path to the JSON file.
 * @param {number} empId - The employee ID to update.
 * @param {string} newName - The new name to update.
 */
function updateNameByEmpId(filePath, empId, newName) {
    const fs = require('fs');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            if (!Array.isArray(jsonData)) {
                console.error('Data read from file is not in expected format (an array):', jsonData);
                return;
            }

            const foundIndex = jsonData.findIndex(obj => obj.emp_id === empId);
            if (foundIndex !== -1) {
                // Update the name property of the found object
                jsonData[foundIndex].name = newName;

                // Write the updated JSON data back to the file
                fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error('Error writing file:', err);
                        return;
                    }
                    console.log(`Name updated successfully for Employee ID ${empId}`);
                });
            } else {
                console.log(`Employee with ID ${empId} not found.`);
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}

/*const filePath = './folder/example.json';
const empId = 1;
const newName = 'Alice';
updateNameByEmpId(filePath, empId, newName); 
*/

  
/**
 * Delete the particular object from the file based on employee ID.
 * @param {string} filePath - The path to the JSON file.
 * @param {number} empId - The employee ID to delete.
 */
function deleteObjectByEmpId(filePath, empId) {
    const fs = require('fs');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            let jsonData = JSON.parse(data);

            if (!Array.isArray(jsonData)) {
                console.error('Data read from file is not in expected format (an array):', jsonData);
                return;
            }

            const filteredData = jsonData.filter(obj => obj.emp_id !== empId);

            if (filteredData.length !== jsonData.length) {
                // If any object was removed
                fs.writeFile(filePath, JSON.stringify(filteredData, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error('Error writing file:', err);
                        return;
                    }
                    console.log(`Object with Employee ID ${empId} deleted successfully.`);
                });
            } else {
                console.log(`Employee with ID ${empId} not found.`);
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}

/*const filePath = './folder/example.json';
const empId = 2;
deleteObjectByEmpId(filePath, empId);
*/


/**
 * Rename the file.
 * @param {string} folderName - The name of the folder containing the file.
 * @param {string} oldFileName - The current name of the file.
 * @param {string} newFileName - The new name for the file.
 */
function renameFile(folderName, oldFileName, newFileName) {
    const fs = require('fs');
    const path = require('path');

    const oldFilePath = path.join(folderName, oldFileName);
    const newFilePath = path.join(folderName, newFileName);

    fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
            console.error('Error renaming file:', err);
            return;
        }
        console.log('File renamed successfully');
    });
}

/*
const folderName = './folder';
const oldFileName = 'example.json';
const newFileName = 'exa.json';

renameFile(folderName, oldFileName, newFileName);
*/


/**
 * Delete the file.
 * @param {string} folderName - The name of the folder containing the file.
 * @param {string} fileName - The name of the file to delete.
 */
function deleteFile(folderName, fileName) {
    const fs = require('fs');
    const path = require('path');

    const filePath = path.join(folderName, fileName);

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return;
        }
        console.log('File deleted successfully');
    });
}

/*
const folderName = './folder';
const fileName = 'exa.json';
deleteFile(folderName, fileName);
*/

/**
 * Delete the folder.
 * @param {string} folderName - The name of the folder to delete.
 */
function deleteFolder(folderName) {
    const fs = require('fs');

    fs.rmdir(folderName, { recursive: true }, (err) => {
        if (err) {
            console.error('Error deleting folder:', err);
            return;
        }
        console.log('Folder deleted successfully');
    });
}

/*
const folderName = './folder';
deleteFolder(folderName);
*/




  
