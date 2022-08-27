import { Component } from '@angular/core';
import { Employee } from './Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabAssignmentAngular2.1';
  employees:Employee[]=[  {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
  {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
  {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"}];
  employ:number=0;
  del:boolean=false;
  insert:boolean=false;
  update:boolean=false;
  valId:any;
  valName:any;
  valSal:any;
  valDep:any;
  clickedonupdate:boolean=false;
  onClick(result:any){
    if(this.clickedonupdate)
    {
    this.clickedonupdate=false;
    if(result.ID)
    this.employees[this.employ].empId=result.ID;
    if(result.Name)
    this.employees[this.employ].empName=result.Name;
    if(result.Salary)
    this.employees[this.employ].empSal=result.Salary;
    if(result.Department)
    this.employees[this.employ].empDep=result.Department;
    this.del=false;
    this.insert=false;
    this.update=true;}
  }
  Update(k:number){
    this.employ=k;
    this.clickedonupdate=true;
    this.valId=this.employees[k].empId;
    this.valName=this.employees[k].empName;
    this.valSal=this.employees[k].empSal;
    this.valDep=this.employees[k].empDep;
  }
 Delete(k:number) {
  this.employees.splice(k, 1);
  this.insert=false;
  this.update=false;
  this.del=true;
}
    
  onClickSubmit(result:any) {
    this.employees.push(new Employee( result.ID,result.Name,result.Salary,result.Department));
    this.update=false;
    this.del=false;
    this.insert=true;
}
}
