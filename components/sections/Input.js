


export default Input = ({label, placeholder, command, setCommand }) =>{
    let valueLabel;
    if(label === 'specialite'){
        valueLabel = command.specialite;
    }

    const handleInputChange = (name, value) => {
        setCommand({
          ...command,
          [name]: value,
        });
      };

    return(
        <View>
            <Text>{label}</Text>
            <TextInput
              value={valueLabel}
              onChangeText={(value) => handleInputChange(valueLabel, value)}
              placeholder={placeholder}
              keyboardType="text"
            />
      </View>
    )
}