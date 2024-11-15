"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import Header from "../components/Header";

const NotFound: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        gsap.fromTo(
            ".notFound",
            {
                opacity: 0,
                y: -20,
            },
            {
                opacity: 1,
                y: 20,
                delay: 0.5,
            }
        );

        const redirectTimer = setTimeout(() => {
            router.push("/");
        }, 3000); // Redirect after 3 seconds

        return () => clearTimeout(redirectTimer);
    }, [router]);

    return (
        <>
            <Header btnOn={true} />
            <div className="fixed notFound opacity-0 flex justify-center items-center w-full h-[100vh] flex-col">
                <img
                    alt="notFound"
                    src="preffered-cross.svg"
                    className="opacity-90 mb-3"
                />
                <h1
                    style={{ fontSize: "clamp(40px, 2px + 6.5625vw, 70px)" }}
                    className="text-[86px] opacity-90 tracking-[-0.07em] leading-[0.945]"
                >
                    Page Not Found
                </h1>

                <p className="opacity-60 tracking-[-0.07em] leading-[0.945] mt-5">
                    Redirecting...
                </p>
                <div className="w-[20px] h-[20px] mt-[10px] border-solid border black__diamond--notFound transition-all duration-500 justify-center border-black items-center rotate-45 flex relative">
                    <div className="w-[14px] h-[14px] bg-black ease-in-out duration-500"></div>
                </div>
            </div>
        </>
    );
};

export default NotFound;