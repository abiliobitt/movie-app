import { LocalStorageAdapter } from '../../../infra/cache'

import 'jest-localstorage-mock'
import { faker } from '@faker-js/faker'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    test('Should call localStorage.setItem with correct values', async () => {
        const sut = makeSut()
        const key = faker.database.column()
        const value = {
            key: faker.helpers.objectKey({ myProperty: 'myValue' })
        }

        sut.set(key, value)

        expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
    })

    test('Should call localStorage.removeItem if value is null', async () => {
        const sut = makeSut()
        const key = faker.database.column()

        sut.set(key, null)

        expect(localStorage.removeItem).toHaveBeenCalledWith(key)
    })

    test('Should call localStorage.getItem with correct value', async () => {
        const sut = makeSut()
        const key = faker.database.column()
        const value = {
            key: faker.helpers.objectKey({ myProperty: 'myValue' })
        }
        const getItemSpy = jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))

        const obj = sut.get(key)

        expect(obj).toEqual(value)
        expect(getItemSpy).toHaveBeenCalledWith(key)
    })
})
