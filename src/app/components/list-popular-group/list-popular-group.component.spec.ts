import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopularGroupComponent } from './list-popular-group.component';

describe('ListPopularGroupComponent', () => {
  let component: ListPopularGroupComponent;
  let fixture: ComponentFixture<ListPopularGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPopularGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPopularGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
