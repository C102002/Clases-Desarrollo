import { EventObserver } from "./shared/EventObserver";
import { PostgresUserRepositry } from './infraestructure/PostgresUserRepository';
import { PostgresSubscriptionRepositry } from './infraestructure/PostgresSubscriptionRepositry';
import { BirthDayNotificationService } from './aplication/services/BirthDayNotificationService';
import { FireBasePushSender } from './infraestructure/FireBasePushSender';
import { BirthDayReniewInvalidNotificationService } from './aplication/services/BirthDayReniewInvalidNotificationService';
import { GmailEmailSender } from './infraestructure/GmailEmailSender';
import { BirthDayReniewNotificationService } from "./aplication/services/BirthDayReniewNotificationService";
import { BaseServiceDecorator } from "./aplication/services/BaseServiceDecorator";
import { LoggerDecorator } from './aplication/services/LoggerDecorator';


let subject= new EventObserver(new PostgresUserRepositry(), new PostgresSubscriptionRepositry())


let bithdayService= new LoggerDecorator( (new BirthDayNotificationService('Feliz cumpleanos',new FireBasePushSender('acdsacdscdscds'), new PostgresSubscriptionRepositry())))
let bithdayInvalidReniewService= new BirthDayReniewInvalidNotificationService('Feliz cumpleanos recuerda renovar estado',new GmailEmailSender('acdsacdscdscds'), new PostgresSubscriptionRepositry())

let bithdayInvalidService= new BirthDayReniewNotificationService('Feliz cumpleanos recuerda que te renovamos el estado por 1 mes',new GmailEmailSender('acdsacdscdscds'), new PostgresSubscriptionRepositry())

subject.subscribe(bithdayService)
subject.subscribe(bithdayInvalidReniewService)
subject.subscribe(bithdayInvalidService)
console.log(subject.subscribers.length);
subject.notify()