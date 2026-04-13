import { useState } from 'react';
interface BlockProps {
    code: string;
}

export const useCopyToClipboard = (block:BlockProps) => {

    const { code } = block;

    const [copied, setCopied] = useState(false);

    const copy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
};