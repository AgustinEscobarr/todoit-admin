import { Rol, Vehicle } from './register-data';
export interface UserComplete{
    id: number,
    email: string,
    fullName: string,
    address: string,
    cellPhone: string,
    isAccepted: boolean,
    isDeleted: boolean,
    observations: string,
    password: string,
    vehicle: Vehicle,
    rol:Rol
  }