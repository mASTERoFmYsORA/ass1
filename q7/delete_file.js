
const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
    try {
        await unlinkAsync(filePath);
        console.log(`File deleted: ${filePath}`);
    } catch (error) {
        console.error(`Error deleting file: ${error.message}`);
    }
}

const filePath = './abc.txt';
deleteFile(filePath);
