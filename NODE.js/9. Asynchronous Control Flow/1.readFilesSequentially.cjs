// Example: Reading data from multiple files sequentially using async/await

const fs = require('fs').promises;

async function readFilesSequentially() {
  try {
    // Read file 1
    const data1 = await fs.readFile('file1.txt', 'utf8');
    console.log('Data from file 1:', data1);

    // Read file 2
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log('Data from file 2:', data2);

    // Read file 3
    const data3 = await fs.readFile('file3.txt', 'utf8');
    console.log('Data from file 3:', data3);

    // Perform other operations sequentially...

    console.log('All files read successfully');
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

readFilesSequentially();
