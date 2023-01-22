import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModComponent } from './contact-mod.component';

describe('ContactModComponent', () => {
  let component: ContactModComponent;
  let fixture: ComponentFixture<ContactModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
