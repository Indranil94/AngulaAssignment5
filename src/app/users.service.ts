import { Injectable } from "@angular/core";

import { CounterService } from './counter.service';

@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    countInactive: number;
    countActive: number;

    constructor(private Counter: CounterService){
        this.countActive = 0;
        this.countInactive = 0;
    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.countInactive++;
        this.Counter.countOperation(this.countInactive,"Active->Inactive")
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.countActive++;
        this.Counter.countOperation(this.countActive,"Inactive->Active")
    }
}