import {Participant} from "../model/participant";
import {Thread} from "../model/thread";
import {Message} from "../model/message";

export interface AllUserData {
    participants: Participant[]; // avec qui il parle
    threads: Thread[]; // toutes les conversations que l'a fait
    messages: Message[]; //les messages des les conversations
}
