function WorkExpCard({ title, role, duration, description, languages }) {
    return (
        <div className="flex flex-col py-10">
                <div className="flex flex-col sm:flex-row ">
                    <div className="sm:mr-10 grow sm:self-start sm:text-left text-right">{duration}</div>
                    <div className="text-bold text-xl lg:text-3xl xl:text-5xl">{title}</div>
                </div>
                <div className="">{role}</div>
                <div className="pt-5 sm:pl-40">{description}</div>
                <div className="pt-5">{languages}</div>
            </div>
    );
}

export default WorkExpCard;