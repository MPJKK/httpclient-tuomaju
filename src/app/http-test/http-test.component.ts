import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    tulos = 'moro';
    apiTulos = 'moro taas';
    apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
    testiOsoite = 'https://jsonplaceholder.typicode.com';
    testiTulos;

    constructor(private http: HttpClient) {
    }

    getJson() {

        interface MyInterface {
            license: string;
        }

        this.http.get<MyInterface>('assets/package.json').subscribe((data) => {
            console.log(data);
            this.tulos = data.license;
        });
    }

    getFromApi() {


        this.http.get(this.apiosoite + '/media').subscribe((data) => {
            console.log(data[0].filename);
            this.apiTulos = this.kuvaosoite + data[0].filename;
        });
    }


    getMapApi() {

        interface MyInterface {
            any: string;
        }

        this.http.get<MyInterface>(this.testiOsoite + '/photos/').subscribe((data) => {
            console.log(data);
            this.testiTulos = data;
        });
    }


    ngOnInit() {

        this.getMapApi();
    }

}
