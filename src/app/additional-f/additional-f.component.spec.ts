import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFComponent } from './additional-f.component';

describe('AdditionalFComponent', () => {
  let component: AdditionalFComponent;
  let fixture: ComponentFixture<AdditionalFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
