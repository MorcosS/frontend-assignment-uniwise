interface UniInputProps{
    // type can be password, email, etc
    type?: string | undefined;
    // a plceholder to add some hints for the user
    placeholder:string;
    // onChange function triggers any change happening from the input
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    // value that will be set on the input
    value:string;
    // name that will be set on the input
    name:string;
}

export type { UniInputProps }