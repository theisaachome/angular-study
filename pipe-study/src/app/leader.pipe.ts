import { Pipe, PipeTransform } from '@angular/core';
import { Member } from "./member";

@Pipe({
  name: 'leader',
  pure:false
})
export class LeaderPipe implements PipeTransform {

  transform(members:Member[]) {
    return members.filter(member=> member.leader);
  }

}
