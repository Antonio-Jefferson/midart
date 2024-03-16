import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavegationComponent } from './side-navegation.component';

describe('SideNavegationComponent', () => {
  let component: SideNavegationComponent;
  let fixture: ComponentFixture<SideNavegationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavegationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
