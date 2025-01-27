import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCausesComponent } from './latest-causes.component';

describe('LatestCausesComponent', () => {
  let component: LatestCausesComponent;
  let fixture: ComponentFixture<LatestCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestCausesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
