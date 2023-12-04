import { SetStorage, GetStorage } from '../../data/protocols/cache'

export class LocalStorageAdapter implements SetStorage, GetStorage {
    set (key: string, value: object|null): void {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value))
        } else {
            localStorage.removeItem(key)
        }
    }

    get (key: string): string {
        return JSON.parse(localStorage.getItem(key) || '')
    }
}
