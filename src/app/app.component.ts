import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: any;
  formData = {
    fullName: '',
    email: '',
    address: '',
  };

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl(this.formData.fullName, [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(this.formData.email, [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),

      contactDetails: new FormGroup({
        address: new FormControl(this.formData.address, Validators.required),
        shippingAddress: new FormControl('', Validators.required),
        contactNo: new FormControl('', [
          Validators.required,
          Validators.pattern('[789][0-9]{9}'),
        ]),
      }),
      skills: new FormArray([]),
    });
  }

  addSkills(skills: HTMLInputElement) {
    this.Skills.push(new FormControl(skills.value));
    skills.value = "";
  }
  removeSkills(index:any){
      this.Skills.removeAt(index);
  }
  get Address() {
    return this.form.get('contactDetails.address');
  }
  get Skills() {
    return this.form.get('skills') as FormArray;
  }
  get ShippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }
  get ContactNo() {
    return this.form.get('contactDetails.contactNo');
  }

  // public name: string = '';
  // public email: string = '';
  // public address: string = '';
  // public someText: string = '';

  // public tableContent: any[] = [];
  // public addDataToTable() {
  //   let content = { name: this.name, email: this.email, address: this.address };
  //   this.tableContent.push(content);
  // }

  // deleteUserContentById(i: number) {
  //   this.tableContent.splice(i, 1);
  // }
  // public title: string = '';
  // public description: string = '';
  // public imageUrl: string = '';
  // public postUrl: string = '';
  // public isChecked: boolean = true;
  // status:string = "color1";

  // public postArray: string[] = [
  //   'Post 1',
  //   'Post 2',
  //   'Post 3',
  //   'Post 4',
  //   'Post 5',
  // ];
  // public objArray: any[] = [
  //   // { id: 1, postTitle: 'Post 1' },
  //   // { id: 2, postTitle: 'Post 2' },
  //   // { id: 3, postTitle: 'Post 3' },
  //   // { id: 4, postTitle: 'Post 4' },
  //   // { id: 5, postTitle: 'Post 5' },
  // ];
  // addNewData() {
  //   this.objArray.push({ id: 6, postTitle: 'post 6' });
  // }
  // delete(index: any) {
  //   this.objArray.splice(index, 1);
  // }
  // title = 'AngIntro';
  // parentMessage: string = 'some parent message';
  // message: string = '';
  // public fromChildOutPut: string = '';
  // @ViewChild(PostComponent) childComp: any;

  // ngAfterViewInit(): void {
  //   this.message = this.childComp.childMessage;
  // }
  // reciveMessage($event: any) {
  //   this.fromChildOutPut = $event;
  // }
  // constructor() {}
  // userName: string = '';
  // bool: boolean = true;
  // keyUp(userName: any): void {
  //   console.log(userName);
  // }

  // keyUpNgModel() {
  //   console.log(this.userName);
  // }
  onSubmit(f: NgForm) {
    console.log(f.value);
  }
  onSubmitForReactivForm() {
    console.log(this.form.value);
  }
  getFullNameValue(fullName: NgModel) {
    console.log(fullName);
  }
}
