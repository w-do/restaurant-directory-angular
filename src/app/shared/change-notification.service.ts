import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChangeNotificationService {
    private change$: BehaviorSubject<any>;

    constructor() {
        this.change$ = new BehaviorSubject(null);
    }

    getChange(): Observable<any> {
        return this.change$.asObservable();
    }

    notify() {
        this.change$.next(true);
    }
}
