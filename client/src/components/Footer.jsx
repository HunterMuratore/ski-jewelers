function Footer() {
    const date = new Date()
    return (
        <footer>
            <div className="w-full flex flex-col mx-auto pt-10 p-3">
                <div className="flex flex-col items-center">
                    <p>&copy; {date.getFullYear()} SKI JEWELERS</p>
                    <p>Site Design by Hunter Muratore</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer