import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  //selector: 'app-donation-certificate',
  templateUrl: './donation-certificate.component.html',
  styleUrls: ['./donation-certificate.component.css']
})
export class DonationCertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'html-to-pdf';
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
}