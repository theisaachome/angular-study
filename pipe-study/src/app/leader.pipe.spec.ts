import { LeaderPipe } from './leader.pipe';

describe('LeaderPipe', () => {
  it('create an instance', () => {
    const pipe = new LeaderPipe();
    expect(pipe).toBeTruthy();
  });
});
