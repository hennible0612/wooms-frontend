import { useState } from 'react';
import axios from 'axios';

import Modal from '../common/Modal';
import Button from '../common/Button';

import dialogImg from '../../assets/dialog/dialog box big.png';
import eye_open from '../../assets/common/eye_open.png';
import eye_close from '../../assets/common/eye_close.png';

const baseUrl = 'https://i11e206.p.ssafy.io';

const PasswordChange = ({ onClose }) => {
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [message, setMessage] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordCheck, setShowNewPasswordCheck] = useState(false);

  const [values, setValues] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordCheck: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === 'newPassword') {
      const passwordRegex = new RegExp(
        '^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$'
      );
      setIsValidPassword(passwordRegex.test(value));
      if (!isValidPassword) {
        setMessage(
          '비밀번호는 8자 이상 16자 이하로, 영문, 숫자, 특수문자를 포함해야 합니다.'
        );
      } else {
        setMessage('');
      }
    } else if (name === 'newPasswordCheck') {
      setIsPasswordMatch(value === values.newPassword);
      if (!isPasswordMatch) {
        setMessage('비밀번호가 일치하지 않습니다.');
      } else {
        setMessage('');
      }
    }
  };

  const showInput = (value) => {
    if (value === 'oldPassword') {
      setShowOldPassword(!showOldPassword);
    } else if (value === 'newPassword') {
      setShowNewPassword(!showNewPassword);
    } else if (value === 'newPasswordCheck') {
      setShowNewPasswordCheck(!showNewPasswordCheck);
    }
  };

  const changePassword = async () => {
    try {
      const response = await axios.patch(
        `${baseUrl}/api/users/password`,
        {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        },
        { withCredentials: true }
      );
      console.log('비밀번호 변경 성공', response);
      setMessage('비밀번호가 성공적으로 변경되었습니다.');
    } catch (error) {
      setMessage('현재 비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      console.error('비밀번호 변경 실패', error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <section className='relative flex flex-col items-center w-full space-y-2 mt-6'>
        <div className='flex items-center w-full max-w-md space-x-4'>
          <label
            htmlFor='oldPassword'
            className='whitespace-nowrap flex-shrink-0 w-2/6 text-xl pt-4'
          >
            현재 비밀번호
          </label>
          <div className='relative w-2/3 max-w-sm'>
            <img src={dialogImg} alt='Dialog' className='w-full h-24' />
            <input
              type={showOldPassword ? 'text' : 'password'}
              id='oldPassword'
              name='oldPassword'
              value={values.oldPassword}
              onChange={handleChange}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6 p-2 bg-transparent border border-transparent rounded focus:outline-none text-xl'
            />
            <img
              src={!showOldPassword ? eye_close : eye_open}
              alt='eye-emoji'
              className='absolute top-9 right-4 cursor-pointer w-[26px]'
              onClick={() => showInput('oldPassword')}
            />
          </div>
        </div>
        <div className='flex items-center w-full max-w-md space-x-4'>
          <label
            htmlFor='newPassword'
            className='whitespace-nowrap flex-shrink-0 w-2/6 text-xl pt-4'
          >
            새 비밀번호
          </label>
          <div className='relative w-2/3 max-w-sm'>
            <img src={dialogImg} alt='Dialog' className='w-full h-24' />
            <input
              type={showNewPassword ? 'text' : 'password'}
              id='newPassword'
              name='newPassword'
              value={values.newPassword}
              onChange={handleChange}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6 p-2 bg-transparent border border-transparent rounded focus:outline-none text-xl'
            />
            <img
              src={!showNewPassword ? eye_close : eye_open}
              alt='eye-emoji'
              className='absolute top-9 right-4 cursor-pointer w-[26px]'
              onClick={() => showInput('newPassword')}
            />
          </div>
        </div>
        <div className='relative flex items-center w-full max-w-md space-x-4'>
          <label
            htmlFor='newPasswordCheck'
            className='whitespace-nowrap flex-shrink-0 w-2/6 text-xl pt-4'
          >
            새 비밀번호 확인
          </label>
          <div className='relative w-2/3 max-w-sm'>
            <img src={dialogImg} alt='Dialog' className='w-full h-24' />
            <input
              type={showNewPasswordCheck ? 'text' : 'password'}
              id='newPasswordCheck'
              name='newPasswordCheck'
              value={values.newPasswordCheck}
              onChange={handleChange}
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/6 p-2 bg-transparent border border-transparent rounded focus:outline-none text-xl'
            />
            <img
              src={!showNewPasswordCheck ? eye_close : eye_open}
              alt='eye-emoji'
              className='absolute top-9 right-4 cursor-pointer w-[26px]'
              onClick={() => showInput('newPasswordCheck')}
            />
          </div>
        </div>
        <div className='relative flex flex-col w-full items-center'>
          {(!isValidPassword || !isPasswordMatch) && (
            <p className='absolute text-xs text-red-600 -translate-y-3'>
              {message}
            </p>
          )}
          <div>
            <Button
              label={'저장'}
              onClick={changePassword}
              disabled={!isValidPassword || !isPasswordMatch}
            />
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default PasswordChange;
