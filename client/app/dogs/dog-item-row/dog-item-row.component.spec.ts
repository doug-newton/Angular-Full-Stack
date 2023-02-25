import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogItemRowComponent } from './dog-item-row.component';

describe('DogItemRowComponent', () => {
  let component: DogItemRowComponent;
  let fixture: ComponentFixture<DogItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogItemRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
