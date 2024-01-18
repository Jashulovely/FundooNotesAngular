import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Services/NotesService/notes.service';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  submitted :boolean= false;
  constructor(private notes : NotesService) { }
  @Output() refreshCreate= new EventEmitter<string>();
  ngOnInit(): void {
    
  }

  notesForm = new FormGroup({
    title : new FormControl('',[Validators.required]),
    note : new FormControl('',[Validators.required])
  });

  isValid:boolean=true;

  onCreateNote(){
    if(this.submitted = true && this.notesForm.valid){
    let data = {
      title : this.notesForm.value.title,
      note : this.notesForm.value.note
    };
    this.notes.addNote(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
      console.log('note added')
      this.refreshCreate.emit(res);
      localStorage.getItem("token");
    })
    this.isValid = true;
  }
  else{
    console.log("Please give input");
    this.isValid = true;
  }
  }

}
