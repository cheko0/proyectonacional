import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {

  imageResponse: any;

  keystones: string[] = ['Keystone 1', 'Keystone 2', 'Keystone 3', 'Keystone 4', 'Keystone 5'];

  options: any;

  addIntegrationValid: boolean = true;

  registerFirstForm: FormGroup;

  registerSecondForm: FormGroup;

  registerThirdForm: FormGroup;

  registerFourForm: FormGroup;

  constructor(private fb: FormBuilder, private imagesPicker: ImagePicker) {
  }

  ngOnInit() {
    this.registerFirstForm = this.fb.group({
      project_name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      bussiness_plan: ['', Validators.required]
    });

    this.registerSecondForm = this.fb.group({
      team: this.fb.array([
        this.createIntegrationForm()
      ])
    });

    this.registerThirdForm = this.fb.group({
      bussiness_plan: ['']
    });

    this.registerFourForm = this.fb.group({
      fragments: this.fb.array([
        this.createFragementForm()
      ])
    })
  }

  getImages() {
    this.options = {
      maximumImagesCount: 3,
      width: 200,
      height: 200,
      quality: 25,
      outputType: 1
    };

    this.imageResponse = [];
    this.imagesPicker.getPictures(this.options).then(results => {
      for (let i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i])
      }
    }, err => console.log(err));
  }

  createIntegrationForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      // photo: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  createFragementForm(): FormGroup {
    return this.fb.group({
      fragment_name: ['', Validators.required],
      keystones: this.fb.array([])
    })
  }

  createkeystoneForm(): FormGroup {
    return this.fb.group({
      keystone_name: ['', Validators.required],
      price: ['', Validators.required]
    })
  }


  addIntegrationForm() {
    if (this.team.length >= 1 && this.team.length < 5)
      this.team.push(this.createIntegrationForm());
    else
      this.addIntegrationValid = false;
  }

  addFragmentForm() {
    this.fragments.push(this.createFragementForm());
  }

  addKeystoneForm(i?: number) {
    (<FormArray>this.fragments.controls[i].get('keystones')).push(this.createkeystoneForm())
  }

  validToNext(): boolean {
    console.log('Valida...')
    return this.team.length >= 1 && this.team.length < 6;
  }

  get team(): FormArray {
    return this.registerSecondForm.get('team') as FormArray;
  }

  get fragments(): FormArray {
    return this.registerFourForm.get('fragments') as FormArray;
  }

  // get keystones(): FormArray {

  // }

}
