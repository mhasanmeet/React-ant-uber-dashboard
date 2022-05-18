import React, { useState} from 'react';
import { Form, Input, Card, Button } from 'antd';
import GooglePlacesAutoComplete, { geocodeByAddress } from 'react-google-places-autocomplete'

const Settings = () =>{
    const [address, setAddress] = useState(null);
    const [coordinate, setCoordinate] = useState(null);

    const getAddressLang = async (aadress) =>{
        setAddress(aadress);
        const getCodeByAddress =  await geocodeByAddress(aadress.lable);
        const latLng = await getlatLng(geocodedByAddress[0]);
        setCoordinate(latLng)
    }
    return(
        <Card title={"Restaurent Details"} style={{ margin: 20}}>
            <Form layout="vertical" wrapperCol={{span: 8}}>
                <Form.Item label={"Restaurent Name"} required>
                    <Input/>
                </Form.Item>
                <Form.Item label={"Restaurent Address"} required>
                    <GooglePlacesAutoComplete 
                    apiKey=''
                    selectProps={
                        {
                            value: address,
                            onchange: setAddress
                        }
                    }
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary'>Submit</Button>
                </Form.Item>
            </Form>
            <span>{coordinate?.lat} - {coordinate?.lng}</span>
        </Card>
    )
}

export default Settings;