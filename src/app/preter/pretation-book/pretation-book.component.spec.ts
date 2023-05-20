import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretationBookComponent } from './pretation-book.component';

describe('PretationBookComponent', () => {
  let component: PretationBookComponent;
  let fixture: ComponentFixture<PretationBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretationBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretationBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
