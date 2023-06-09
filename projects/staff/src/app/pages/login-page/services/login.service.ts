import { Injectable } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { LoginRes, StaffService } from '../../../api/cinePOS-api';
import { StorageEnum } from '../../../core/enums/storage/storage-enum';
import { StorageService } from '../../../core/services/storage/storage.service';
import { ProfileData } from '../../../core/interface/profile-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private staffService:StaffService,
    private storageService: StorageService
  ) { }

  v1StaffLoginPost$(LoginReq: { staffId: string, password: string }): Observable<LoginRes> {
    return this.staffService.v1StaffLoginPost(LoginReq)
      .pipe(
        tap(res => res.code !== 1 && alert(res.message)),
        filter(res => res.code === 1),
        tap((res) => {
          this.storageService.setLocalStorage(StorageEnum.token,res.data.token);
          const profileData:ProfileData = {
            name: res.data.name!,
            staffId: res.data.staffId!,
            imgUrl: 'assets/images/angular-icon.webp'
          }
          this.storageService.setLocalStorage(StorageEnum.profileData,profileData);
        })
      )
  }
}
