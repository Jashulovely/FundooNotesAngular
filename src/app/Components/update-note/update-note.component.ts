import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/NotesService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  

  title:any;
  note:any;
  id:any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogbox : MatDialogRef<UpdateNoteComponent>,
      private notes : NotesService) { 
        this.title = data.title,
        this.note = data.note,
        this.id = data.noteId
      }

  ngOnInit(): void {
  }


  closeDialog(){
    let reqData = {
      title : this.title,
      note : this.note
    }
    this.notes.updateNotes(reqData, this.id).subscribe((res:any)=>{
      console.log(res);
      this.dialogbox.close();
    })
  }

}
