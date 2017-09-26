import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconsExampleComponent } from './menu-icons-example.component';

describe('MenuIconsExampleComponent', () => {
  let component: MenuIconsExampleComponent;
  let fixture: ComponentFixture<MenuIconsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIconsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIconsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
