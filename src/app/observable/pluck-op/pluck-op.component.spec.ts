import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckOpComponent } from './pluck-op.component';

describe('PluckOpComponent', () => {
  let component: PluckOpComponent;
  let fixture: ComponentFixture<PluckOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluckOpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluckOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
