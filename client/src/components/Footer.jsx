function Footer() {
    const date = new Date()
    return (
        <footer>
            <div className="w-full flex flex-col mx-auto p-2">
                <div className="flex items-center justify-between px-2">
                    <p>Copyright &copy; {date.getFullYear()} SKI JEWELERS</p>
                    <p>Site Design by Hunter Muratore</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer