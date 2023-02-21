import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { RegisterContainer, FormContainer, PinkButton, HeaderSpan, FormDiv } from './styled'


export const RegisterForm = ({ }) => {

    const { userRegister } = useContext(UserInfoContext)

    const FormDemands = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string(),
        password: yup.string().required('Senha obrigatória')
            .matches(/[a-z] || [A-Z]/, "Deve conter ao menos 1 letra")
            .matches(/(\d)/, "Deve conter ao menos 1 número")
            .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
            .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
            .required('Email obrigatório'),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Confirmação de senha deve ser igual a senha").required('Confirmação de senha é obrigatória'),
        bio: yup.string().required('Preencha o campo'),
        contact: yup.string().required('Preencha o campo'),
        course_module: yup.string().required()
    })

    const navigate = useNavigate()
    const back = () => navigate(-1)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormDemands)
    })


    const handleForm = event => {
        event.preventDefault()

        navigate('/')
    }

    return <RegisterContainer>
        <HeaderSpan>
            <h1>Kenzie Hub</h1>
            <button onClick={back}>Voltar</button>
        </HeaderSpan>
        <FormContainer onSubmit={handleSubmit(userRegister)}>
            <form action="">
                <FormDiv>
                    <h2>Crie sua conta</h2>
                    <p>Rápido e grátis, vamos nessa</p>
                </FormDiv>
                <label htmlFor="">Nome</label>
                <input placeholder="Digite aqui seu nome" {...register('name')} />
                {errors.name?.message}
                <label htmlFor="">Email</label>
                <input placeholder="Digite seu email" type="email" {...register('email')} />
                {errors.email?.message}
                <label htmlFor="">Senha</label>
                <input placeholder="Digite sua senha" type="password" {...register('password')} />
                {errors.password?.message}
                <label htmlFor="">Confirmar senha</label>
                <input placeholder="Digite novamente sua senha" type="password"{...register('confirmPassword')} />
                {errors.confirmPassword?.message}
                <label htmlFor="">Bio</label>
                <input type="text" placeholder="Fale sobre você" {...register('bio')} />
                {errors.bio?.message}
                <label htmlFor="">Contato</label>
                <input type="text" placeholder="Opção de contato"{...register('contact')} />
                {errors.contact?.message}
                <label htmlFor="">Selecionar módulo</label>
                <select name="" id="registerSelect" {...register('course_module')}>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                <PinkButton type="submit">Cadastrar</PinkButton>
            </form>


        </FormContainer>
    </RegisterContainer>
}




