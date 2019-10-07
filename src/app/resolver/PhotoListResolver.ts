import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { Photo } from '../models/photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private service: ApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;

        return this.service.getPhotos(userName);
    }
}