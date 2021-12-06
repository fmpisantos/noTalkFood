import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default function Topbar(props) {

    const emptyComponent = () => {
        return(
        <TouchableOpacity
            style={(props.styles.centerButton)}
            disabled
            >
            </TouchableOpacity>
            )
    }

	return (
        <>
            <View style={props.styles.topButtonContainer}>
                <View style={props.styles.row}>
                    <View style={[props.styles.width10]}>
                        <View style={props.styles.center} >
                            {props.left || emptyComponent()}
                        </View>
                    </View>
                    <View style={props.styles.width80}>
                        <View style={props.styles.center} >
                            {props.center || emptyComponent()}
                        </View>
                    </View>
                    <View style={props.styles.width10}>
                        <View style={props.styles.center} >
                            {props.right || emptyComponent()}
                        </View>
                    </View>
                    <View style={props.styles.spacing2} />
                </View>
            </View>
            <View style={props.styles.spacing05} />
        </>
	);
}
