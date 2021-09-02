import './Search.scss';
import HistorySearchList from '../HistorySearchList/HistorySearchList'
import HistorySearchItem from '../HistorySearchItem/HistorySearchItem';
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux';
import {onAddHistorySearch} from './../../../actions/index'

function Search(props) {

    const {handleSubmit, register, reset} = useForm();
    const {history} = props;

    function onSubmit(data) {
        props.onAddHistorySearch(data.name);
        reset();
    }

    function showHistory(history) {
        if (history.length > 0) {
            return history.map((history, index) => {
                return (
                    <HistorySearchItem
                        key={index}
                        history={history}
                    />

                )
            })
        }
    }

    return (
        <div className="header-search">
            <div className="header-search-wrap">
                <form className="header-search-form" onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                    <input 
                        type="text" 
                        className="header-search-input" 
                        placeholder="Nhập để tìm kiếm sản phẩm" 
                        {...register('name', {required: true})}
                        />
                    <HistorySearchList>
                        {showHistory(history)}
                    </HistorySearchList>
                </form>
            </div>
            <button className="header-search-btn">
                <i className="header-search-btn-icon fas fa-search"></i>
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        history: state.historySearch,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddHistorySearch: (name) => {
            dispatch(onAddHistorySearch(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);