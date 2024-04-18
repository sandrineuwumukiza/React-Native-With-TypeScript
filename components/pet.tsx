import { View } from "react-native"
import { Text } from "react-native"

type petProps ={petName: {
    firstName:string,
    lastName:string
},
type:string

}
export const Pet = (props:petProps) => {
    const {firstName, lastName} =props.petName
    return(
<View>
    <Text>You own a pet named {firstName} {lastName}.</Text>
    <Text>The pet is {props.type}.</Text>
</View>
    )
}