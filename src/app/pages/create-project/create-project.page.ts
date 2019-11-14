import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ToastController } from '@ionic/angular';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})

export class CreateProjectPage implements OnInit {

  imageResponse: any;

  keystones: string[] = ['Keystone 1', 'Keystone 2', 'Keystone 3'];

  options: any;

  addIntegrationValid: boolean = true;

  validForms: boolean = false;

  registerFirstForm: FormGroup;

  registerSecondForm: FormGroup;

  registerThirdForm: FormGroup;

  constructor(private fb: FormBuilder, private imagesPicker: ImagePicker,
    private toastController: ToastController, private projectService: ProjectService) {
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
      keystoneName1: ['Keystone 1', Validators.required],
      fragments1: this.fb.array([
        this.createKeystoneForm(),
        this.createKeystoneForm(),
        this.createKeystoneForm()
      ]),
      keystoneName2: ['Keystone 2', Validators.required],
      fragments2: this.fb.array([
        this.createKeystoneForm(),
        this.createKeystoneForm(),
        this.createKeystoneForm(),
      ]),
      keystoneName3: ['Keystone 3', Validators.required],
      fragments3: this.fb.array([
        this.createKeystoneForm(),
        this.createKeystoneForm(),
        this.createKeystoneForm(),
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
      telephone: ['', Validators.required]
    });
  }

  createFragementForm(): FormGroup {
    return this.fb.group({
      fragment_name: ['', Validators.required],
      keystones: this.fb.array([])
    })
  }

  createKeystoneForm(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required],
      price: ['', Validators.required]
    })
  }


  addIntegrationForm() {
    if (this.team.length >= 1 && this.team.length < 5)
      this.team.push(this.createIntegrationForm());
    else
      this.addIntegrationValid = false;
  }

  validToNext(): boolean {
    console.log('Valida...')
    return this.team.length >= 1 && this.team.length < 6;
  }

  registerProyect(){
    if(this.registerFirstForm.valid && this.registerSecondForm.valid && this.registerThirdForm.valid){
      console.log('guardado', this.integrationForms());
      this.projectService.addProject(this.integrationForms()).subscribe(res => {
        console.log("Guardado: ",res);
      });
    }else{
      this.messageFaildRegisterProject();
    }
  }

  async messageFaildRegisterProject(){
    const toast = await this.toastController.create({
      message: 'Aún faltan datos por ingresar',
      duration: 2000
    });
    toast.present();
  }

  integrationForms(){
    let project = {
      name: this.registerFirstForm.get('project_name').value,
      categoryCode: this.registerFirstForm.get('category').value,
      description: this.registerFirstForm.get('description').value,
      imgProject1: 'img1',
      imgProject2: 'img2',
      imgProject3: 'img3',
      businessPlan: this.registerFirstForm.get('bussiness_plan').value,
      img4BusinessPlan: 'img1',
      img5BusinessPlan: 'img1',
      img6BusinessPlan: 'img1',
      keystones: [
        {
          title: this.registerThirdForm.get('keystoneName1').value,
          fragments: [
            {
              description: this.registerThirdForm.get('fragments1').value[0].description,
              price: this.registerThirdForm.get('fragments1').value[0].price
            },
            {
              description: this.registerThirdForm.get('fragments1').value[1].description,
              price: this.registerThirdForm.get('fragments1').value[1].price
            },
            {
              description: this.registerThirdForm.get('fragments1').value[2].description,
              price: this.registerThirdForm.get('fragments1').value[2].price
            }
          ]
        },
        {
          title: this.registerThirdForm.get('keystoneName2').value,
          fragments: [
            {
              description: this.registerThirdForm.get('fragments2').value[0].description,
              price: this.registerThirdForm.get('fragments2').value[0].price
            },
            {
              description: this.registerThirdForm.get('fragments2').value[1].description,
              price: this.registerThirdForm.get('fragments2').value[1].price
            },
            {
              description: this.registerThirdForm.get('fragments1').value[2].description,
              price: this.registerThirdForm.get('fragments2').value[2].price
            }
          ]
        },
        {
          title: this.registerThirdForm.get('keystoneName3').value,
          fragments: [
            {
              description: this.registerThirdForm.get('fragments3').value[0].description,
              price: this.registerThirdForm.get('fragments3').value[0].price
            },
            {
              description: this.registerThirdForm.get('fragments3').value[1].description,
              price: this.registerThirdForm.get('fragments3').value[1].price
            },
            {
              description: this.registerThirdForm.get('fragments3').value[2].description,
              price: this.registerThirdForm.get('fragments3').value[2].price
            }
          ]
        }
      ],
      reward: {
        rewardFragment: 'r1',
        rewardLessFragment: 'r1',
        rewardTwoFragment: 'r1',
        rewardOneKeystone: 'r1'
      },
      team: this.registerSecondForm.get('team').value
    }
    return project;
  }

  get team(): FormArray {
    return this.registerSecondForm.get('team') as FormArray;
  }

  get fragments1(): FormArray {
    return this.registerThirdForm.get('fragments1') as FormArray;
  }

  get fragments2(): FormArray {
    return this.registerThirdForm.get('fragments2') as FormArray;
  }

  get fragments3(): FormArray {
    return this.registerThirdForm.get('fragments3') as FormArray;
  }

}
