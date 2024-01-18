import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/NotesService/notes.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  notesArray:any;
  constructor(private notes : NotesService) { }

  ngOnInit(): void {
    this.onCreateNote();
  }

  onCreateNote(){
    this.notes.getNotes().subscribe((res:any) => {
      console.log(res.data);
      this.notesArray = res.data;
      console.log('note shown')
      console.log('Stored to array variable');
      console.log(this.notesArray);
      this.notesArray=this.notesArray.filter((object: any)=>{
        return object.isTrash == false;
      })
      this.notesArray=this.notesArray.filter((object: any)=>{
        return object.isArchieve == false
      })
      this.notesArray.reverse();
      
    })
  }
  RefreshCreatedNotes($event:any)
  {
    console.log('added Notes refreshed'+$event)
    this.onCreateNote();
  }

  RefreshDisplayNotes($event:any){
    console.log('display Notes refreshed'+$event)
    this.onCreateNote();
  }
}
