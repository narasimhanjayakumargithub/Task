async function readFilesInParallel() {
  try {
    const [data1, data2, data3] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8'),
      fs.readFile('file3.txt', 'utf8')
    ]);

    console.log('Data from file 1:', data1);
    console.log('Data from file 2:', data2);
    console.log('Data from file 3:', data3);

    console.log('All files read successfully in parallel');
  } catch (error) {
    console.error('Error reading files in parallel:', error);
  }
}

readFilesInParallel();
