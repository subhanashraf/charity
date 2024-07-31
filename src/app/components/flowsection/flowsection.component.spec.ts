import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowsectionComponent } from './flowsection.component';

describe('FlowsectionComponent', () => {
  let component: FlowsectionComponent;
  let fixture: ComponentFixture<FlowsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
