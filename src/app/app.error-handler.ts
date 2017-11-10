import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


export class ErrorHandler{
    static handleError(error: Response | any){
        let errorMessenger: string;
        if(error instanceof Response){
            errorMessenger = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        }else{
            errorMessenger = error.toString();
        }
        console.log(errorMessenger);
        return Observable.throw(errorMessenger);
    }
}