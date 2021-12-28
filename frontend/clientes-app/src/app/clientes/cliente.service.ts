import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable()
export class ClienteService {

  private urlEndPoint:string = 'api/clientes';

  //Se crea atributo con cabeceras http para la peticion en metodo post
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpClient: HttpClient,
    private router:Router) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

  create(cliente:Cliente): Observable<any>{
    return this.httpClient.post<any>(this.urlEndPoint,cliente, {headers:this.httpHeaders}).pipe(
      catchError(e=>{
        this.router.navigate(['/clientes']);
        swal.fire('Erroe al crear',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  getCliente(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e=>{
        this.router.navigate(['/clientes']);
        swal.fire('Erroe al editar',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  update(cliente:Cliente):Observable<Cliente>{
    return this.httpClient.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`,cliente,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        this.router.navigate(['/clientes']);
        swal.fire('Erroe al editar',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  delete(id:number): Observable<Cliente>{
    return this.httpClient.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        this.router.navigate(['/clientes']);
        swal.fire('Erroe al crear',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
}
 