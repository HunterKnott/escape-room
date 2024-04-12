import React from 'react';

export default function Rug() {
    return (
        <button onClick ={() => alert("The rug is glued to the floor")}>
            <img
                className="absolute w-[932px] h-[260px] top-[500px] left-[274px]"
                src="https://s3-alpha-sig.figma.com/img/598b/3ba1/563f19322796fb14c3d2163c150eed23?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A6nqMliN8KOsrQEShdjQd-8gVYUabfHKy-P8YtLUOOdgcRFg20XZlGvAbd2Zz7iSZvVE5~RAwEtwNb5wXMbRKoz-ztYajmU~9xr8PhCuoMsIzD2yTJBVA0q8BC802bXmZIUks2aE5H22~yapsqy9GV99A740JVuoAvFM6RflZwEKHmnw49hfzz3FxFoTVwxtlLdTAOylAGEIT5HtdH8lqZcILAVJYDFN2xeuDn63OO-DH9iSdYfh8lJP~3T9jHNCG0gJPrHCjhzNAFcMXY06BvF-0xoZq8tcNPct45ZtY6NsxuTeCo2KVvfiSIE49y~4YIHrJLpx4aMhNx2IKgMWLA__"
                alt="Rug"
            />
        </button>
    )
}