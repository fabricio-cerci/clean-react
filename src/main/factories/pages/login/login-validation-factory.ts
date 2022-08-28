import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validation-builder'
import { Validation } from '@/presentation/protocols/validation'

export const makeLoginValidation = (): Validation => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
}
