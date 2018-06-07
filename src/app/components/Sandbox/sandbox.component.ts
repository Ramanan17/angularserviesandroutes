import {Component} from '@angular/core';
import {Customer} from './Customer';
import {DataService} from '../../services/data.service'

@Component({
    selector:'sandbox',
    templateUrl:'./Sandbox.component.html',
   

})

export class SandboxComponent{
   users={
       name:'',
       email:'',
       phone:''

   }
    onSubmit({value,valid}){
        if(valid)
        {
            console.log(value)
        }
        else{
            console.log('Form is invalid')
        }
     

   }
}
