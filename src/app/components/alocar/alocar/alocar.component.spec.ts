import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlocarComponent } from './alocar.component';

describe('AlocarComponent', () => {
  let component: AlocarComponent;
  let fixture: ComponentFixture<AlocarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlocarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
