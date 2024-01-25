import { MouseEventHandler } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

export default function Modal(props: {
    onClose?: () => void;
    onClickOver?: () => void;
    children?: JSX.Element | undefined;
    title?: string | undefined;
}) {
    const handleCloseClick: MouseEventHandler<HTMLAnchorElement> = e => {
        e.preventDefault();
        (props.onClose ?? (() => {}))();
    };
    const handleOverlayClick: MouseEventHandler<HTMLDivElement> = e => {
        if (e.target === document.querySelector(`.${styles.modalOverlay}`)) {
            e.preventDefault();
            (props.onClickOver ?? (() => {}))();
        }
    };

    const modalContent = (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    {props.title}
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root") as Element);
}
