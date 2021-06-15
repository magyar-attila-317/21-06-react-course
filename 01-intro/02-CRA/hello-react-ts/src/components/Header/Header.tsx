interface HeaderProps {
    text: string,
    person?: {
        name: string,
        age?: number
    },

    callback(param: string): void
}

const Header = (props: { text: string }) => {

    return <div>
        <h1>{props.text}</h1>
    </div>;
};

export default Header;
