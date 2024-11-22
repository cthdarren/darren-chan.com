function GalleryCarousel({ picture_array }) {
    return (
        <div className="flex gap-3 overflow-scroll h-[400px] no-scrollbar snap-x snap-mandatory">
            {picture_array.map((link,index) => (
                <img src={link} id={index} alt={"screenshot " + index} className="block object-cover"/>
            ))}
        </div>
    );
}
export default GalleryCarousel;
