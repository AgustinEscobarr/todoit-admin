import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTravel'
})
export class StatusTravelPipe implements PipeTransform {

  transform(value: number): string {
    if(value==1||value==5){return 'Pendiente'};
    if(value==2||value==3||value==6||value==7){return 'En curso'};
    
    return '';
  }

}
