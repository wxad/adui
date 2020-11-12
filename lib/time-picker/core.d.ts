export declare const hours: string[];
export declare const hours24: string[];
export declare const minutes: string[];
export declare const isLegalTimeString: (time: string, onlyHour?: boolean | undefined) => boolean;
export declare const extractHourAndMinuteFromTime: (time?: string | null | undefined) => {
    hour: string | null;
    minute: string | null;
};
export declare const isTimeAfter: (t1?: string | null | undefined, t2?: string | null | undefined) => boolean | "" | null;
export declare const isTimeBefore: (t1?: string | null | undefined, t2?: string | null | undefined) => boolean | "" | null;
