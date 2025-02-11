import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string = environment.apiBaseUrl + '/PaymentDetail'
  list: PaymentDetail [] = [];
  formData: PaymentDetail = new PaymentDetail()
  constructor(private http:HttpClient) { }

  //Fetch All the payment details
    refreshList() {
      this.http.get(this.url)
      .subscribe({
        next: res =>{
          this.list = res as PaymentDetail[]
        },
        error: err => { console.log(err)}
      })
    }

    //Insert payment details
    postPaymentDetail(){
     return this.http.post(this.url, this.formData)
    }

    //Update payment details
    putPaymentDetail(){
      return this.http.put(this.url+'/' + this.formData.paymentDetailId, this.formData);
     }

     deletePaymentDeatail(id: number){
      return this.http.delete(this.url+'/' + id);
     }
  
    resetForm(form:NgForm){
      form.form.reset();
      this.formData = new PaymentDetail();
    }
}
