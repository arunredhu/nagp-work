import { LengthValidatorPipe } from './length-validator.pipe';

describe('LengthValidatorPipe', () => {
  it('create an instance', () => {
    const pipe = new LengthValidatorPipe();
    expect(pipe).toBeTruthy();
  });
});
