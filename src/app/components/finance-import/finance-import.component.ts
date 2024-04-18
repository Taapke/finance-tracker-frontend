import { Component } from '@angular/core';
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {MatIcon} from "@angular/material/icon";
import {FinanceService} from "../../service/finance.service";

@Component({
  selector: 'app-finance-import',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './finance-import.component.html',
  styleUrl: './finance-import.component.scss'
})
export class FinanceImportComponent {
  fileName = '';

  constructor(private http: HttpClient, private financeService: FinanceService) {}

  onFileSelected(event: Event) {

    // @ts-ignore
    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      this.financeService.save(formData).subscribe(result => console.log(result));
    }
  }
}
