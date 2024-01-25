"use client";

import { ButtonStyle } from "$/index.d";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

export default function TestModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button
                style={ButtonStyle.Accent}
                onClick={() => {
                    setShowModal(true);
                }}>
                Open Modal
            </Button>

            {showModal ? (
                <Modal
                    title="Salut"
                    onClose={() => {
                        setShowModal(false);
                    }}
                    onClickOver={() => {
                        setShowModal(false);
                    }}>
                    <>Coucou</>
                </Modal>
            ) : (
                <></>
            )}
        </>
    );
}
