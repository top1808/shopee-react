import './HistorySearchList.scss';

function HistorySearchList(props) {
    return (
        <div className="header-search-history">
            <h3 className="header-search-heading">Lịch sử tìm kiếm</h3>
            <ul className="header-search-list">
                {props.children}
            </ul>
        </div>
    )
}


export default HistorySearchList;