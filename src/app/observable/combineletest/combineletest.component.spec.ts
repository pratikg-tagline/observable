import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineletestComponent } from './combineletest.component';

describe('CombineletestComponent', () => {
  let component: CombineletestComponent;
  let fixture: ComponentFixture<CombineletestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineletestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
