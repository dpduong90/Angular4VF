import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgenreComponent } from './sgenre.component';

describe('SgenreComponent', () => {
  let component: SgenreComponent;
  let fixture: ComponentFixture<SgenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
