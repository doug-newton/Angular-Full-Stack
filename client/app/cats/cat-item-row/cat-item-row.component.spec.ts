import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatItemRowComponent } from './cat-item-row.component';

describe('CatItemRowComponent', () => {
  let component: CatItemRowComponent;
  let fixture: ComponentFixture<CatItemRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatItemRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
