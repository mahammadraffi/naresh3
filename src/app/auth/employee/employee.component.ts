import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
users=[
  {
    name:"rafi",
    age:23,
    company:"google",
    salary:100000
},
{
  name:"naresh",
  age:24,
  company:"google",
  salary:10000
},
{
  name:"ramu",
  age:22,
  company:"google",
  salary:100000
},
{
  name:"prashanth",
  age:23,
  company:"ibm",
  salary:10000
},
{
  name:"pavan",
  age:23,
  company:"tcs",
  salary:13000
},
{
  name:"sai",
  age:23,
  company:"test-yantra",
  salary:100000
},
{
  name:"shasi",
  age:23,
  company:"call center",
  salary:12000
},
{
  name:"dileep",
  age:23,
  company:"contruction",
  salary:20000
},
{
  name:"naven",
  age:21,
  company:"KIA",
  salary:13000
},
{
  name:"rafiSR",
  age:20,
  company:"HOME",
  salary:0
}
];
  constructor() { }

  ngOnInit() {
  }

}
