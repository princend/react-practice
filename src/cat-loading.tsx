import { JSX } from "react";
import './cat-loading.scss';

export function CatLoading(): JSX.Element {
    return (
        <>
            <h1 className="intro">otter loader</h1>
            <div className="box">
                <div className="cat">
                    <div className="cat__body"></div>
                    <div className="cat__body"></div>
                    <div className="cat__tail"></div>
                    <div className="cat__head"></div>
                </div>
            </div>
        </>
    )
}