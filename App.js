// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
	Button,
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { InputSection } from "./component/InputSection";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [goalList, setGoalList] = useState([]);
	const [showModal, setShowModal] = useState(false);
	function onChageHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	function onClickHandler(e) {
		console.log(enteredGoalText);
		if (enteredGoalText !== "") {
			setGoalList((prevValue) => [
				...prevValue,
				{
					text: enteredGoalText,
					id: Math.random().toString(),
				},
			]);
			setEnteredGoalText("");
			setShowModal(false);
			console.log(goalList);
		}
	}
	function deleteItems(id) {
		console.log(id);
		setGoalList(
			goalList.filter((item) => {
				return item.id.toString() !== id.toString();
			})
		);
	}
	return (
		<View style={styles.appContainer}>
			<Button
				title="Add New Goal"
				color="#004953"
				onPress={() => setShowModal(true)}
			/>
			<InputSection
				onChageHandler={onChageHandler}
				onClickHandler={onClickHandler}
				enteredGoalText={enteredGoalText}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goalList}
					renderItem={(itemData) => {
						return (
							<Pressable onPress={() => deleteItems(itemData.item.id)}>
								<View key={itemData.item.id}>
									<Text style={styles.goals}>{itemData.item.text}</Text>
								</View>
							</Pressable>
						);
					}}
					alwaysBounceVertical={false}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	appContainer: {
		padding: 50,
		marginTop: 50,
		flex: 1,
	},

	goalsContainer: {
		marginTop: 10,
		flex: 5,
	},
	goals: {
		backgroundColor: "#32de84",
		color: "#fff",
		padding: 10,
		borderRadius: 5,
		fontWeight: "700",
		fontSize: 20,
		marginBottom: 5,
	},
	noGoals: {
		backgroundColor: "grey",
		color: "#fff",
		padding: 10,
		borderRadius: 5,
		fontWeight: "700",
		fontSize: 20,
	},
});
