// import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

// @ValidatorConstraint({ name: 'ValidateCPF', async: false })
// export class ValidateCPF implements ValidatorConstraintInterface {
//   validate(cpf: any, args: ValidationArguments) {
//     // Verifique se o CPF tem 11 dígitos
//     if (cpf.toString().length !== 11) {
//       return false;
//     }

//     // Verifique se o CPF não tem a mesma sequência
//     const cpfString = cpf.toString();
//     if (/(\d)\1{10}/.test(cpfString)) {
//       return false;
//     }

//     // Outras validações de CPF podem ser adicionadas aqui

//     return true;
//   }

//   defaultMessage(args: ValidationArguments) {
//     return 'O CPF deve ter 11 dígitos e não pode ter a mesma sequência.';
//   }
// }
