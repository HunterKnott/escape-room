import React from 'react';

export default function Painting({ chairOnTable, hintRevealed, setHintRevealed }) {
    const handleClick = () => {
        if (chairOnTable) {
            alert("The painting moves sideways. You found a piece of paper behind it with writing.");
            setHintRevealed(true);
        } else {
            alert("The painting is too high up");
        }
    }

    return (
        <>
            {hintRevealed ? (
                <img
                    className="absolute w-[339px] h-[220px] top-[65px] left-[500px]"
                    src="https://s3-alpha-sig.figma.com/img/c3a3/c4a6/deea01807dd79da2b252208ae9457d10?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S~-zloWK0mHg9NRuGshg~vf43Wo9fBIz~~hy0xotalT8pLrXsOpRtHttqzQlfCt~QuL9YmU7UMTKNlYd8o-BPP~uVEfKIANjDwaehlGSs~TzHUlzQyL3Cv64WDrlr~9229eBt7xN13A6797FYyGkImOddv6iXJb9aKUCydogzG6BkmKEybnuFpj2I-0~Kvu4Tr~HtZ1YG1MfOUJzJdkWmd0F36-HYhi37Gbwz1KergUbJuUy9Q1Xl2w7DTb1aTwheyKQ9j2iEXlZ3kfmU1TNaSdmyjfNXNug9fsuERbM26z~wPVL~1Qsxz-TuoyKgqklekoxSa4avgSzo1jkPNXk6g__"
                    alt="Painting"
                />
            ) : (
                <button onClick ={handleClick}>
                    <img
                        className="absolute w-[339px] h-[220px] top-[65px] left-[580px]"
                        src="https://s3-alpha-sig.figma.com/img/c3a3/c4a6/deea01807dd79da2b252208ae9457d10?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S~-zloWK0mHg9NRuGshg~vf43Wo9fBIz~~hy0xotalT8pLrXsOpRtHttqzQlfCt~QuL9YmU7UMTKNlYd8o-BPP~uVEfKIANjDwaehlGSs~TzHUlzQyL3Cv64WDrlr~9229eBt7xN13A6797FYyGkImOddv6iXJb9aKUCydogzG6BkmKEybnuFpj2I-0~Kvu4Tr~HtZ1YG1MfOUJzJdkWmd0F36-HYhi37Gbwz1KergUbJuUy9Q1Xl2w7DTb1aTwheyKQ9j2iEXlZ3kfmU1TNaSdmyjfNXNug9fsuERbM26z~wPVL~1Qsxz-TuoyKgqklekoxSa4avgSzo1jkPNXk6g__"
                        alt="Painting"
                    />
              </button>
            )}
        </>
    )
}