import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService,  private toastr:ToastrService){
  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail){
    this.service.formData = Object.assign({}, selectedRecord) ;
  }

  onDelete(id: number){
    if(confirm("Are you sure to delete this record?"))
      this.service.deletePaymentDeatail(id)
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[];
          this.toastr.error('Card Deleted sucessfully','Payment Detail Register');
          // console.log(res);
        },
        error: err =>{ console.log(err) }
      });
  }
}
