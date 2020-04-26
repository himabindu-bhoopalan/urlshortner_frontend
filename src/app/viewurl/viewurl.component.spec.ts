import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewurlComponent } from './viewurl.component';

describe('ViewurlComponent', () => {
  let component: ViewurlComponent;
  let fixture: ComponentFixture<ViewurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
