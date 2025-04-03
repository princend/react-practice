import { JSX } from 'react';

export function Panel({ title, children, isActive, onShow }: { title: string; children: React.ReactNode, isActive: boolean, onShow: () => void }): JSX.Element {

    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    显示
                </button>
            )}
        </section>
    );
}