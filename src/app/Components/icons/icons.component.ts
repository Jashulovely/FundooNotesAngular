import { Component,Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/NotesService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  isArchieve:any;
  isTrash:any;
  @Input() notesData:any;
  constructor(private notes : NotesService) { }

  ngOnInit(): void {
  }

  onDelete(){
    let reqData={
      noteId:this.notesData.noteId
    }
    console.log(reqData);
    this.notes.trashNotes(reqData).subscribe((res:any)=>{
      console.log("Note Trashed Successfully", res);
    })
  }

  onArchive(){
    let reqData={
      noteId:this.notesData.noteId
    }
    console.log(reqData);
    this.notes.archiveNotes(reqData).subscribe((res:any)=>{
      console.log("Note Archived Successfully", res);
    })
  }


  colorArray:Array<any> = [
    {code : '#ffffff', name : 'White'},
    {code : '#FF6347', name : 'Tomato'},
    {code : '#FF4500', name : 'OrangeRed'},
    {code : '#FFFF00', name : 'Yellow'},
    {code : '#ADFF2F', name : 'GreenYellow'},
    {code : '#B0C4DE', name : 'LightSteelBlue'},
    {code : '#EEE8AA', name : 'PaleGoldenRod'},
    {code : '#7FFFD4', name : 'Aquamarine'},
    {code : '#FFE4C4', name : 'Bisque'},
    {code : '#C0C0C0', name : 'Silver'},
    {code : '#BC8F8F', name : 'RosyBrown'},
    {code : '#D3D3D3', name : 'Grey'}
  ];


  selectColor(colors : any){
    let reqData = {
      color : colors.name,
      noteId : this.notesData.noteId
    }
    this.notes.notesColor(reqData).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
