import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";  //add the validator//
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

	customerList: AngularFireList<any>;


  
  form = new FormGroup({
     $key: new FormControl(null),
     fullName: new FormControl('', Validators.required), //connected to html//
     email: new FormControl('', Validators.email),   //connected to html// checks that the input you put is an email.
     mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),   //connected to html//
     message: new FormControl('')   //connected to html//



         });

  populateForm(customer){
                this.form.setValue(customer);
              }

  constructor(private firebase: AngularFireDatabase) { }

  getCustomers(){
                 this.customerList = this.firebase.list('customers');
                 return this.customerList.snapshotChanges();
         }

  insertCustomer(customer){
                 this.customerList.push({
                         fullName: customer.fullName,
                         email: customer.email,
                         mobile: customer.mobile,
                         message:customer.message
                  });
          }

  updateCustomer(customer){
            this.customerList.update(customer.$key,{
               fullName: customer.fullName,
                email: customer.email,
                mobile: customer.mobile,
                location:customer.location
            });
          }

  deleteCustomer($key: string){
        this.customerList.remove($key);
     
  }


}
