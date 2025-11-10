import { useLocation } from 'react-router-dom';

function Analysis() {
    const location = useLocation();
    const path = location.pathname;

    function renderTitle() {
        if (path === "/" || path === "/introduction" || path === "/image") {
            return ("to start analysis")
        } else {
            return ("a.i. analysis")
        }
    }


    return (
        <div className="start__analysis">
            {renderTitle()}

            {path === "/results" ? (
                <div className="analysis__subtitle">
                    A. I. has estimated the following. <br/>
                    Fix estimated information if needed.
                </div>
            ) : <></>}

        </div>
    )
}

export default Analysis