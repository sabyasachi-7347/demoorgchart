import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagemodalPage } from './pagemodal.page';

describe('PagemodalPage', () => {
  let component: PagemodalPage;
  let fixture: ComponentFixture<PagemodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagemodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagemodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
