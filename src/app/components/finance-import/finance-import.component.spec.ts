import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceImportComponent } from './finance-import.component';

describe('FinanceImportComponent', () => {
  let component: FinanceImportComponent;
  let fixture: ComponentFixture<FinanceImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceImportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
