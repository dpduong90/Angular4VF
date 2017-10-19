import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestvideoService } from '../../../services/suggestvideo.service';
import { SuggestvideoComponent } from './suggestvideo.component';
import { HttpParams, HttpClient } from '@angular/common/http';
describe('SuggestvideoComponent', () => {
  let component: SuggestvideoComponent;
  let fixture: ComponentFixture<SuggestvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestvideoComponent ],
      providers: [SuggestvideoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
