import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (fieldName: string, fieldValue): string {
    return this.errorMessage
  }
}
