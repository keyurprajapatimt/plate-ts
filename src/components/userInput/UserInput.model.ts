//you can define all possible props here , like custom styles and many more
export interface UserInputProps {
  label: string;
  isSecureText?: boolean;
  error: string | undefined;
  onChangeText: (text: string) => void;
  values: string;
}
