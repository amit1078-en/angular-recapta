import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcthaPageComponent } from './capctha-page.component';

describe('CapcthaPageComponent', () => {
  let component: CapcthaPageComponent;
  let fixture: ComponentFixture<CapcthaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapcthaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapcthaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
