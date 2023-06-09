import { Component, Inject, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProfileData } from 'projects/staff/src/app/core/interface/profile-data';
import { DialogService } from '../../services/dialog.service';


@Component({
  selector: 'app-profile-gialog',
  templateUrl: './profile-gialog.component.html',
  styleUrls: ['./profile-gialog.component.scss']
})
export class ProfileGialogComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProfileData,
    private fb: UntypedFormBuilder,
    private dialogService: DialogService
  ) { }
  form = this.fb.group({
    name: ['', [Validators.required]],
  });
  isChangeName = false;
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.invalid) { return }
    this.dialogService.changeProfile$({
      newName: this.form.value.name,
      staffId: this.data.staffId
    }).subscribe((res)=>{
      this.isChangeName = false;
      this.data.name = res.data?.newName!;
    })
    // 將更改後姓名回存到header跟彈跳視窗畫面上

  }

}
