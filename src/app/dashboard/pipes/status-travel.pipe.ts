import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTravel'
})
export class StatusTravelPipe implements PipeTransform {

  transform(value: number): string {
    if(value==1){return 'Pendiente'};
    if(value==2){return 'Asignado al Local'};
    if(value==3){return 'En posesion al Local'};
    if(value==4){return 'A reparar'};
    if(value==5){return 'Reparado'};
    if(value==6){return 'Asignado al Domicilio'};
    if(value==7){return 'En posesion al Domicilio'};
    if(value==8){return 'Entregado'};
    
    
    
    return '';
  }

}
