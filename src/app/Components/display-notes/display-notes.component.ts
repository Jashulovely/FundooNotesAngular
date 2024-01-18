import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  constructor(public dialog : MatDialog) { }
  @Output() refreshDisplay= new EventEmitter<string>();
  @Input() notesList:any;
  notes:any;

  ngOnInit(): void {
  }

  editNoteDialogBox(notes:any){
    const dialogbox = this.dialog.open(UpdateNoteComponent,{
      width:'40%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe(result=>{
      console.log(result);
      this.refreshDisplay.emit(result)
    })
  }


}
