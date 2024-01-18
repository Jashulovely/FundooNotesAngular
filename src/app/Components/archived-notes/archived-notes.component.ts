import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/NotesService/notes.service';


@Component({
  selector: 'app-archived-notes',
  templateUrl: './archived-notes.component.html',
  styleUrls: ['./archived-notes.component.scss']
})
export class ArchivedNotesComponent implements OnInit {

  archievenotesArray:any;
  isArchivedNotes = true;
  constructor(private notes : NotesService) { }

  ngOnInit(): void {
    this.getArchivedNotesList();
  }

  getArchivedNotesList(){
    this.notes.getNotes().subscribe((res:any)=>{
      console.log("Retrieved all archived notes successfully", res.data);
      this.archievenotesArray=res.data;
      //this.archievenotesArray.reverse();
      //console.log('hello')
      this.archievenotesArray=this.archievenotesArray.filter((object:any)=>{
        return object.isArchieve == true && object.isTrash == false ;
      })
      if(this.archievenotesArray.length != 0){
        this.isArchivedNotes = false;
      }
      else{
        this.isArchivedNotes = true;
      }
    })
  }

}
