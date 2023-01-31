import { useState, useEffect } from "react";
export default function UsePromise(promiseCreator, deps){
    // 상태관리
    const [loding, setLoding] = useState(false); // 대기
    const [resolved, setResolved] = useState(null); // 완료
    const [error, setError] = useState(null); // 실패

    useEffect(() =>{
        const process = async () =>{
            setLoding(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch (e){
                setError(e);
            }
            setLoding(false);
        };
        process();
    }, deps);

return [loding, resolved, error];
}