'use client';
import {useParams} from 'next/navigation';

export default () => {
    const params = useParams();
    console.log(params);
    return <div> dynamic id {params.dynamicId} </div>
}