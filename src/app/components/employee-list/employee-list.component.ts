import { Employee } from "./../../models/employeeModels";
import { EmployeeService } from "./../../services/employee.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public Employee:any;
  public Employees:any=[];
  data:any={};
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
   
    

   // this.Employee = JSON.parse(localStorage.getItem('empData'));
   // this.Employees.push(this.Employee);
   
   // console.log(this.Employee, "cccccccccccccc")
    console.log(this.Employees, "bbbbbbbbb")


    
}



  // getData(message:any){
  //   this.showEmpl = message
  //   console.log(this.showEmpl,"passData")
  // }

  deleteEmp(employee: Employee) {
  //  localStorage.removeItem('empData');
    console.log("id",employee.id)
   
    for(let i = 0; i < this.Employees.length; i++){
      console.log("employees",this.Employees[i].id)
      if (this.Employees[i].id === employee.id) {
          this.Employees.splice(i,1);
          console.log(this.Employees,"after")
      }
  }
    
  }

  editEmp(employee: Employee) {
    this.data = employee
    console.log(this.data,"edit")
  //  localStorage.setItem('empData', 'newData');
  for(let i = 0; i < this.Employees.length; i++){
    console.log("employees",this.Employees[i].id)
    if (this.Employees[i].id === employee.id) {
        this.Employees.splice(i,1);
        console.log(this.Employees,"after")
       
    }
}
  
  }
  showEmpl(val){
console.log(val,'ss');
this.Employees.push(val);
  }

  editEmpl(val){
    this.Employees.push(val);
    console.log(this.Employees,"result")
      }
}
