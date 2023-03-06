import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortasListComponent } from './tortas-list.component';

describe('TortasListComponent', () => {
  let component: TortasListComponent;
  let fixture: ComponentFixture<TortasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TortasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
