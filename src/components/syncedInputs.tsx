import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e: any) {
        setText(e.target.value);
    }


    return (
        <>
            <Input label="第一个输入框" text={text} changeText={handleChange} />
            <Input label="第二个输入框" text={text} changeText={handleChange}/>
        </>
    );
}

function Input({ label, text, changeText }: { label: string, text: string, changeText: any }) {

    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={changeText}
            />
        </label>
    );
}
