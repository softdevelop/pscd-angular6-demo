import { Module1RoutingModule } from './module1-routing.module';

describe('Module1RoutingModule', () => {
  let module1RoutingModule: Module1RoutingModule;

  beforeEach(() => {
    module1RoutingModule = new Module1RoutingModule();
  });

  it('should create an instance', () => {
    expect(module1RoutingModule).toBeTruthy();
  });
});
