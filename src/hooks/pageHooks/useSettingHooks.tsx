import { gerProfile, updateProfile } from "@/api/profile";
import { useEffect, useState } from "react";
import { fixUrl } from "@/utils/urlFixer";

export const useSettingHooks = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarBinary, setAvatarBinary] = useState<Blob | null>(null);

  useEffect(() => {
    handleGetProfile();
  }, []);

  const handleGetProfile = async () => {
    const response = await gerProfile();
    const data = await response.json();

    if (response.status === 200) {
      console.log(data.data.avatar.url);
      localStorage.setItem("user", JSON.stringify(data.data));
      setName(data.data.name);
      setEmail(data.data.email);
      setPhoneNumber(data.data.phone_number);
      setBio(data.data.bio);
      setAvatar(data.data.avatar.url);
      setLoading(false);
    } else {
      setLoading(false);
      console.error(data);
    }
  };

  const handleUpdateProfile = async () => {
    const params = {
      name: name,
      email: email,
      phone_number: phoneNumber,
      bio: bio,
      password: password,
      avatar: avatarBinary,
    };
    console.log(params);

    const response = await updateProfile(params);
    const data = await response.json();

    if (response.status === 200) {
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(data.data));
    } else {
      setLoading(false);
      console.error(data);
    }
  };

  const handleUpdateHeader = (data: any) => {
    localStorage;
  };

  return {
    bio,
    name,
    email,
    avatar,
    loading,
    password,
    phoneNumber,
    setBio,
    setName,
    setEmail,
    setAvatar,
    setPassword,
    setPhoneNumber,
    setAvatarBinary,
    handleGetProfile,
    handleUpdateProfile,
  };
};
