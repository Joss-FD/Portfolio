function Header(props: { title: string }) {
    return (
        <div className="w-full border-b-2 border-white">
            <span id={props.title.toLocaleLowerCase()} className="text-black bg-white font-bold text-3xl py-1 px-2">{props.title}</span>
        </div>
    );
}

export default Header;