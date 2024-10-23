
import { SaveFile } from './save-file.use-case';
import fs from 'fs';

describe('SaveFileUseCase', () => {
    
  const customOptions = { 
    fileContent: 'custom content',
    fileDestination: 'custom-outputs/file-destination',
    fileName: 'custom-table-name',
}
    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(() => 
    {
      const outputsExists = fs.existsSync('outputs');
      if(outputsExists) fs.rmSync('outputs', { recursive: true });

      const customOutputsExists = fs.existsSync(customOptions.fileDestination);
      if(customOutputsExists) fs.rmSync(customOptions.fileDestination, { recursive: true });
});


  
  test('should save a file', () => {

    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
        fileContent: 'test content'
    }

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
    


    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

   test('should save a file with custom name', () => {
        
    const saveFile = new SaveFile();
   
        const result = saveFile.execute(customOptions);
        const fileExists = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, {encoding: 'utf-8'});

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);

   });

   test('should return false if directory could not be crated', () => {
        
     const saveFile = new SaveFile();
     const  mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation((

     ) => { throw new Error('Error creating directory') });
     
      const result = saveFile.execute(customOptions);
      expect(result).toBe(false);

      mkdirSpy.mockRestore();

   });

   test('should return false if file could not be written', () => {
        
    const saveFile = new SaveFile();
    const  writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation((

    ) => { throw new Error('Error writing file') });
    
     const result = saveFile.execute({fileContent: 'hola'});
      expect(result).toBe(false);

      writeFileSyncSpy.mockRestore();

  });


}); // 1