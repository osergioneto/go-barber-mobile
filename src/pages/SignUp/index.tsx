import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPasswordButton,
  ForgotPasswordText,
  BackToLogonButton,
  BackToLogonButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Password" />

            <Button onPress={() => console.log('clicado')}>Entrar</Button>

            <ForgotPasswordButton
              onPress={() => console.log('clicado ForgotPasswordButton')}
            >
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToLogonButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={20} color="#f4ede8" />
        <BackToLogonButtonText>Voltar para logon</BackToLogonButtonText>
      </BackToLogonButton>
    </>
  );
};

export default SignUp;
