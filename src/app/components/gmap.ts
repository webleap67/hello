import { NgComponentOutlet } from '@angular/common';
import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { from } from 'rxjs';


@Component({
    selector: 'gmap',
    template: `<br><h1>Hello amico mio</h1>`,
})

export class MapComponent {

}