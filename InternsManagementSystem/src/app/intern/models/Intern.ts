import {status}from '../enums/status.enum';
export class Intern{
    
    name : string ;
    address : string ;
    phoneNumber : string;
    email : string;
    collegeName : string; 
    branchName : string; 
    projectName : string;
    purpose : string;
    startDate : Date;
    endDate : Date;
    // status ?: status;
    progress ?: Progress[]=[];
    _id!:string;
    isActive ?:boolean;
    status ?: string;


    
}
export class Progress{
    date : Date;
    work :string; //
}