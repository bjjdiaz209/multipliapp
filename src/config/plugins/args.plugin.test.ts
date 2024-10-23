
const runComand = async (args: string[]) => {

    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./args.plugin');

    return yarg;

}


describe('Test in args.plugin.ts', () => {

    const originalArgs = process.argv;

    beforeEach(() => {
            
            process.argv = originalArgs;
            jest.resetModules();
    });


    test('should return the base value', async () => {

        const argv = await runComand(['-b', '5']);
         expect(argv).toEqual(expect.objectContaining({
            
          b: 5,
          l: 10,
          s: false,
          n: 'multiplication-table',
          d: 'outputs'  
        }));


    });


    test('should return the limit value', async () => {

        const argv = await runComand(['-b', '8', '-l', '15', '-s', '-n', 'custom-name','-d', 'custom-dir']);
         expect(argv).toEqual(expect.objectContaining({
            
          b: 8,
          l: 15,
          s: true,
          n: 'custom-name',
          d: 'custom-dir'       
        }));        

    });

});