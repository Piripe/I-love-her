import Markdown from "react-markdown";
import styles from "./page.module.scss";
import Button from "@/components/ui/Button";
import { ButtonStyle } from "$/index.d";
import Textbox from "@/components/ui/Textbox";
import Combobox from "@/components/ui/Combobox";
import TestModal from "./testModal";
import ImagePicker from "@/components/ui/ImagePicker";
import Numericbox from "@/components/ui/Numericbox";
import Checkbox from "@/components/ui/Checkbox";

export default async function Page() {
    "use server";
    return (
        <div className={styles.container}>
            <Markdown className="markdown">## Dashboard ui-kit:</Markdown>
            <div className={styles.kitContainer}>
                <Markdown className="markdown">### Button:</Markdown>
                <div className={styles.kitRow}>
                    <div>
                        <p>Normal</p>
                        <div className={styles.kitRow}>
                            <Button>Default Button</Button>
                            <Button style={ButtonStyle.Accent}>Accent Button</Button>
                        </div>
                    </div>
                    <div>
                        <p>Disabled</p>
                        <div className={styles.kitRow}>
                            <Button disabled={true}>Default Button</Button>
                            <Button style={ButtonStyle.Accent} disabled={true}>
                                Accent Button
                            </Button>
                        </div>
                    </div>
                </div>
                <Markdown className="markdown">### Textbox:</Markdown>
                <div className={styles.kitRow}>
                    <Textbox placeholder="Default textbox" defaultValue="Coucou"/>
                    <Textbox placeholder="Disabled textbox" disabled={true} />
                </div>
                <Textbox
                    className={styles.multilineTextbox}
                    multiline={true}
                    placeholder="Default multiline textbox"
                    defaultValue="Coucou"
                />
                <Markdown className="markdown">### Numericbox:</Markdown>
                <div className={styles.kitRow}>
                    <div>
                        <p>Normal</p>
                        <div className={styles.kitRow}>
                            <Numericbox placeholder="Default numericbox" defaultValue={0.5}/>
                            <Numericbox placeholder="Disabled numericbox" disabled={true} />
                        </div>
                    </div>
                    <div>
                        <p>Int Only</p>
                        <div className={styles.kitRow}>
                            <Numericbox placeholder="Default numericbox" defaultValue={1} intOnly/>
                        </div>
                    </div>
                </div>
                <Markdown className="markdown">### Combobox:</Markdown>
                <div className={styles.kitRow}>
                    <Combobox
                        placeholder="-- Default combobox --"
                        items={{ yes: "Coucou", no: "Ça va mon bro ?" }}
                    />
                    <Combobox
                        placeholder="-- Disabled combobox --"
                        items={{ yes: "Coucou", no: "Ça va mon bro ?" }}
                        disabled={true}
                    />
                </div>
                <Markdown className="markdown">### Checkbox:</Markdown>
                <div className={styles.kitRow}>
                    <Checkbox
                        label="Default checkbox"
                    />
                    <Checkbox
                        label="Disabled checkbox"
                        disabled={true}
                    />
                </div>
                <Markdown className="markdown">### Modal:</Markdown>
                <div className={styles.kitRow}>
                    <TestModal/>
                </div>
                <Markdown className="markdown">### Image Picker:</Markdown>
                <div className={styles.kitRow}>
                    <ImagePicker />
                </div>
            </div>
        </div>
    );
}