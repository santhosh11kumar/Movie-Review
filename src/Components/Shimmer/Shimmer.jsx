import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./Shimmer.css"
function Shimmer() {
    return (
        <>
            <SkeletonTheme color="#fcfcfc" highlightColor='#f5f5f5' baseColor="#f7f2f2" >
                <Skeleton height={300} duration={2} count={5}></Skeleton>
            </SkeletonTheme>
        </>
    );
}
export default Shimmer;