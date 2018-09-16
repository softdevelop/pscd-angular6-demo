import { Module2RoutingModule } from './module2-routing.module';

describe('Module2RoutingModule', () => {
  let module2RoutingModule: Module2RoutingModule;

  beforeEach(() => {
    module2RoutingModule = new Module2RoutingModule();
  });

  it('should create an instance', () => {
    expect(module2RoutingModule).toBeTruthy();
  });
});
