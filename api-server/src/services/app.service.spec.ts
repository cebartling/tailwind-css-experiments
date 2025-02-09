import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should return Hello World message', () => {
    const result = appService.getHello();
    expect(result).toBe('Hello World!');
  });

  it('should return a non-empty string', () => {
    const result = appService.getHello();
    expect(result).not.toBe('');
  });

  it('should return a string containing Hello', () => {
    const result = appService.getHello();
    expect(result).toContain('Hello');
  });
});
