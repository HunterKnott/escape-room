import React from 'react';

export default function Chair({ screwDriverAcquired, chairOnTable, setChairOnTable }) {
    const handleClick = () => {
        if (screwDriverAcquired) {
            // Change this later to move chair anywhere
            alert("You managed to get the chair unscrewed and put it on the table.")
            setChairOnTable(true);
        } else {
            alert("The chair seems to be screwed to the floor.");
        }
    }

    return (
        <>
            {chairOnTable ? (
                <img
                    className="absolute w-[120px] h-[225px] top-[230px] left-[717px] z-10"
                    src="https://s3-alpha-sig.figma.com/img/1e5b/e541/9168f7cbf1ec694351dff76d26151e55?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a26VQ5bqX55Iy9U5FDMd3nFdwgDeC6g334IU1ikquzZP4Ul~tTSN67K4cjcEDE7B1PwEmqIbNhHlK8SDxN-Cp-YWDSBjcNBVzITEHst6jTck22tqIeJLSrYkjUStbXftvPwq4RPhsBCvi00Eq2EOLMyZ4bsUYD3sh-D5DQ7eGCrbqeUwAY4lqVW8US5hiyX4Kk9hJmTSXiOzYlT7dkR4J6xWcYpUi1NCnFIklrh9Zf47N2rtProCNqKKTBIgaaTZFaWsokXG9Rok56GxNE1c1J6D0B4R2f6MLd9FGq-cV~k-ZYvZ24KoJSw-fA8YF~7yr8VObaxYrMKHad7~dHX4SQ__"
                    alt="Chair"
                />
            ) : (
                <button onClick ={handleClick}>
                    <img
                        className="absolute w-[120px] h-[225px] top-[367px] left-[567px]"
                        src="https://s3-alpha-sig.figma.com/img/1e5b/e541/9168f7cbf1ec694351dff76d26151e55?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a26VQ5bqX55Iy9U5FDMd3nFdwgDeC6g334IU1ikquzZP4Ul~tTSN67K4cjcEDE7B1PwEmqIbNhHlK8SDxN-Cp-YWDSBjcNBVzITEHst6jTck22tqIeJLSrYkjUStbXftvPwq4RPhsBCvi00Eq2EOLMyZ4bsUYD3sh-D5DQ7eGCrbqeUwAY4lqVW8US5hiyX4Kk9hJmTSXiOzYlT7dkR4J6xWcYpUi1NCnFIklrh9Zf47N2rtProCNqKKTBIgaaTZFaWsokXG9Rok56GxNE1c1J6D0B4R2f6MLd9FGq-cV~k-ZYvZ24KoJSw-fA8YF~7yr8VObaxYrMKHad7~dHX4SQ__"
                        alt="Chair"
                    />
              </button>
            )}
        </>
    )
}