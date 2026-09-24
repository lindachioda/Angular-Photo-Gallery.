import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe( //la formula catch/throw per interceptor
    catchError((error: HttpErrorResponse)=> {

      if(error.status === 404) {
        alert("Not found")
        console.log("Not found")
      }

       if(error.status === 401) {
        alert("Not authorized")
        console.log("Not authorized")
      }
      return throwError(()=> error)

    })
  );

};
