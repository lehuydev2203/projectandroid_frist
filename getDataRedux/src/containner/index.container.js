import React from 'react';
import {View, Text , FlatList} from 'react-native';
import {connect } from 'react-redux';
import  {FetchData}  from '../action/FetchAction';

class ListData extends React.Component{
    componentDidMount(){
        this.props.dispatch(FetchData());
    }
    render(){
        const {errors, loading, data} = this.props;
        console.log(data);
        if(errors){
            return "<View><Text>Error ! {errors.message}</Text></View>";
        }

        if(loading){
            return "<View><Text>Loadding ...</Text></View>";
        }

        return(
            <View style={{flex:1,flexDirection: 'row' ,justifyContent: 'center'}}>
                <FlatList
                    data={data}
                    renderItem={({item}) =>
                        <View>
                            <Text>{item.image_id}</Text>
                            <Text>{item.image_url}</Text>
                            <Text>{item.last_update_date}</Text>
                        </View>  }
                    numColumns={1}
                />
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        data:state.FetchData
    }
};

export default connect(mapStateToProps,{FetchData})(ListData);