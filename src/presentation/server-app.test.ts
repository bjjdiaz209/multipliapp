import { beforeEach } from "node:test";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe('Test in server-app.ts', () => {

    const options ={

        base: 2,
        limit: 10,
        showTable: false,
        fileDestination: 'test-destination',
        fileName: 'test-filename'
    };

     beforeEach(() => {
        jest.clearAllMocks();
     });

    test('should create ServerApp instance', async () => {
      const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
   
   
    });

    test('should run ServerApp with options', async () => {

       // const  logSpy = jest.spyOn(console, 'log');
        //const createTableSpy = jest.spyOn(CreateTable.prototype , 'execute');
        //const saveFileSpy = jest.spyOn(SaveFile.prototype , 'execute');


        

        //ServerApp.run(options);

        //expect(logSpy).toHaveBeenCalledTimes(3);
        //expect(logSpy).toHaveBeenCalledWith('ServerApp running');
        //expect(logSpy).toHaveBeenLastCalledWith('File created successfully!');

        //expect(createTableSpy).toHaveBeenCalledTimes(1);
        //expect(createTableSpy).toHaveBeenCalledWith({base: options.base, limit: options.limit});


        //expect(saveFileSpy).toHaveBeenCalledTimes(1);
        //expect(saveFileSpy).toHaveBeenCalledWith({
          //  fileContent: expect.any(String),
            //fileDestination: options.fileDestination,
            //fileName: options.fileName
        });

       test('should run with values mocked', async () => {

            const logMock = jest.fn();
            const logErrorMock = jest.fn();
            const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
            const saveFileMock = jest.fn().mockReturnValue(true);
 
            console.log = logMock;
            console.error = logErrorMock;
            CreateTable.prototype.execute = createMock;
            SaveFile.prototype.execute = saveFileMock;

            ServerApp.run(options);

            expect(logMock).toHaveBeenCalledWith('ServerApp running');
            expect(createMock).toHaveBeenCalledWith({base: options.base, limit: options.limit});
            expect(saveFileMock).toHaveBeenCalledWith({
                fileContent: '1 x 2 = 2',
                fileDestination: options.fileDestination,
                fileName: options.fileName
            }); 

            //expect(logMock).toHaveBeenCalledWith('File created successfully!');
            expect(logErrorMock).not.toBeCalledWith();


       });

          

    








    

      


});