import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "showDate"
})
export class ShowDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value;
  }
}
