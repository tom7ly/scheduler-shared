import Bull, { JobOptions } from "bull";

export enum BQType {
    GATEWAY = 'gateway',
    DEFAULT = 'default',
    REMINDERS = 'reminders',
    EVENTS = 'events',
    LOGS = 'logs',
    JOBS = 'jobs',
    SCHEDULER = 'scheduler',
    NOTIFICATIONS = 'notifications'
}
export enum BQJobStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    FAILED = 'failed',
}

export interface IBQJob<T = any> {
    _id?: string;
    options?: JobOptions
    type: BQType;
    data: T,
    jobId?: Bull.JobId;
}