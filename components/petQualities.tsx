import { Text, View } from "react-native";

type PetQualityProps = {
    qualities:{
        qualOne:string,
        qualitTwo:string,
        qualityThree:string,
        age:number
    }[]
}

export const PetQuality = (props:PetQualityProps) => {
    return(
        <View>
            { props.qualities.map((e, i) => {
                if(i === 0) {
                    return <Text>Your pet is {e.qualOne}, {e.qualitTwo}, {e.qualityThree} and is {e.age} years old</Text>;
                }
                return <Text>Also, your pet is {e.qualOne}, {e.qualitTwo}, {e.qualityThree}, and is still {e.age} years old</Text>;
            })}
        </View>
    );
}
