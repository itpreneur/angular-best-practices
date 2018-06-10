import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepositoryService } from './user-repository.service';
import { AccountMenuComponent } from './account-menu.component';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [NavBarComponent, AccountMenuComponent],
    declarations: [NavBarComponent, AccountMenuComponent],
    providers: [UserRepositoryService]
})

export class CoreModule {

}