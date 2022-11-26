import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  list1: any[] = [];
  list2: any[] = [];

  constructor(public fb: FormBuilder, private service: AppService) {}

  ngOnInit(): void {

    this.service.getEntityList().subscribe((res: any) => this.list1 = res.entries);

    this.submitForm.get('selectedEntity')?.valueChanges.subscribe((res : any) => {
      console.log(res);

      this.getEntityById(res);
    })
  }

  getEntityById(res: string){
    this.service.getEntityById(res).subscribe((res: any) => this.list2 = res.entries)
  }
  submitForm = this.fb.group({
    selectedEntity: new FormControl(null, Validators.required)
  });


  onSubmit(): void {

  }


}
