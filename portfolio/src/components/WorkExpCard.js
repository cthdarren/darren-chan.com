function WorkExpCard({ title, role, duration, description, languages }) {
    return (
        <div className="flex flex-col py-10">
            <div class="treenode absolute border-netural-700 bg-white -ml-[37px] lg:-ml-[53px] 2xl:-ml-[101px] flex size-4 items-center justify-center rounded-full border shadow-sm">
                <div class="size-2 rounded-full  border border-neutral-400 bg-neutral-400"></div>
            </div>
            <div className="flex flex-col sm:flex-row ">
                <div className="sm:mr-10 grow sm:self-start sm:text-left text-right">
                    {duration}
                </div>
                <div className="sm:-mt-2 mb-2 font-light text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl">{title}</div>
            </div>
            <div className="">{role}</div>
            <div className="pt-5 md:pl-40">{description}</div>
            <div className="pt-5">{languages}</div>
        </div>
    );
}

export default WorkExpCard;
