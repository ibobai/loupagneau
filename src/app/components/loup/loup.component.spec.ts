import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoupComponent } from './loup.component';

describe('LoupComponent', () => {
  let component: LoupComponent;
  let fixture: ComponentFixture<LoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
