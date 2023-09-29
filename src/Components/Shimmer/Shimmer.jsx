import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./Shimmer.css"
function Shimmer() {
    return (
        <>
            <SkeletonTheme color="#202020" highlightColor='#444' >
                <Skeleton height={300} duration={2}></Skeleton>
            </SkeletonTheme>
        </>
    );
}
export default Shimmer;