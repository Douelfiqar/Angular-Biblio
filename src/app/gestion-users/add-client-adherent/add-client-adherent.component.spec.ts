import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientAdherentComponent } from './add-client-adherent.component';

describe('AddClientAdherentComponent', () => {
  let component: AddClientAdherentComponent;
  let fixture: ComponentFixture<AddClientAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientAdherentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
