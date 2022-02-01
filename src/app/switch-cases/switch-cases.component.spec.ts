import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCasesComponent } from './switch-cases.component';

describe('SwitchCasesComponent', () => {
  let component: SwitchCasesComponent;
  let fixture: ComponentFixture<SwitchCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
