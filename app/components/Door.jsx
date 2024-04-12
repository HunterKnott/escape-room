import React from 'react';
import Link from 'next/link';

export default function Door({ key2Acquired }) {
    return (
        <>
            {key2Acquired ? (
                <Link href="/finish">
                    <button onClick={() => alert("The door opened!")}>
                        <img
                            className="absolute w-[230px] h-[337px] top-[175px] left-[300px]"
                            src="https://s3-alpha-sig.figma.com/img/6bd3/232f/bbf586ce746ce028249f7148ada806e3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPKpedy3ArbqE54Jtq4BoiCQIJBBHMR2U8BotzAUo8j2-UA~9sp2JUHm8rND3gtx6eC4bY-9AZsqIod8lOEl4t4TcegrbFU11btZ50aW-FgHaG0Bot14PmDhUPct5kFwsP7bCIWR6Y82AwHAbtIhIXs5K-Jsk4o3zySDANXC5qXTyxgQO5xQYR-SGJNUkju-2FOAvzq1nI0lptEk8agYxq5DiXmGvCea7YEvJVrLXyG3TNBE91rS~ZrJIc3y7fYV6ID1rAd-B5W3N9pgqBfCeS5iKyAqpWBN32DVkqjf3L-pv0Mq5P~KtTjtlsR0LzneYvM7JIi0JH3ME3yvWLjumw__"
                            alt="Door"
                        />
                    </button>
                </Link>
            ) : (
            <button onClick={() => alert("The door is locked.")}>
                <img
                    className="absolute w-[230px] h-[337px] top-[175px] left-[300px]"
                    src="https://s3-alpha-sig.figma.com/img/6bd3/232f/bbf586ce746ce028249f7148ada806e3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPKpedy3ArbqE54Jtq4BoiCQIJBBHMR2U8BotzAUo8j2-UA~9sp2JUHm8rND3gtx6eC4bY-9AZsqIod8lOEl4t4TcegrbFU11btZ50aW-FgHaG0Bot14PmDhUPct5kFwsP7bCIWR6Y82AwHAbtIhIXs5K-Jsk4o3zySDANXC5qXTyxgQO5xQYR-SGJNUkju-2FOAvzq1nI0lptEk8agYxq5DiXmGvCea7YEvJVrLXyG3TNBE91rS~ZrJIc3y7fYV6ID1rAd-B5W3N9pgqBfCeS5iKyAqpWBN32DVkqjf3L-pv0Mq5P~KtTjtlsR0LzneYvM7JIi0JH3ME3yvWLjumw__"
                    alt="Door"
                />
            </button>
            )}
        </>
    )
}