import { connect } from 'react-redux';

import { 
    selectTopCategory
}  from '../../redux/actions/index'

import Categories from './categories.jsx';

const mapDispatchToProps = (dispatch) => ({
    selectTopCategory: (any) => dispatch(selectTopCategory(any)),
});

export default connect(null, mapDispatchToProps)(Categories);