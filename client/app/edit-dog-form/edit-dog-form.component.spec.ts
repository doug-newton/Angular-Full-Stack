import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDogFormComponent } from './edit-dog-form.component';

describe('EditDogFormComponent', () => {
  let component: EditDogFormComponent;
  let fixture: ComponentFixture<EditDogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
