import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'convertToSpaces'
})
export class ConvertTospacesPipe implements PipeTransform{

    transform(value:string, charachter:string): string{
        return value.replace(charachter,' ');
    }

}