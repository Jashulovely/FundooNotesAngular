import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/NotesService/notes.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {

  notesArray:any;
  isTrashNotes = true;
  constructor(private notes : NotesService) { }

  ngOnInit(): void {
    this.getTrashNotesList();
  }

  getTrashNotesList(){
    this.notes.getNotes().subscribe((res:any)=>{
      console.log("Retrieved all trash notes successfully", res.data);
      this.notesArray=res.data;
      this.notesArray.reverse();
      this.notesArray=this.notesArray.filter((notes:any)=>{
        return notes.isTrash == true;
      })
      if(this.notesArray.length != 0){
        this.isTrashNotes = false;
      }
      else{
        this.isTrashNotes = true;
      }
    })
  }

}
