import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivimageComponent } from './divimage.component';

describe('DivimageComponent', () => {
  let component: DivimageComponent;
  let fixture: ComponentFixture<DivimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
