import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpDonorService } from 'src/app/services/http-donor.service';
import { Subscription } from 'rxjs';
import { IDonation } from 'src/app/models/donation';
import { Router } from '@angular/router';
@Component({
  //selector: 'app-payment-receipt',
  templateUrl: './payment-receipt.component.html',
  styleUrls: ['./payment-receipt.component.css']
})
export class PaymentReceiptComponent implements OnInit {

  constructor(private donorService: HttpDonorService,private router: Router){}
  errorMessage:string='';
  sub!: Subscription;
  receipt!: IDonation;
  ngOnInit(): void{
    this.sub=this.donorService.getLastReceipt().subscribe({
      next: receipt => {
        this.receipt = receipt;
        console.log(this.receipt)

      },
      error: err  => this.errorMessage = err
    })
  }
  generatePDF() {
    var data = document.getElementById('contentToConvert') as HTMLCanvasElement ;
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');
    });
  }
  
  back(){
    this.router.navigate(['/Donate-Now']);
  }
}
