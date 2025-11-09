import { useLocation } from 'react-router-dom';

function Analysis() {
    const location = useLocation();
    const path = location.pathname;

    function renderTitle() {
        if (path === "/" || path === "/") {
            return ("to start analysis")
        } else {
            return ("a.i. analysis")
        }
    }


    return (
        <div className="start__analysis">
            {renderTitle()}
        </div>
    )
}

export default Analysis