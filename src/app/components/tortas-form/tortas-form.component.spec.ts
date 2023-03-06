import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortasFormComponent } from './tortas-form.component';

describe('TortasFormComponent', () => {
  let component: TortasFormComponent;
  let fixture: ComponentFixture<TortasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
