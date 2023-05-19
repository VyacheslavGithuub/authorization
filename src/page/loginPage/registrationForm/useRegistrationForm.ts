import React, { useState } from "react";
import { userApi } from "../../../store/services/userServices";
import getFormValues from "../../../utils/getFormValues";

const useRegistrationForm = () => {
  const [errorPassword, setErrorPassword] = useState("Repeat password");
  const [registerUser, { error, isLoading }] =
    userApi.useRegisterUserMutation();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // отменяем поведение формы установленное по умолчанию
    e.preventDefault();
    // Вызываем функцию для создания нового объекта FormData
    const formData = getFormValues(e.currentTarget);
    // Проверка на соответствие паролей
    if (formData.password !== formData.repeatPassword) {
      // указываем на расхождение в пароле
      setErrorPassword("Пароли не совпадают");
      return;
    } else {
      // Если соответствуют удаляем из formData лишнее свойство
      delete formData.repeatPassword;
      // и отправляем запрос на регистрацию
      await registerUser(formData);
    }
  };

  // Обрабатываем сценарий ошибки полученной во время запроса
  error && console.log("Вероятно вы уже зарегистрированы под этими данными!");
  return { isLoading, onSubmit, errorPassword };
};

export default useRegistrationForm;
