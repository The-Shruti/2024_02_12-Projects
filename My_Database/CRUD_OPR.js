//Create a new folder

const fs = require('fs');
const path = require('path');

fs.mkdir('folder', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Folder created successfully');
}); 
 

//Rename the Folder

/*function renameFolder(oldFolderName, newFolderName) {
    try {
        fs.renameSync(oldFolderName, newFolderName);
        console.log('Folder renamed successfully');
    } catch (err) {
        console.error('Error renaming folder:', err);
    }
}

const oldFolderName = './folder'; // Old folder name
const newFolderName = './new_folder'; // New folder name

renameFolder(oldFolderName, newFolderName);*/


//create a File
const folderName = './folder'; // Relative path to the folder
const fileName = 'exa.txt'; // Name of the file  


// Create the object
const myObject = { 
    emp_id: 1,
    name: 'John',
    age: 30,
    city: 'Nagpur',
};

// Convert the object to a JSON string
const jsonString = JSON.stringify(myObject);

const filePath = path.join(folderName, fileName); // Join folderName and fileName to create the full path

// Write the JSON string to the text file
fs.writeFile(filePath, jsonString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    } 
    console.log('File Uploaded Successfully');
    console.log('Object written to file successfully');
}); 

// Read the contents of the folder
fs.readdir(folderName, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // Log the filenames to the terminal        
    console.log('Files inside the folder:');
    files.forEach(file => {
        console.log(file);
    });
}); 

// Read the contents of the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
}); 

//Read the specific Object 

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        if (typeof jsonData !== 'object' || Array.isArray(jsonData)) {
            console.error('Data read from file is not in expected format (an object):', jsonData);
            return;
        }

        // Function to display name and city by emp_id
        function displayDetailsByEmpId(empId) {
            // Check if emp_id matches
            if (jsonData.emp_id === empId) {
                console.log(`Name: ${jsonData.name}, City: ${jsonData.city}`);
            } else {
                console.log(`Employee with ID ${empId} not found.`);
            }
        }

        // Example: Display name and city of object with emp_id '1'
        const exampleEmpId = 1; // Assuming emp_id is a number
        displayDetailsByEmpId(exampleEmpId);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});  


// Update the line(.txt file) object
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Update the name property from "John" to "Alice"
        jsonData.name = 'Alice';

        // Convert the updated object back to JSON string
        const updatedJsonString = JSON.stringify(jsonData);

        // Write the updated JSON string back to the file
        fs.writeFile(filePath, updatedJsonString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('Name updated successfully');

            // Display the updated object
            console.log('Updated Object:', jsonData);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});  


//Update the File 

const oldFileName = 'exa.txt'; // Old name of the file
const newFileName = 'example.txt'; // New name of the file

const oldFilePath = path.join(folderName, oldFileName); // Old file path
const newFilePath = path.join(folderName, newFileName); // New file path

// Rename the file
fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully');
});


//Delete its content(Object)
fs.writeFile(filePath, '', 'utf8', (err) => {
    if (err) {
        console.error('Error deleting file content:', err);
        return;
    }
    console.log('Content of the file deleted successfully');
});   


// Delete the file
/*fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});  */ 

//Delete a folder 
/*fs.rmdir(folderName, { recursive: true }, (err) => {
    if (err) {
        console.error('Error deleting folder:', err);
        return;
    }
    console.log('Folder deleted successfully');
});*/















