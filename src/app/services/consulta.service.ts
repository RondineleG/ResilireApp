import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Consulta } from '../../models/consulta';

@Injectable()
export class ConsultaService extends BaseService {

    consulta: Consulta = new Consulta();

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Consulta[]> {
        return this.http
            .get<Consulta[]>(this.UrlServiceV1 + "consultas")
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Consulta> {
        return this.http
            .get<Consulta>(this.UrlServiceV1 + "consultas/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    novoConsulta(consulta: Consulta): Observable<Consulta> {
        return this.http
            .post(this.UrlServiceV1 + "consultas", consulta, this.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarConsulta(consulta: Consulta): Observable<Consulta> {
        return this.http
            .put(this.UrlServiceV1 + "consultas/" + consulta.idConsulta, consulta, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirConsulta(id: string): Observable<Consulta> {
        return this.http
            .delete(this.UrlServiceV1 + "consultas/" + id, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }
   
}
