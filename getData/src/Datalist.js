import React  from  'react';
import {View, Text , FlatList} from 'react-native';
import {connect } from 'react-redux';
import  Getdata   from './reducer/dataReducer';

class Datalist extends React.Component {
    componentDidMount(){
        console.log("component did mount");
        this.props.dispatch(Getdata());
    }

    render (){
        console.log("render data list ");
        const { errors , loading , data } =this.props;

        if(errors){
            return "<View><Text>Error ! {errors.message}</Text></View>";
        }

        if(loading){
            return "<View><Text>Loadding ...</Text></View>";
        }
        console.log("render Flatlist");
        return (

            <View>
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

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps)(Datalist);