import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export default class ActivateGuard implements CanActivate {
  
  canActivate() {
    console.log('Check user authentification');
    return true;
  }
}