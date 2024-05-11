import { TextInput, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles6 from "./signin.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HeightSpacer, ReusableBtn, WidthSpacer } from "../../components";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password  must be at least 8 characters")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
});

const Signin = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  return (
    <View style={styles6.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched,
        }) => (
          <View style={{ paddingTop: 30 }}>
            <View style={styles6.wrapper}>
              <Text style={styles6.label}>Email</Text>
              <View>
                <View
                  style={styles6.inputWrapper(
                    touched.email ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder="Enter email"
                    onFocus={() => {
                      setFieldTouched("email");
                    }}
                    onBlur={() => {
                      setFieldTouched("email", "");
                    }}
                    onChange={handleChange("email")}
                    value={values.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles6.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            <View style={styles6.wrapper}>
              <Text style={styles6.label}>Password</Text>
              <View>
                <View
                  style={styles6.inputWrapper(
                    touched.password ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder="Enter password"
                    onFocus={() => {
                      setFieldTouched("password");
                    }}
                    onBlur={() => {
                      setFieldTouched("password", "");
                    }}
                    onChange={handleChange("password")}
                    value={values.password}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />

                  <TouchableOpacity
                    onPress={() => {
                      setObsecureText(!obsecureText);
                    }}
                  >
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      color={COLORS.black}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles6.errorMessage}>{errors.password}</Text>
                )}
              </View>
            </View>

            <HeightSpacer height={20} />

            <ReusableBtn
              onPress={handleSubmit}
              btnText={"SIGN IN"}
              width={SIZES.width - 40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signin;
