import {status}from '../enums/status.enum';
export class Intern{
    _id!:string;
    name !: string ;
    address !: string ;
    phoneNumber !: string;
    email !: string;
    collegeName !: string; 
    branchName !: string; 
    projectName !: string;
    purpose !: string;
    startDate !: Date;
    endDate !: Date;
    isActive ?:boolean;
    status ?: status;
    progress ?:Progress[]=[];

    
}
class Progress{
    date !: Date;
    work !: string;
}