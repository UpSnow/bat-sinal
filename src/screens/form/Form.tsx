import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView} from 'react-native';
import { styles } from './FormStyle';
import{BatLogoForm} from '../../components/BatLogoForm'

export function Form() {

  const [nome, setNome]=useState('');
  const [telefone, setTelefone]=useState('');
  const [localizacao,setLocalizacao]=useState('');
  const [observacao, setObservacao]=useState('');

  const handleEnviar = () =>{
    if (!nome || !telefone || !localizacao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    Alert.alert(
      'Dados enviados com sucesso!',
      `Nome: ${nome}\nTelefone: ${telefone}\nLocalização: ${localizacao}\nObservação: ${observacao || 'Nenhuma'}`
    );

    setNome('');
    setTelefone('');
    setLocalizacao('');
    setObservacao('');
    
  }

  return (


    <ScrollView style={styles.container}>
      <View style ={styles.logoContainer}>
        <BatLogoForm/>
      </View>
      


      <Text style={styles.label}>Nome</Text>
      <TextInput 
      style={styles.input}
      placeholder='Digite seu nome'
      value={nome}
      onChangeText={setNome}
      />

      <Text style={styles.label}>Telefone</Text>
      <TextInput 
      style={styles.input}
      placeholder="(DDD) 90000-0000"
      value={telefone}
      onChangeText={setTelefone}
      keyboardType='phone-pad'
      />

      <Text style={styles.label} >Localização</Text>
       <TextInput 
       style={styles.input}
       placeholder="Sua localização"
       value={localizacao}
       onChangeText={setLocalizacao}
       />

      <Text style={styles.label}>Observações</Text>
       <TextInput 
       style={[styles.input, styles.textArea]}
       placeholder="Escreva uma observação..."
       value={observacao}
       onChangeText={setObservacao}
       multiline
       numberOfLines={4}
       />

       <>
       <Pressable 
        onPress={handleEnviar}
        style={styles.button}> 
            <Text style ={styles.buttonText}>Enviar</Text>
        </Pressable>
       </>


    </ScrollView>
  );
}