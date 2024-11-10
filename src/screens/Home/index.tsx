import {
  Alert,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Atenção!",
        "Já existe um participante na sua lista com este nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
    Keyboard.dismiss();
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Atenção!", "Deseja remover o participante?", [
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          );
          Alert.alert("Deletado!");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.eventName}>Nome do evento</Text>

        <Text style={styles.eventDate}>Sexta, 8 de Novembro de 2024.</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
