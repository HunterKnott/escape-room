'use client';

import React from 'react';
import { useState } from 'react';

export default function Cabinet({ key1Acquired, setBottleAcquired }) {
    const [lockVisible, setLockVisible] = useState(true);

    const handleClick = () => {
        if (key1Acquired && lockVisible) {
            alert("The key opened the lock. You found a bottle of cleaner.");
            setLockVisible(false)
            setBottleAcquired(true)
        } else if (key1Acquired) {
            alert("There's nothing else in this cabinet.")
        } else {
            alert("The cabinet has a lock on it.")
        }
    }

    return (
        <div className="absolute w-[300px] h-[300px] top-[255px] left-[920px]">
            <button onClick ={handleClick}>
                <img
                    className="absolute w-[300px] h-[300px] top-[0px] left-[0px]"
                    src="https://s3-alpha-sig.figma.com/img/057c/a2a2/ae53aea82299dbae30fe6f151bf9af81?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qA76jkGxDS8zVyLnjGxbH3L8DuEp0lm6vssyRc-p8ZMoZsjGLka6k3o3YaNUaP0PfLuSfRhxiMe7VsA3rHpMVCEuugM1m3bTmVFp8QBmOfec11g8uaio2PiMqJs4HUN1KLnbotFlQ7GTMzBotAdVFol1R3P3qQfAdWt209~JKRzSFDuEuRQgl3Qeai-ETaqPr56gSJR7cPWjGJ7-eVSiZN3f1YKkvnIJxZq4BAwqYmdgYNk7TZOIAckOACI12fd5HTodMLrq1qkurZZTMwUpLTat2suihWrDFZHzachBii-B6Do5pe~1o3pLXRWo6YZBChsW9B5ZHfZUQ3wNZ1VlLA__"
                    alt="Cabinet"
                />
            </button>
            {lockVisible && (
                <button onClick ={handleClick}>
                    <img
                        className="absolute w-[40px] h-[60px] top-[110px] left-[132px]"
                        src="https://s3-alpha-sig.figma.com/img/5cda/a88e/9d8db73ebef57d2f871ff38cb38d6374?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M2CMFWRFrXVhoWLp2eNbxQacSmFiyAIM4gKiv6KOoWG0TGkw9jnt~f-kBuNdMvtnYU0Zm2isdaD1HtIL~4GHIwhRlFEhdF~uv2SMrLkxk5ltskLjzsX0EDE3GISNr00lHU3aIgZQzqV9TDwS3sqOcK-hhv~fLe14pMtDYsPQMUIQvnFG8v-nKLjQJFJXFWx30UiSh3KUAsgXEULxMQ5xXGu8DNORLY-XyT~caBb1p5a86Fe~hxtXqteejkXl6Ywvrr~~FTV8yNTWtFjbl09Fa~FZbbR2M-Ch3FdQ2kMnQHt-780sl254bXwybOcBSIP0j8VrZy2wSYtGI9sw7zzsvQ__"
                        alt="Cabinet Lock"
                    />
                </button>
            )}
        </div>
    )
}