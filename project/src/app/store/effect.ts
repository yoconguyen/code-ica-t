import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { GET_API } from './reducer';

import {getmovie, getmovieaction, getmoviesussec} from './action'
import { Store } from '@ngrx/store';
import { ServicemoviService } from '../serviece/servicemovi.service';
@Injectable()
export class Effects {
 
  constructor(private actions$: Actions,
    private servie:ServicemoviService,
    private store:Store<any>
    ) {}

 
  movie$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(getmovieaction),
      mergeMap(()=>{
        return this.servie.getapi().pipe(
          map((movies) => {
       
         return this.store.dispatch({type:getmoviesussec,
          payload:movies
          }) 
          })
        )
        
      })

    )
  },{dispatch:false}) 
}
