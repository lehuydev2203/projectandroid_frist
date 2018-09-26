import React ,{Component} from 'react';
import {Text,View,Button,Alert,TextInput,StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import DatePicker from 'react-native-datepicker';


class App extends Component {
    constructor(){
        super();
        this.state={
            account:'',
            password:'',
            name:'',
            date:'',
            email:''

        }
    }
    static navigationOptions = ({
        header:null
    })
    inputAccount=(text)=>{
        this.setState({account:text})
    }
    inputPassword=(text)=>{
        this.setState({password:text})
    }
    inputName=(text)=>{
        this.setState({name:text})
    }
    inputDate=(date)=>{
        this.setState({date:date})
    }
    inputDate=(email)=>{
        this.setState({email:email})
    }

    login = (account,password) => {
        if(this.state.account==''){
            Alert.alert('Vui lòng nhập tài khoản');
        }else if(this.state.password==""){
            Alert.alert('Vui lòng nhập mật khẩu');
        }else{
            console.log("ok ne");
            //điều hướng trang và truyền param
            this.props.navigation.navigate('User',{acc : account ,pass:password })
        }
    }

    render(){
        return(
            <View style={styles.containner}>
                <View>
                    <Text style={styles.header}>Login</Text>
                </View>
                <View>
                    {/*Account*/}
                    <TextInput
                        style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder=" Your Acount "
                    placeholderTextColor="gray"
                    autoCapitalize="none"
                    onChangeText={this.inputAccount}
                    />

                    {/*Password*/}
                    <TextInput
                        style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={this.inputPassword}
                    />

                    {/*Name*/}
                    <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onChangeText={this.inputName}
                    />

                    {/*Email*/}
                    <View>
                        <Text>Email : </Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Name"
                            secureTextEntry={true}
                            autoCapitalize='none'
                            onChangeText={this.inputEmail}
                        />
                    </View>

                    {/*date*/}
                    <View>
                        <Text style={{marginLeft:20}}>Birthday</Text>
                        <View style={{alignSelf: 'center'}}>
                            <DatePicker
                                mode="date"
                                format="YYYY-MM-DD"
                                minDate="1918-05-01"
                                maxDate="2028-06-01"
                                showIcon={false}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"

                                customStyles={{
                                    dateInput: {
                                        marginBottom:20,
                                        borderRadius:3
                                    }
                                }}
                                onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </View>
                    </View>

                    {/*Submit*/}
                    <Button
                        title="Login"
                        onPress={()=>this.login(
                            this.state.account,
                            this.state.password
                        )}
                    />
                </View>
                <View>
                    <Text style={styles.header}>&copy;Project Android - Lê Huy</Text>
                </View>
            </View>
        );
    }
}

class Acc extends Component {



    static navigationOptions={
        title:'Đây là trang admin',
    }
    render(){
        const { navigation }=this.props;
        const user=navigation.getParam('acc','some default value');
        const pass=navigation.getParam('pass','some default value');
        return(
            <View style={styles.container}>
                <Text>{JSON.stringify(user)}</Text>
                <Text>{JSON.stringify(pass)}</Text>
                <Button
                    title='Back'
                    onPress={()=>this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    date:{
        borderRadius: 10
    },
    containner:{
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-between'/*để chia header and footer nằm trên cùng và dưới cùng */
    }
    ,
    header:{
        height:50,
        fontWeight:"bold",
        textAlign:'center',
        backgroundColor:'aqua',
        lineHeight:50,
        color:'white'
    },
    input:{
        height:40,
        padding:5,
        marginLeft:5,
        marginRight:5,
        marginBottom:10,
        borderColor:"gray",
        borderWidth: 1,
        borderRadius:3,
    },
    button:{
        height:40,
        padding:5,
        marginLeft:5,
        marginRight:5,
        marginBottom:10,
    }
});

export default createStackNavigator({
    Login:{
        screen:App
    },
    User:{
        screen:Acc,
    }
});