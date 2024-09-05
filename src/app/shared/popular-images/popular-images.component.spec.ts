import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularImagesComponent } from './popular-images.component';

describe('PopularImagesComponent', () => {
  let component: PopularImagesComponent;
  let fixture: ComponentFixture<PopularImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
