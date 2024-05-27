import { gerProfile, updateProfile } from "@/api/profile";
import { useEffect, useState } from "react";

export const useSettingHooks = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleGetProfile = async () => {
    setLoading(true);
    const response = await gerProfile();
    const data = await response.json();

    if (response.status === 200) {
      console.log(data);
      setName(data.data.name);
      setEmail(data.data.email);
      setPhoneNumber(data.data.phone_number);
      setBio(data.data.bio);
      setAvatar(data.data.avatar);
      setLoading(false);
    } else {
      console.error(data);
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true);

    const params = {
      name: name,
      email: email,
      phone_number: phoneNumber,
      bio: bio,
      password: password,
      avatar: avatar,
    };

    const response = await updateProfile(params);
    const data = await response.json();

    if (response.status === 200) {
      console.log("success update", data);
      localStorage.setItem("user", JSON.stringify(data.data));
      // window.location.reload();
    } else {
      console.error(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetProfile();
  }, []);

  return {
    loading,
    name,
    email,
    phoneNumber,
    bio,
    password,
    avatar,
    setName,
    setEmail,
    setPhoneNumber,
    setBio,
    setPassword,
    setAvatar,
    handleGetProfile,
    handleUpdateProfile,
  };
};
