import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XIconComponent } from './xicon.component';

describe('XIconComponent', () => {
  let component: XIconComponent;
  let fixture: ComponentFixture<XIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
