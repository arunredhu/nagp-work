import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUserFormComponent } from './re-user-form.component';

describe('ReUserFormComponent', () => {
  let component: ReUserFormComponent;
  let fixture: ComponentFixture<ReUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
