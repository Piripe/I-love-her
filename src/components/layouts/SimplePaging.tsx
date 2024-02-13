import SimplePagingClient from "./SimplePagingClient";

export default function SimplePaging(props: { pages: JSX.Element[] }) {


    return (
        <SimplePagingClient pages={props.pages}/>
    );
}
