import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    exports: [
        MatButtonModule
    ]
})

export class MaterialCommonModule { }