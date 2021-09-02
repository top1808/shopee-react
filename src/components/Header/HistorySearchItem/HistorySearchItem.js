import './HistorySearchItem.scss';

function HistorySearchItem(props) {
    const { history } = props;


    return (
        <li className="header-search-item">
            <a>{history}</a>
        </li>
    )
}


export default HistorySearchItem;