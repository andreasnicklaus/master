import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInstagramLogoComponent } from './not-instagram-logo.component';

describe('NotInstagramLogoComponent', () => {
  let component: NotInstagramLogoComponent;
  let fixture: ComponentFixture<NotInstagramLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotInstagramLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotInstagramLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
