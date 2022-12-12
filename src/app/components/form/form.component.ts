import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  datas = [{ name: 'Mara', grade1: 2, grade2: 4, situation: 'Reprovado' }];

  modelInsert: any = {};
  modelUpdate: any = {};
  myIndex: any;
  average: any;

  addData(): void {
    this.average = (this.modelInsert.grade1 + this.modelInsert.grade2) / 2;

    if (this.average >= 7) {
      this.modelInsert.situation = 'Aprovado';
    } else {
      this.modelInsert.situation = 'Reprovado';
    }

    this.datas.push(this.modelInsert);

    this.modelInsert = {};
  }

  edit(i: any): void {
    this.modelUpdate.name = this.datas[i].name;
    this.modelUpdate.grade1 = this.datas[i].grade1;
    this.modelUpdate.grade2 = this.datas[i].grade2;
    this.modelUpdate.situation = this.datas[i].situation;
    this.myIndex = i;

  }

  updateData(): void {
    this.average = (this.modelUpdate.grade1 + this.modelUpdate.grade2) / 2;

    if (this.average >= 7) {
      this.modelUpdate.situation = 'Aprovado';
    } else {
      this.modelUpdate.situation = 'Reprovado';
    }

    let index = this.myIndex;
    for (let i = 0; i < this.datas.length; i++) {
      if (i == index) {
        this.datas[i] = this.modelUpdate;
        this.modelUpdate = {};
      }
    }
  }

  delete(i: any): void {
    this.datas.splice(i, 1);
  }
}
