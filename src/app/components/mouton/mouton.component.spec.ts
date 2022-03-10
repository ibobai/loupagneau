import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoutonComponent } from './mouton.component';

describe('MoutonComponent', () => {
  let component: MoutonComponent;
  let fixture: ComponentFixture<MoutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoutonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
