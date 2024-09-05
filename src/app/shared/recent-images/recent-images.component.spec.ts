import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentImagesComponent } from './recent-images.component';

describe('RecentImagesComponent', () => {
  let component: RecentImagesComponent;
  let fixture: ComponentFixture<RecentImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
