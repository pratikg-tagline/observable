import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatmapnotificationComponent } from './concatmapnotification.component';

describe('ConcatmapnotificationComponent', () => {
  let component: ConcatmapnotificationComponent;
  let fixture: ComponentFixture<ConcatmapnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatmapnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatmapnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
