import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchannelComponent } from './schannel.component';

describe('SchannelComponent', () => {
  let component: SchannelComponent;
  let fixture: ComponentFixture<SchannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
