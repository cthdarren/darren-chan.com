function WorkExpCard({ title, role, duration, description, languages }) {
    return (
        <div className="flex">
        <div className="rounded p-10 w-8/12">
            <div className="text-bold text-2xl">{title}</div>
            <div className="text-md">{role}</div>
            <div className="text-md">{duration}</div>
            <div className="text-md">{description}</div>
            <div className="text-md">{languages}</div>
        </div>
            <div>
            </div>
        </div>
    );
}

export default WorkExpCard;
