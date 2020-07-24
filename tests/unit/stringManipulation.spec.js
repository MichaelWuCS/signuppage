import { upperCaseFirstLetter } from '@/utils/stringManipulation.js';

describe('stringManipulation', () => {
  describe('upperCaseFirstLetter', () => {
    test("should return empty string when parameter is 'nullish'", () => {
      //Arrange
      const parameter1 = null;
      const parameter2 = undefined;

      //Act
      const result1 = upperCaseFirstLetter(parameter1);
      const result2 = upperCaseFirstLetter(parameter2);

      //Assert
      expect(result1).toEqual('');
      expect(result2).toEqual('');
    });
    test('should return a string with its first character uppercased', () => {
      //Arrange
      const parameter1 = 'hello';
      const parameter2 = 'Hello';
      const parameter3 = 'hELLO';

      //Act
      const result1 = upperCaseFirstLetter(parameter1);
      const result2 = upperCaseFirstLetter(parameter2);
      const result3 = upperCaseFirstLetter(parameter3);

      //Assert
      expect(result1).toEqual('Hello');
      expect(result2).toEqual('Hello');
      expect(result3).toEqual('HELLO');
    });
    test('should still function with numbers involved', () => {
      //Arrange
      const parameter1 = '1hello';
      const parameter2 = '123';
      const parameter3 = 'h3llo';

      //Act
      const result1 = upperCaseFirstLetter(parameter1);
      const result2 = upperCaseFirstLetter(parameter2);
      const result3 = upperCaseFirstLetter(parameter3);

      //Assert
      expect(result1).toEqual('1hello');
      expect(result2).toEqual('123');
      expect(result3).toEqual('H3llo');
    });
    test('should still function with special characters involved', () => {
      //Arrange
      const parameter1 = '!@)$@#';
      const parameter2 = 'h)()/~';
      const parameter3 = 'H<>;:';

      //Act
      const result1 = upperCaseFirstLetter(parameter1);
      const result2 = upperCaseFirstLetter(parameter2);
      const result3 = upperCaseFirstLetter(parameter3);

      //Assert
      expect(result1).toEqual('!@)$@#');
      expect(result2).toEqual('H)()/~');
      expect(result3).toEqual('H<>;:');
    });
    test('should function with spaces', () => {
      //Arrange
      const parameter1 = ' h';
      const parameter2 = 'hello hello';
      const parameter3 = ' ';

      //Act
      const result1 = upperCaseFirstLetter(parameter1);
      const result2 = upperCaseFirstLetter(parameter2);
      const result3 = upperCaseFirstLetter(parameter3);

      //Assert
      expect(result1).toEqual(' h');
      expect(result2).toEqual('Hello hello');
      expect(result3).toEqual(' ');
    });
  });
});
