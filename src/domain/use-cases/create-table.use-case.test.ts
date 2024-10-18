import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {

    test('should return a multiplication table', () => {



        const createTableUseCase = new CreateTable();
        const table = createTableUseCase.execute({ base: 2 });
        const rows = table.split('\n').length;


        expect(createTableUseCase).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(10);
    });

     test('should create table with custom values ', () => {
         const createTableUseCase = new CreateTable();

         const options = {
                base: 3,
                limit: 20
         }

         const table = createTableUseCase.execute(options);
            const rows = table.split('\n').length;

            expect( table).toContain('3 x 1 = 3');
            expect( table).toContain('3 x 10 = 30');
            expect( table).toContain('3 x 20 = 60');
            expect(rows).toBe(options.limit);

     } );

}); // 1 