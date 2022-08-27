export class Employee{
    empId:number;
    empName:string;
    empSal:number;
    empDep:string;
    constructor( empId:number,empName:string,empSal:number,empDep:string){
        this.empId=empId;
        this.empName=empName;
        this.empSal=empSal;
        this.empDep=empDep;
    }
}