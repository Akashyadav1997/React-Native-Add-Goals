import {
	Button,
	Image,
	Modal,
	StyleSheet,
	TextInput,
	View,
} from "react-native";

export const InputSection = (props) => {
	return (
		<Modal visible={props.showModal} animationType="slide">
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require("../assets/goal.png")} />
				<TextInput
					onChangeText={props.onChageHandler}
					style={styles.inputText}
					placeholder="Your Course Goal"
					value={props.enteredGoalText}
				/>
				<View style={styles.buttonCtn}>
					<View style={styles.button}>
						<Button title="Add Goal..." onPress={props.onClickHandler} />
					</View>
					<View style={styles.button}>
						<Button
							title="Close"
							color="#cd2b31"
							onPress={() => props.setShowModal(false)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		// marginBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: "grey",
		flex: 1,
        backgroundColor:"#1B4D3E"
	},
	inputText: {
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "grey",
		padding: 12,
		width: "80%",
		cursor: "pointer",
		marginRight: 8,
		marginBottom: 40,
        color:"#ffff",
        backgroundColor:"#8FBC8B"
	},
	buttonCtn: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
	},
	button: {
		width: "40%",
		marginHorizontal: 10,
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 15,
	},
});
