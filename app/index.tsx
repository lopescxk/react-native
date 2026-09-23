import { ScrollView, StyleSheet, Text, View, Image} from "react-native";

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Care Bears</Text>
      </View>

      <View style={styles.main}>
        <Image
          source={ require("../assets/urso.jpeg") }
          style={styles.image}
        />
        <Text style={styles.subtitle}>Prólogo</Text>
        <Text style={{ fontSize: 20, marginTop: 30, textAlign: "justify", fontFamily: "arial", color: "#803a3a",}}>
          Era uma vez, em um lugar mágico chamado Reino dos Ursinhos Carinhosos, onde viviam adoráveis ursinhos coloridos. Cada ursinho tinha uma personalidade única e um símbolo especial em sua barriga que representava seu poder de espalhar amor e alegria pelo mundo.
        </Text>
        <Text style={{ fontSize: 20, marginTop: 20, textAlign: "justify", fontFamily: "arial", color: "#803a3a", }}>
          Um dia, os Ursinhos Carinhosos receberam uma mensagem urgente de um amigo distante chamado Sr. Coração. Ele estava enfrentando um grande problema em sua cidade e precisava da ajuda dos ursinhos para trazer felicidade de volta à sua comunidade.
        </Text>
        <Text style={{ fontSize: 20, marginTop: 20, textAlign: "justify", fontFamily: "arial", color: "#803a3a",}}>
          Determinados a ajudar, os Ursinhos Carinhosos se reuniram e decidiram embarcar em uma aventura emocionante para salvar o dia. Com seus corações cheios de amor e coragem, eles partiram em busca do Sr. Coração, prontos para enfrentar qualquer desafio que encontrassem pelo caminho.
        </Text> 
      </View>

       <View> 
        <Text style={styles.subtitle}>Grumpy</Text>
        <Text style={styles.subtitle1}>Bear</Text>
          <Image
          source={ require("../assets/ursoazul.jpeg") }
          style={styles.image}
        />
        <Text style={{ fontSize: 20, marginTop: 30, textAlign: "justify", fontFamily: "arial", color: "#803a3a",}}>
          Grumpy Bear era um ursinho azul com uma expressão sempre carrancuda. Apesar de sua aparência mal-humorada, ele tinha um coração bondoso e se preocupava profundamente com seus amigos. Seu símbolo na barriga era uma nuvem cinza com um raio, representando sua habilidade de trazer chuva para ajudar as plantas a crescerem.
        </Text>
        <Text style={{ fontSize: 20, marginTop: 20, textAlign: "justify", fontFamily: "arial", color: "#803a3a",}}>
          Grumpy Bear era conhecido por seu jeito rabugento, mas ele sempre estava disposto a ajudar quando alguém precisava. Ele acreditava que, mesmo nos dias mais nublados, havia sempre uma oportunidade de espalhar alegria e fazer a diferença na vida das pessoas.
        </Text> 
       </View>

              <View> 
        <Text style={styles.subtitle2}>Tenderheart</Text>
        <Text style={styles.subtitle3}>Bear</Text>
          <Image
          source={ require("../assets/ursomarrom.jpeg") }
          style={styles.image1}
        />
        <Text style={{ fontSize: 20, marginTop: 30, textAlign: "justify", fontFamily: "arial", color: "#803a3a",}}>
          Tenderheart Bear era um ursinho marrom com um coração cheio de amor e compaixão. Ele era conhecido por sua natureza gentil e por sempre estar disposto a ajudar os outros. Seu símbolo na barriga era uma flor brilhante, representando sua habilidade de trazer alegria e cura para todos os que o rodeavam.
        </Text>
        <Text style={{ fontSize: 20, marginTop: 20, textAlign: "justify", fontFamily: "arial", color: "#803a3a",}}>
          Tenderheart Bear acreditava que o amor é a força mais poderosa do mundo e que, com dedicação e empatia, podia transformar até os dias mais sombrios em momentos de beleza e esperança.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f38f8f",
    paddingBottom: 40,
  },

  header: {
    width: "1000%",
    height: 80,
    backgroundColor: "#d36565",
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  main: {

  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#0c4247",
    marginTop: 5,
    position: "absolute",
    fontFamily: "arial",
  },

  subtitle: {
    fontSize: 35,
    color: "#aa494dd5",
    position: "absolute",
    top: 135,
    fontFamily: "arial",
    fontWeight: "bold",
  },

    subtitle1: {
    fontSize: 35,
    color: "#aa494dd5",
    position: "absolute",
    top: 175,
    fontFamily: "arial",
    fontWeight: "bold",
    maxWidth: 200,
    left: 20,
  },

  subtitle2: {
    fontSize: 35,
    color: "#aa494dd5",
    position: "absolute",
    top: 130,
    right: 1,
    fontFamily: "arial",
    fontWeight: "bold",
  },

  subtitle3: {
    fontSize: 35,
    color: "#aa494dd5",
    position: "absolute",
    top: 160,
    fontFamily: "arial",
    fontWeight: "bold",
    maxWidth: 200,
    right: 60,
  },

  image: {
    width: 130,
    height: 130,
    borderRadius: 1000,
    marginTop: 100,
    marginLeft: 190,
  },

  image1: {
    width: 130,
    height: 130,
    borderRadius: 1000,
    marginTop: 100,
    marginLeft: 15,
  },  
});