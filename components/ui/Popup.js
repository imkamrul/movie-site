import Image from "next/image";

const Card = ({ setClose }) => {
    return (
        <div
            className={`lg:p-10 p-4 bg-white rounded-lg shadow-[11px_15px_32px_rgba(99,91,255,0.15)] text-center`}
        >
            <div className="text-center text-black">
                <div className="mb-5">
                    <Image
                        alt="footer logo"
                        width={183}
                        height={32}
                        src="logo.png"
                    />
                </div>

                <h3 className="text-xl mb-2"> Welcome to FundedNext!</h3>
                <p>
                    This is the official preview of FundedNext. <b>We will be
                    launching on 18th March</b>. You can learn about our funding
                    models, rules, profit share model, meet the FundedNext team,
                    and more. If you have any questions, please contact our
                    support.
                </p>

                <div className="mt-8">
                    <button
                        className={`bg-purple leading-[1] py-4 md:py-5 px-10 text-lg duration-300 inline-block text-white font-bold rounded-md hover:scale-110`}
                        onClick={setClose}
                    >
                        Explore Preview
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
