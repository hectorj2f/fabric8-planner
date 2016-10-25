import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { DropdownModule }     from 'ng2-dropdown';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { AlmIconModule }      from './../../../shared-component/icon/almicon.module';
import { AlmEditableModule }     from './../../../shared-component/editable/almeditable.module';
import { WorkItemDetailComponent } from './work-item-detail.component';
import { WorkItemLinkComponent }    from './work-item-link/work-item-link.component';
import { WorkItemLinkService } from './work-item-link/work-item-link.service';
//Pipes
import { AlmTrim } from './../../../pipes/alm-trim';

@NgModule({
  imports: [
     AlmIconModule,
     AlmEditableModule,
     CommonModule,
     DropdownModule,
     FormsModule,
     Ng2AutoCompleteModule
  ],
  declarations: [ WorkItemDetailComponent, AlmTrim, WorkItemLinkComponent ],
  exports:      [ WorkItemDetailComponent ],
  providers: [ WorkItemLinkService ]
})
export class WorkItemDetailModule { }