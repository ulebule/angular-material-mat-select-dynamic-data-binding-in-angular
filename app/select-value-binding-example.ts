import { Component } from '@angular/core';

/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding-example',
  templateUrl: 'select-value-binding-example.html',
  styleUrls: ['select-value-binding-example.css'],
})
export class SelectValueBindingExample {
  education_level;
  exam_title;
  gender;
  degreeTitleList = [];



  educationInfo = {
    aa: 'Secondary',
    bb: 'SSC',
    cc: 'Male'
  }

  genderList = ['Male', 'Female']

  educationList: any = [
    {
      'educationLevelName': 'PSC/5 pass',
      degreeTitleList: [
        'PSC', '5 Pass', 'Other',
      ]
    },
    {
      'educationLevelName': 'JSC/JDC/8 pass',
      degreeTitleList: [
        'JSC', '8 Pass', 'Other'
      ]
    },
    {
      'educationLevelName': 'Secondary',
      degreeTitleList: [
        'SSC', 'O Level', 'Other',
      ]
    }
  ];


  editInfo(educationInfo) {
    this.education_level = educationInfo.aa;
    this.exam_title = educationInfo.bb;
    this.gender = educationInfo.cc;
    this.educationLevelChangeAction(this.education_level);
  }

  educationLevelChangeAction(education) {
    this.exam_title="";
    let dropDownData = this.educationList.find((data: any) => data.educationLevelName === education);
    if (dropDownData) {
      this.degreeTitleList = dropDownData.degreeTitleList;
      if(this.degreeTitleList){
        this.exam_title=this.degreeTitleList[0];
      }
      
    } else {
      this.degreeTitleList = [];
    }

  }


}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */