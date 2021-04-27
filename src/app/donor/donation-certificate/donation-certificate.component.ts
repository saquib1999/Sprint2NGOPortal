import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Subscription } from 'rxjs';
import { HttpDonorService } from 'src/app/services/http-donor.service';
import { IDonation } from 'src/app/models/donation';
import { Router } from '@angular/router';
import { IDonor } from 'src/app/models/donor';
@Component({
  selector: 'app-donation-certificate',
  templateUrl: './donation-certificate.component.html',
  styleUrls: ['./donation-certificate.component.css']
})
export class DonationCertificateComponent implements OnInit {

  title:string='Product List'
  errorMessage:string='';
  sub!: Subscription;
  donor!: IDonation;
  donorDetail!:IDonor
  ngOnInit(): void{
    
    this.sub=this.donorService.getLastReceipt().subscribe({
      next: donor => {
        this.donor = donor;
        console.log(this.donor)

      },
      error: err  => this.errorMessage = err
    })
    this.sub=this.donorService.getDonorDetails().subscribe({
      next: donorDetail => {
        this.donorDetail = donorDetail
        console.log(this.donorDetail)

      },
      error: err  => this.errorMessage = err
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  
  constructor(private donorService: HttpDonorService,private router: Router){}

 
  generatePDF() {
    var data = document.getElementById('contentToConvert') as HTMLCanvasElement ;
    html2canvas(data).then(canvas => {
      console.log(canvas)

      var imgWidth =208;
      var imgHeight = (canvas.height * imgWidth / canvas.width)-10;
      // var imgWidth =1140;
      // var imgHeight = 840;
  
      const contentDataURL = canvas.toDataURL('image/png')
      // window.open(contentDataURL)
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
