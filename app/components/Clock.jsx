import React from 'react';

export default function Clock() {
    return (
        <button onClick ={() => alert("The time is 6:07")}>
            <img
                className="absolute w-[120px] h-[120px] top-[123px] left-[1050px]"
                src="https://s3-alpha-sig.figma.com/img/7f46/3cba/9c8ab9ee3c6951824931fcf3abff71b4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2nxy4ffnvMU0-3tcT8eDMQj8Nr6pzTOdVDE6NjF0Yxw6CP6ftYTlEbcC12EUl6PzO1~0hUaNgpzlGOjHu-OMBIjBkP3HtBMBTaYhxuAyXoncxEOc-lEtNxk6ovgWsRAnfGatfzX17~vVM3NnZ1-43JAB56OD-QjZ7aG3FCIay8TYSG2CoC8q6FU6rhIPlJ4LULq3HDXkOfErecXdsX~LvvSMQQ-hTgOqtAz1cPWl~pZcouga22XZDGifKnuwRL6d-0e2K625j9QS01LYXVruChIG~N-~UbYc8bSo5uS3ZjGR7neBpOutzWmUmaeL39hLfz-WFOmREf1DxUgr18YXA__"
                alt="Clock" 
            />
        </button>
    )
}