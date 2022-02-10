import { toast } from "react-toastify";

export const isValidUrl = (url: string) => {
  var pattern = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
  let res = !!pattern.test(url);
  if(res) return "";
  return "Invalid URL Format";
}

export function isValue(value?: any) {
  if (value === undefined || value === '' || value === null || !value) return 'Required';
	return '';
}

export const handleAxiosError = (err: any, defaultMessage: string) => {
  if(err.response?.data.messages) toast(err.response.data.messages);
  else toast(defaultMessage);
  return null;
}