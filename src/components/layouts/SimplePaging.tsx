import SimplePagingClient from "./SimplePagingClient";

export default function SimplePaging(props: { children: JSX.Element[] }) {


    return (
        <SimplePagingClient>{props.children}</SimplePagingClient>
    );
}
