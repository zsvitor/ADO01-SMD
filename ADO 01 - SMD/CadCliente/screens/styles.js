import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#6495ED', // Cor de fundo leve
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff', // Fundo branco para campos de entrada
    width: '30%'
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 50, // Canto arredondado para botões
    width: '5%',
    backgroundColor: '#696969',
    color: '#fff'
  },
  header: {
    backgroundColor: '#000' // Cor de fundo da barra superior
  },
  title: {
    color: '#fff' // Cor do texto da barra superior
  },
  section: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Foto circular
    backgroundColor: '#ddd' // Cor de fundo para área de foto
  },
});