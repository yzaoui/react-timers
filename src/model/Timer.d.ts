interface Timer {
    id: string;
    title: string;
    project: string;
    elapsedms: number;
    runningSince: number | null;
}
