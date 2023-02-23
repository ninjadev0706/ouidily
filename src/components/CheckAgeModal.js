import { useMediaQuery } from "react-responsive";

const CheckAgeModal = ({closeModal}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1000px)",
    });

    return (
        <div className="agemodal font-spirit">
            <div className="">
                <div className="d-flex justify-center">
                    <p className={`${isDesktopOrLaptop ? 'text-120' : 'text-60'} font-spirit`} data-aos="zoom-in" data-aos-duration="2000">
                        oui’dily
                    </p>
                </div>
                <div className="d-flex justify-center text-center pb-40 ">
                    <p className={`${isDesktopOrLaptop ? 'text-20' : 'text-20'} font-spirit`}>We need to check your<br /> ID Are you 21+?</p>
                </div>
                <div className="d-flex justify-center pb-40 ">
                    <div className="d-flex gap-10">
                        <button className="age-btn" onClick={closeModal}>Yes</button>
                        <button className="age-btn" onClick={closeModal}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckAgeModal;
