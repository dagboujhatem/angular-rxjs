import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseExempleComponent } from './promise-exemple.component';

describe('PromiseExempleComponent', () => {
  let component: PromiseExempleComponent;
  let fixture: ComponentFixture<PromiseExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
