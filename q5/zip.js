
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipFolder(sourceFolder, outputZipFile) {
    const output = fs.createWriteStream(outputZipFile);
    const archive = archiver('zip', {
        zlib: { level: 9 } // Set compression level
    });

    output.on('close', () => {
        console.log(`Archive created: ${outputZipFile} (${archive.pointer()} total bytes)`);
    });

    archive.on('error', (err) => {
        throw err;
    });

    archive.pipe(output);

    archive.directory(sourceFolder, false);

    archive.finalize();
}

const sourceFolder = path.join(__dirname, 'your-folder'); 
const outputZipFile = path.join(__dirname, 'your-folder.zip'); 

zipFolder(sourceFolder, outputZipFile);
