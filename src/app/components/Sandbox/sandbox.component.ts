import {Component} from '@angular/core';
import {Customer} from './Customer';
import {DataService} from '../../services/data.service'

@Component({
    selector:'sandbox',
    templateUrl:'./Sandbox.component.html',
   

})

export class SandboxComponent{
    users:any[];
    user = {
        name:'',
        email:'',
        phone:''
    }

    constructor(public dataService:DataService)
    {
        this.dataService.getUsers().subscribe(users => {
            //console.log(users);
            this.users = users;
        });
    }

    onSubmit(){
        this.dataService.addUsers(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        });
    }
    onDelete(id)
    {
        this.dataService.deleteUsers(id).subscribe(res =>{
            for(let i=0;i<this.users.length;i++)
            {
                if(this.users[i].id==id)
                {
                    this.users.splice(id,1)
                }

            }

        });
       // console.log(id)

    }
}
