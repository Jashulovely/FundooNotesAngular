import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpsService } from '../HttpService/https.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token : any;
  base = environment.baseUrl;
  constructor(private httpService : HttpsService) {
    this.token= localStorage.getItem('token');
   }

  addNote(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.PostService(this.base+`Note/AddNote`, data, true, header);
  }

  getNotes(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.GetService(this.base+`Note/AllNotesWithoutRedis`, true, header);
  }

  updateNotes(reqData:any, noteId: any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.PutService(this.base+`Note/UpdateNote?noteid=`+noteId, reqData, true, header);
  }

  trashNotes(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.PutService(this.base+`Note/IsTrashOrNot?noteid=`+reqData.noteId, {}, true, header);
  }

  archiveNotes(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpService.PutService(this.base+`Note/IsArchieveOrNot?noteid=`+reqData.noteId, {}, true, header);
  }


  notesColor(reqData:any){
    console.log(reqData);
    let header={
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' +this.token
    })
    }
    return this.httpService.PutService(this.base+`Note/AddColour?noteid=`+reqData.noteId+`&color=`+reqData.color, {}, true, header);
  }
}