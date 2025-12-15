import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})

export class TemperaturePipe implements PipeTransform {

    transform(value: string | number,
         inputType: 'Cel' | 'Fah',
         outputType: 'Cel' | 'Fah'
         ): string {
        let val: number;

        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }

        let outputTemp: number;

        if (inputType === 'Cel' && outputType === 'Fah') {
            outputTemp = val * (9/5) + 32;
        } else if (inputType === 'Fah' && outputType === 'Cel') {
            outputTemp = (val - 32) * 5/9;
        } else {
            outputTemp = val;
        }

        let symbol : '°C' | '°F';

        if (outputType === 'Cel') {
            symbol = inputType === 'Cel' ? '°C' : '°F';
        } else {
            symbol = inputType === 'Cel' ? '°C' : '°F';
        }

        return `${outputTemp.toFixed(2)} ${symbol}`;
    }

}