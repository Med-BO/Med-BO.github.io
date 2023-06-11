import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsammComponent } from './isamm.component';

describe('IsammComponent', () => {
  let component: IsammComponent;
  let fixture: ComponentFixture<IsammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsammComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
