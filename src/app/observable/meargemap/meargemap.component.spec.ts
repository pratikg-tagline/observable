import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeargemapComponent } from './meargemap.component';

describe('MeargemapComponent', () => {
  let component: MeargemapComponent;
  let fixture: ComponentFixture<MeargemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeargemapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeargemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
