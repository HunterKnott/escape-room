'use client';

import React from 'react';
import { useState } from 'react';

export default function Dirt({ bottleAcquired, setScrewDriverAcquired }) {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        if (bottleAcquired) {
            alert("You managed to wipe the dirt away with the cleaner. You found a screw driver.")
            setVisible(false);
            setScrewDriverAcquired(true);
        } else {
            alert("There's some dirt on the rug, maybe there's a way to clean it.")
        }
    }

    return (
        <>
            {visible && (
                <button onClick ={handleClick}>
                    <img
                        className="absolute w-[132px] h-[85px] top-[621px] left-[922px]"
                        src="https://s3-alpha-sig.figma.com/img/4e13/8e10/9723e63de8e6bd31e7928ef415354983?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YkwVcrJNFqOHde1su9R1zh2CAjDRBQOOIO0zHFoLF382stK7bl-mHG1Kp1-TX8P6Qsqha4oJYNPLNDB3E1ljE~g~vf8DIbNIH25SPG5~YFZ5Fycid5eLxUuj5r1ikuMDy88QbbMLmTgS4FUBEEDZGaSAsMJd4s-o-JRzXxWY~i2VAc7DU5JdYXB9vP~azPptslBeKvBbxfLKdz1jZY34-OxIx~x1kQeJdHMdxf6Tm2NuapqRd0esaSkS~-u9picWu3rPApRYRgpxusgS4r0P52WWtsL5q8T3RzOiAelyjSO3OQZkC6AA-wVOAxdjI8ACz1zGbuHW6tDXnKkohfU9UA__"
                        alt="Dirt"
                    />
                </button>
            )}
        </>
    )
}