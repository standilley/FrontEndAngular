export interface Employee{
    id?: number;
    name: string;
    lastName: string;
    department: string;
    active: boolean;
    shift: string;
    createDate?: string;
    changeDate?: string;
}