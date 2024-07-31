import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAttactSectionComponent } from './image-attact-section.component';

describe('ImageAttactSectionComponent', () => {
  let component: ImageAttactSectionComponent;
  let fixture: ComponentFixture<ImageAttactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAttactSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageAttactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
