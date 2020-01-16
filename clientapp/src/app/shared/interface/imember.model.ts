import { Member } from '../models/member.model';

export interface IMember {
    getMembers();
    getMember(id: string);
    createMember(event: Member);
    updateMember(even: Member);
}
