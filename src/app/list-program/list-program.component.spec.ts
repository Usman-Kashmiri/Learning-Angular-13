import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgramComponent } from './list-program.component';

describe('ListProgramComponent', () => {
  let component: ListProgramComponent;
  let fixture: ComponentFixture<ListProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
