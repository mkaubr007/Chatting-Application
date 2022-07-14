import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() { }

    public setItemInLocalStorage(key: string, value: string): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
}