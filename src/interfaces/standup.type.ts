export type standupUpdateType = {
    type: string;
    completed: string;
    planned: string;
    blockers: string;
};

export type InputProps = {
    placeholder: string;
    name: string;
    value: string;
    dataTestId: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
