import { LocalSaveAccessToken } from './local-save-access-token'
import { SetStorageSpy } from '@/data/test'

import { faker } from '@faker-js/faker'

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const setStorage = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorage)
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorage.key).toBe('accessToken')
    expect(setStorage.value).toBe(accessToken)
  })
})
