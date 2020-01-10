import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundErrorsComponent } from './page-not-found-errors.component';

describe('PageNotFoundErrorsComponent', () => {
  let component: PageNotFoundErrorsComponent;
  let fixture: ComponentFixture<PageNotFoundErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
