/**
 * CinePOS_BackEnd
 * CinePOS 後端API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CommonResFailedAuthInvalid } from '../model/commonResFailedAuthInvalid';
import { CommonResFailedNoFound } from '../model/commonResFailedNoFound';
import { InfoUpdateReq } from '../model/infoUpdateReq';
import { InfoUpdateRes } from '../model/infoUpdateRes';
import { LoginReq } from '../model/loginReq';
import { LoginRes } from '../model/loginRes';
import { MovieDetailCreateFaild } from '../model/movieDetailCreateFaild';
import { MovieDetailCreateParameter } from '../model/movieDetailCreateParameter';
import { MovieDetailCreateSuccess } from '../model/movieDetailCreateSuccess';
import { MovieDetailGetInfoFailed } from '../model/movieDetailGetInfoFailed';
import { MovieDetailGetInfoSuccess } from '../model/movieDetailGetInfoSuccess';
import { UserPostStickerReFailed } from '../model/userPostStickerReFailed';
import { UserPostStickerRes } from '../model/userPostStickerRes';
import { UserProfileRes } from '../model/userProfileRes';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ManagerService {

    protected basePath = 'https://api-t.cine-pos.com/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 登入請求
     * 
     * @param body 資料格式
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1ManagerLoginPost(body: LoginReq, observe?: 'body', reportProgress?: boolean): Observable<LoginRes>;
    public v1ManagerLoginPost(body: LoginReq, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LoginRes>>;
    public v1ManagerLoginPost(body: LoginReq, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LoginRes>>;
    public v1ManagerLoginPost(body: LoginReq, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1ManagerLoginPost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<LoginRes>('post',`${this.basePath}/v1/manager/login`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 取得單一電影資訊
     * 
     * @param id 電影id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1ManagerMovieIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<MovieDetailGetInfoSuccess>;
    public v1ManagerMovieIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MovieDetailGetInfoSuccess>>;
    public v1ManagerMovieIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MovieDetailGetInfoSuccess>>;
    public v1ManagerMovieIdGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling v1ManagerMovieIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<MovieDetailGetInfoSuccess>('get',`${this.basePath}/v1/manager/movie/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 新增單一電影資訊
     * 
     * @param body 新增單一電影資訊參數
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1ManagerMoviePost(body: MovieDetailCreateParameter, observe?: 'body', reportProgress?: boolean): Observable<MovieDetailCreateSuccess>;
    public v1ManagerMoviePost(body: MovieDetailCreateParameter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MovieDetailCreateSuccess>>;
    public v1ManagerMoviePost(body: MovieDetailCreateParameter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MovieDetailCreateSuccess>>;
    public v1ManagerMoviePost(body: MovieDetailCreateParameter, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1ManagerMoviePost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<MovieDetailCreateSuccess>('post',`${this.basePath}/v1/manager/movie`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 修改員工姓名
     * 
     * @param body 資料格式
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1ManagerUserProfilePost(body: InfoUpdateReq, observe?: 'body', reportProgress?: boolean): Observable<InfoUpdateRes>;
    public v1ManagerUserProfilePost(body: InfoUpdateReq, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InfoUpdateRes>>;
    public v1ManagerUserProfilePost(body: InfoUpdateReq, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InfoUpdateRes>>;
    public v1ManagerUserProfilePost(body: InfoUpdateReq, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v1ManagerUserProfilePost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<InfoUpdateRes>('post',`${this.basePath}/v1/manager/user/profile`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 取得管理人員資料
     * 
     * @param staffId 員編
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1ManagerUserProfileStaffIdGet(staffId: string, observe?: 'body', reportProgress?: boolean): Observable<UserProfileRes>;
    public v1ManagerUserProfileStaffIdGet(staffId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserProfileRes>>;
    public v1ManagerUserProfileStaffIdGet(staffId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserProfileRes>>;
    public v1ManagerUserProfileStaffIdGet(staffId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (staffId === null || staffId === undefined) {
            throw new Error('Required parameter staffId was null or undefined when calling v1ManagerUserProfileStaffIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<UserProfileRes>('get',`${this.basePath}/v1/manager/user/profile/${encodeURIComponent(String(staffId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 上傳管理人員大頭貼
     * 
     * @param image 
     * @param staffId 員編
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public v1ManagerUserProfileStickerStaffIdPostForm(image: Blob, staffId: string, observe?: 'body', reportProgress?: boolean): Observable<UserPostStickerRes>;
    public v1ManagerUserProfileStickerStaffIdPostForm(image: Blob, staffId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserPostStickerRes>>;
    public v1ManagerUserProfileStickerStaffIdPostForm(image: Blob, staffId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserPostStickerRes>>;
    public v1ManagerUserProfileStickerStaffIdPostForm(image: Blob, staffId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (image === null || image === undefined) {
            throw new Error('Required parameter image was null or undefined when calling v1ManagerUserProfileStickerStaffIdPost.');
        }

        if (staffId === null || staffId === undefined) {
            throw new Error('Required parameter staffId was null or undefined when calling v1ManagerUserProfileStickerStaffIdPost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (image !== undefined) {
            formParams = formParams.append('image', <any>image) as any || formParams;
        }

        return this.httpClient.request<UserPostStickerRes>('post',`${this.basePath}/v1/manager/user/profile/sticker/${encodeURIComponent(String(staffId))}`,
            {
                body: convertFormParamsToString ? formParams.toString() : formParams,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
