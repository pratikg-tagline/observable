import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmergeComponent } from './concatmerge.component';

describe('ConcatmergeComponent', () => {
  let component: ConcatmergeComponent;
  let fixture: ComponentFixture<ConcatmergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmergeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
