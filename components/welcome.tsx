import { Text, View } from "react-native"


type welcomeProps = {
    name:string,
    age:number,
    gender:boolean
}
export default function Welcome(props:welcomeProps){
    return(
    <View>
<Text>Hello {props.name}!</Text>
<Text>You are age  {props.age}</Text>
<Text>You are a {props.gender ? "man":"woman"}</Text>
    </View>
    
)}