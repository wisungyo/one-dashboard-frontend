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
  const [avatar, setAvatar] = useState<any>("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    handleGetProfile();
  }, []);

  const handleGetProfile = async () => {
    const response = await gerProfile();
    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(data.data));
      setName(data.data.name);
      setEmail(data.data.email);
      setPhoneNumber(data.data.phone_number);
      setBio(data.data.bio);
      setAvatarUrl(data.data.avatar.url);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    const params = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      bio: bio,
      password: password,
      avatar: avatar,
    };

    const response = await updateProfile(params);
    const data = await response.json();

    if (response.status === 200) {
      // setLoading(false);
      localStorage.setItem("user", JSON.stringify(data.data));
      window.location.reload();
    } else {
      setLoading(false);
    }
  };

  const handleUpdateHeader = (data: any) => {
    localStorage;
  };

  return {
    bio,
    name,
    email,
    avatarUrl,
    loading,
    password,
    phoneNumber,
    setBio,
    setName,
    setEmail,
    setAvatar,
    setPassword,
    setPhoneNumber,
    setAvatarUrl,
    handleGetProfile,
    handleUpdateProfile,
  };
};
