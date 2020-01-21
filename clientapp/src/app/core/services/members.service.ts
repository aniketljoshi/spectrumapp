import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMember } from 'src/app/shared/interface/imember';
import { Member } from 'src/app/shared/models/member.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MembersService implements IMember {

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(environment.baseUrl + '/json/get/NyNrlJTX8');
  }

  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(environment.baseUrl + '/json/get/NyNrlJTX8/' + id);
  }

  createMember(event: Member) {
    throw new Error("Method not implemented.");
  }

  updateMember(even: Member) {
    throw new Error("Method not implemented.");
  }

  deleteMember(id: string): Observable<string> {
    return this.http.delete<string>(environment.baseUrl + '/json/delete/NyNrlJTX8?id=' + id, httpOptions);
  }
}

