import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../shared/customer.service";

@Component({
 selector: 'app-customer-list',
 templateUrl: './customer-list.component.html',
 styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 customerArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";

 constructor(private customerService: CustomerService) { }

 ngOnInit() {
         this.customerService.getCustomers().subscribe(
                 (list) => {
                         this.customerArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
 }

 onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.customerService.deleteCustomer($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

   filterCondition(customer){
     return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
      customer.email.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
      customer.mobile.indexOf(this.searchText) != -1 
   }

}
